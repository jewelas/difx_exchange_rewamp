/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "@difx/constants";
import { Loading } from "@difx/core-ui";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { BaseResponse, isLoggedInAtom, Order, useHttpGetByEvent, useHttpPut, useSocket, SocketEvent } from "@difx/shared";
import { Progress, Table, Tag, Button } from "antd";
import { AxiosResponse } from "axios";
import { useAtomValue } from "jotai/utils";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from "react";
import { OrderTransacrtionWrapper } from "../styled";

interface Props {
  pair?: string;
  setPairs?: (pairs: string[]) => void;
}
export function SpotOrderHistoryTransaction({ pair = null, setPairs }: Props) {


  const [tableData, setTableData] = useState<Array<Order>>([]);

  const getOrderBookSuccess = (response: AxiosResponse<{ result: Array<Order> }>) => {
    const { data } = response;
    const _pairs = [];
    if (data && !isEmpty(data.result)) {
      for (const order of data.result) {
        if (!tableData.find(e => e.id === order.id)) {
          tableData.push(order);
        }
        if (!_pairs.find(e => e === order.symbol)) _pairs.push(order.symbol);
      }
      setPairs && setPairs(_pairs);
      let newTableData = tableData;
      if (pair) newTableData = newTableData.filter(e => e.symbol === pair)
      setTableData([...newTableData]);
    } else {
      setTableData([]);
    }
  }

  const cancelOrderSuccess = (response: AxiosResponse<BaseResponse>) => {
    const { data } = response;
    if (data) {
      // TODO
    }
  }
  const { mutate: getOrderBooks, isLoading: isDataLoading } = useHttpGetByEvent<any, { result: Array<Order> }>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_ORDER_HISTORY() });
  const { mutate: cancelOrder, isLoading } = useHttpPut<Order, BaseResponse>({ onSuccess: cancelOrderSuccess, endpoint: API_ENDPOINT.CANCEL_ORDER });

  const isLoggedIn = useAtomValue(isLoggedInAtom);
  useEffect(() => {
    if (isLoggedIn) {
      if (pair) {
        getOrderBooks({ endpoint: API_ENDPOINT.GET_ORDER_HISTORY(pair) });
      } else {
        getOrderBooks(null);
      }
    }
  }, [isLoggedIn, pair, getOrderBooks]);

  useEffect(() => {
    setTableData([]);
  }, [pair]);


  const userOrdersData = useSocket({ event: SocketEvent.user_orders });
  useEffect(() => {
    if (userOrdersData) {
      const index = tableData.findIndex(e => e.id === userOrdersData.id);
      if (index !== -1) {
        if (userOrdersData.q === 0) {
          tableData.splice(index, 1);
        } else {
          tableData[index].q = userOrdersData.q;
          tableData[index].oq = userOrdersData.oq;
        }
      } else {
        userOrdersData.timestamp = new Date();
        tableData.push(userOrdersData);
      }
      setTableData([...tableData]);
    }
  }, [userOrdersData]);


  const columns = [
    {
      title: "Date", dataIndex: "timestamp", key: "date", width: '20%',
    },
    {
      title: "Pair", key: "symbol", dataIndex: 'symbol',
    },
    {
      title: "Type", dataIndex: "type", key: "type",
      render: (text) => {
        return text === 'l ' ? 'Limit' : 
                text === 'm ' ? 'Market' :
                text === 'sl' ? 'Stop Limit' :''
      }
    },
    {
      title: "Side", dataIndex: "s", key: "side",
      render: (text) => {
        return (
          <Tag color={text === 0 ? "green" : "red"}>{text === 0 ? 'Buy' : 'Sell'}</Tag>
        )
      }
    },
    {
      title: "Average", dataIndex: "p", key: "average",
    },
    {
      title: "Executed", dataIndex: "executed", key: "executed", width: '10%',
      render: (text,record) => {
        return (
          <Progress type="circle" percent={parseInt((((record.oq - record.q) * 100) / record.oq).toFixed(0))   } width={35} strokeWidth={9} className="success" />
        )
      }
    },
    {
      title: "Amount", dataIndex: "q", key: "amount", width: '10%',
      render: (text) => {
        return text.toFixed(2)
      }
    },
    {
      title: "Status", key: "status", dataIndex: "status", align: "right" as const, width: '10%',
    },
  ];

  if (isEmpty(tableData) && isDataLoading) return <>
    <Loading type="skeleton" row={1} column={6} flexGrowForColumns={[1, 2, 1, 2, 1, 2]} />
    <Loading style={{ marginTop: -20 }} type="skeleton" row={10} column={6} flexGrowForColumns={[1, 2, 1, 2, 1, 2]} />
  </>

  return (
    <OrderTransacrtionWrapper>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        className="common-table"
        rowKey={"id"}
      />
    </OrderTransacrtionWrapper>
  );
}

export default SpotOrderHistoryTransaction;
