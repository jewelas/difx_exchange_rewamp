/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import isEmpty from "lodash/isEmpty";
import { API_ENDPOINT } from "@difx/constants";
import { Loading, Typography } from "@difx/core-ui";
import { useAtomValue } from "jotai/utils";
import { Order, isLoggedInAtom, useHttpGetByEvent, useSocketProps, SocketEvent, useSocket } from "@difx/shared";
import { getCurrentDateTimeByDateString, getPriceFormatted } from "@difx/utils";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import { useEffect, useState } from 'react';

export function TradeHistoryReport({ height = 200, pair, isSelectedPairOnly }: { height?: number; pair: string, isSelectedPairOnly?: boolean }) {

  const isLoggedIn = useAtomValue(isLoggedInAtom);

  const [tableData, setTableData] = useState<Array<Order>>([]);

  const param: useSocketProps = {
    event: SocketEvent.user_trades,
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
      if (isSelectedPairOnly) {
        newTableData = newTableData.filter((e: any) => e.symbol === pair);
      }
      setTableData([...newTableData]);
    } else {
      setTableData([]);
    }
  }
  const { mutate: getOrderBooks, isLoading: isDataLoading } = useHttpGetByEvent<any, { result: Array<Order> }>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_MY_TRADES() });

  useEffect(() => {
    if (isLoggedIn) {
      if (isSelectedPairOnly && pair) {
        getOrderBooks({ endpoint: API_ENDPOINT.GET_MY_TRADES(pair) });
      } else {
        getOrderBooks(null);
      }
    }
  }, [isLoggedIn, isSelectedPairOnly, pair]);

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
      title: 'Type',
      dataIndex: 's',
      sorter: {
        compare: (a, b) => a.s - b.s,
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
      title: 'Fee',
      dataIndex: 'fee',
      sorter: {
        compare: (a, b) => a.q - b.q,
      },
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{text || '0.00'}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Total',
      dataIndex: 'total',
      sorter: {
        compare: (a, b) => {
          const _a = ((a.p * a.q) + a.fee);
          const _b = ((b.p * b.q) + b.fee);
          return _a - _b;
        }
      },
      render: (text, record) => {
        return (
          <div className='cell'>
            <Typography level="B3">{getPriceFormatted((record.p * record.q) + record.fee, 2) || '0.00'}</Typography>
          </div>
        )
      }
    },
  ];

  if (isEmpty(tableData) && isDataLoading) return <Loading type='component' />

  return (
    <Table
      showSorterTooltip={false}
      scroll={{ x: "max-content", y: height + 30 }}
      pagination={false}
      columns={columns}
      dataSource={[...tableData]}
      rowKey="id"
    />
  );
}

export default TradeHistoryReport;