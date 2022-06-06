/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "@difx/constants";
import { Loading, showConfirm } from "@difx/core-ui";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import t from "@difx/locale";
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
  canCancelAll?: (cancelAll: boolean) => void;
  startDate?: number;
  endDate?: number;
}
export function SpotOpenOrderTransaction({ startDate = null, endDate = null, canCancelAll, pair = null, setPairs }: Props) {

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
      canCancelAll(true);
    } else {
      setTableData([]);
      canCancelAll(false);
    }
  }

  const cancelOrderSuccess = (response: AxiosResponse<BaseResponse>) => {
    const { data } = response;
    if (data) {
      // TODO
    }
  }
  const { mutate: getOrderBooks, isLoading: isDataLoading } = useHttpGetByEvent<any, { result: Array<Order> }>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_ORDER_OPEN() });
  const { mutate: cancelOrder, isLoading } = useHttpPut<Order, BaseResponse>({ onSuccess: cancelOrderSuccess, endpoint: API_ENDPOINT.CANCEL_ORDER });

  const isLoggedIn = useAtomValue(isLoggedInAtom);
  useEffect(() => {
    if (isLoggedIn) {
      let endpoint = API_ENDPOINT.GET_ORDER_OPEN();
      let joinOp = '?';
      if (pair) {
        endpoint = API_ENDPOINT.GET_ORDER_OPEN(pair);
        joinOp = '&'
      }
      if (startDate && endDate) endpoint += `${joinOp}from=${startDate}&to=${endDate}`;
      getOrderBooks({ endpoint });
    }
  }, [isLoggedIn, pair, getOrderBooks, startDate, endDate]);

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
      title: "ID", key: "id", dataIndex: 'id', width: '20%'
    },
    {
      title: "Date", dataIndex: "timestamp", key: "date",
      render: (text) => {
        return getCurrentDateTimeByDateString(text);
      }
    },
    {
      title: "Symbol", key: "symbol", dataIndex: 'symbol',
    },
    {
      title: "Type", dataIndex: "s", key: "type",
      render: (text) => {
        return (
          <Tag color={text === 0 ? "green" : "red"}>{text === 0 ? 'Buy' : 'Sell'}</Tag>
        )
      }
    },
    {
      title: "Price", dataIndex: "p", key: "price"
    },
    {
      title: "Executed", dataIndex: "executed", key: "executed", width: '10%',
      render: (text, record) => {
        return (
          <Progress type="circle" percent={((record.oq - record.q) * 100) / record.oq} width={35} strokeWidth={9} className={record.s === 0 ? "success" : "error"} />
        )
      }
    },
    {
      title: "Size", dataIndex: "q", key: "q", width: '10%',
    },
    {
      title: "Fee", dataIndex: "tfee", key: "tfee", width: '10%',
    },
    {
      key: "status", dataIndex: "status", align: "right" as const, width: '10%',
    },
    {
      title: '',
      dataIndex: '',
      render: (text, record) => {
        return (
          <Button htmlType="button"
            onClick={() => {
              showConfirm(
                t("order.cancel_order"),
                t("order.cancel_order_confirm"),
                () => { if (!isLoading) { cancelOrder({ side: record.s, trade_id: record.id }) } },
                null,
                <ExclamationCircleOutlined />
              )
            }}>{t("order.cancel")}
          </Button>
        )
      }
    }
  ];

  if (isEmpty(tableData) && isDataLoading) return <>
    <Loading type="skeleton" row={1} column={6} flexGrowForColumns={[1, 2, 1, 2, 1, 2]} />
    <Loading style={{ marginTop: -20 }} type="skeleton" row={10} column={6} flexGrowForColumns={[1, 2, 1, 2, 1, 2]} />
  </>

  return (
    <OrderTransacrtionWrapper>
      <Table
        columns={columns}
        /* eslint-disable */
        // @ts-ignore
        dataSource={tableData}
        pagination={false}
        className="common-table"
        rowKey={record => `oo_${record.id}`}
      />
    </OrderTransacrtionWrapper>
  );
}

export default SpotOpenOrderTransaction;
