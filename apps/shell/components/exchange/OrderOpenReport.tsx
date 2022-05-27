/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT } from "@difx/constants";
import { Icon, Loading, Typography } from "@difx/core-ui";
import { BaseResponse, Order, SocketEvent, isLoggedInAtom, useHttpGetByEvent, useHttpPut, useSocket, useSocketProps } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import { useAtomValue } from "jotai/utils";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from 'react';

interface Props {
  isSelectedPairOnly?: boolean;
  pair?: string;
  height?: number;
}
export function OrderOpenReport({ height = 200, pair, isSelectedPairOnly = false }: Props) {

  const [tableData, setTableData] = useState<Array<Order>>([]);

  const param: useSocketProps = {
    event: SocketEvent.user_orders,
  };
  const userOrdersData = useSocket(param);

  const getOrderBookSuccess = (response: AxiosResponse<{ result: Array<Order> }>) => {
    const { data } = response;

    if (data && !isEmpty(data.result)) {
      for (const order of data.result) {
        if (!tableData.find(e => e.id === order.id)) {
          tableData.push(order);
          setTableData([...tableData]);
        }
      }
    } else {
      setTableData([]);
    }
  }

  useEffect(() => {
    if (userOrdersData) {
      const index = tableData.findIndex(e => e.id === userOrdersData.id);
      if (index !== -1) {
        if (userOrdersData.q === 0) {
          tableData.splice(index, 1);
        } else {
          tableData[index].q = userOrdersData.q;
        }
      } else {
        userOrdersData.timestamp = new Date();
        tableData.push(userOrdersData);
      }
      setTableData([...tableData]);
    }
  }, [userOrdersData]);

  const cancelOrderSuccess = (response: AxiosResponse<BaseResponse>) => {
    const { data } = response;
    if (data) {
      getOrderBooks(null);
    }
  }

  const { mutate: getOrderBooks, isLoading: isDataLoading } = useHttpGetByEvent<any, { result: Array<Order> }>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_ORDER_OPEN() });
  const { mutate: cancelOrder, isLoading } = useHttpPut<Order, BaseResponse>({ onSuccess: cancelOrderSuccess, endpoint: API_ENDPOINT.CANCEL_ORDER });

  const isLoggedIn = useAtomValue(isLoggedInAtom);
  useEffect(() => {
    if (isLoggedIn) {
      if (isSelectedPairOnly && pair) {
        getOrderBooks({ endpoint: API_ENDPOINT.GET_ORDER_OPEN(pair) });
      } else {
        getOrderBooks(null);
      }
    }
  }, [isSelectedPairOnly, isLoggedIn]);

  const columns = [
    {
      title: 'Date',
      sorter: {
        compare: (a, b) => {
          const aTime = new Date(a.timestamp).getTime();
          const bTime = new Date(b.timestamp).getTime();
          return aTime - bTime;
        },
        multiple: 4,
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
        multiple: 2,
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
      dataIndex: 's',
      sorter: {
        compare: (a, b) => a.s - b.s,
        multiple: 3,
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
      title: 'Price',
      dataIndex: 'p',
      sorter: {
        compare: (a, b) => a.p - b.p,
        multiple: 4,
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
      dataIndex: 'q',
      sorter: {
        compare: (a, b) => a.q - b.q,
        multiple: 4,
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
              if (!isLoading) { cancelOrder({ side: record.s, trade_id: record.id }) }
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
      dataSource={tableData}
      rowKey="id"
    />
  );
}

export default OrderOpenReport;