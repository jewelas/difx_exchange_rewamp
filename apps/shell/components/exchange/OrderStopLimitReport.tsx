/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT } from "@difx/constants";
import { Icon, Loading, Typography } from "@difx/core-ui";
import { BaseResponse, Order, useAuth, SocketEvent, useSocket, useSocketProps, useHttpGetByEvent, useHttpPost, isLoggedInAtom } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { useAtomValue } from "jotai/utils";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from 'react';
interface Props {
  isSelectedPairOnly?: boolean;
  pair?: string;
  height?: number;
}
export function OrderStopLimitReport({ height = 200, pair, isSelectedPairOnly = false }: Props) {

  const [tableData, setTableData] = useState<Array<Order>>([]);

  const param: useSocketProps = {
    event: SocketEvent.user_stoplimits,
  };
  const userOrdersData = useSocket(param);

  useEffect(() => {
    if (userOrdersData) {
      const index = tableData.findIndex(e => e.id === userOrdersData.id)
      if (index !== -1) {
        if (userOrdersData.amount === 0) {
          tableData.splice(index, 1);
        }
      } else {
        userOrdersData.timestamp = new Date();
        tableData.push(userOrdersData);
      }
      setTableData([...tableData]);
    }
  }, [userOrdersData]);

  const getOrderBookSuccess = (response: AxiosResponse<{ result: Array<Order> }>) => {
    const { data } = response;
    if (data && !isEmpty(data.result)) {
      for (const order of data.result) {
        if (!tableData.find(e => e.id === order.id)) {
          tableData.push(order);
        }
      }
      let newTableData = tableData;
      if(isSelectedPairOnly){
        newTableData = newTableData.filter((e:any)=>e.symbol === pair);
      }
      setTableData([...newTableData]);
    } else {
      setTableData([]);
    }
  }

  const cancelOrderSuccess = (response: AxiosResponse<BaseResponse>) => {
    const { data } = response;
    if (data) {
      getOrderBooks(null);
    }
  }

  const { mutate: getOrderBooks, isLoading: isDataLoading } = useHttpGetByEvent<any, { result: Array<Order> }>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_ORDER_STOP_LIMIT() });
  const { mutate: cancelOrder, isLoading } = useHttpPost<Order, BaseResponse>({ onSuccess: cancelOrderSuccess, endpoint: API_ENDPOINT.CANCEL_STOP_LIMIT_ORDER }); // TODO: handle headers in interceptor in useHttp

  const isLoggedIn = useAtomValue(isLoggedInAtom);
  useEffect(() => {
    if (isLoggedIn) {
      if (isSelectedPairOnly && pair) {
        getOrderBooks({ endpoint: API_ENDPOINT.GET_ORDER_STOP_LIMIT(pair) });
      } else {
        getOrderBooks(null);
      }
    }

  }, [isSelectedPairOnly, isLoggedIn, pair]);

  const columns = [
    {
      title: 'Date',
      sorter: {
        compare: (a, b) => {
          const aTime = new Date(a.timestamp).getTime();
          const bTime = new Date(b.timestamp).getTime();
          return aTime - bTime;
        },
      },
      dataIndex: 'timestamp',
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{getCurrentDateTimeByDateString(text)}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      sorter: {
        compare: (a, b) => a.symbol.localeCompare(b.symbol),
      },
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{text}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Side',
      dataIndex: 'side',
      sorter: {
        compare: (a, b) => a.side - b.side,
      },
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3" color={text === 0 ? 'success' : 'danger'}>{text === 0 ? 'BUY' : 'SELL'}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Limit',
      dataIndex: 'limit',
      sorter: {
        compare: (a, b) => a.limit - b.limit,
      },
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{text}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Stop',
      dataIndex: 'stop',
      sorter: {
        compare: (a, b) => a.stop - b.stop,
      },
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{text}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Size',
      dataIndex: 'amount',
      sorter: {
        compare: (a, b) => a.amount - b.amount,
      },
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{text}</Typography>
          </div>
        )
      }
    },
    {
      title: '',
      dataIndex: '',
      render: (text, record) => {
        return (
          <div
            onClick={() => {
              // eslint-disable-next-line
              // @ts-ignore
              if (!isLoading) cancelOrder({ id: record.id })
            }}
            className="cell">
            <Icon.TrashIcon useDarkMode width={20} height={20} />
          </div>
        )
      }
    }
  ];

  if (isEmpty(tableData) && isDataLoading) return <>
    <Loading type="skeleton" row={1} column={6} flexGrowForColumns={[1, 2, 1, 2, 1, 2]} />
    <Loading style={{ marginTop: -20 }} type="skeleton" row={10} column={6} flexGrowForColumns={[1, 2, 1, 2, 1, 2]} />
  </>

  return (
    <Table
      scroll={{ x: "max-content", y: height }}
      showSorterTooltip={false}
      pagination={false}
      columns={columns}
      dataSource={[...tableData]}
      rowKey="id"
    />
  );
}

export default OrderStopLimitReport;