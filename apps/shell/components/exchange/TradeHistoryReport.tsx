/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import isEmpty from "lodash/isEmpty";
import { API_ENDPOINT } from "@difx/constants";
import { Loading, Typography } from "@difx/core-ui";
import { useAtomValue } from "jotai/utils";
import { Order, isLoggedInAtom, useHttpGetByEvent } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import { useEffect, useState } from 'react';

export function TradeHistoryReport({height = 200, pair, isSelectedPairOnly }: {height?: number; pair: string, isSelectedPairOnly?: boolean }) {

  const isLoggedIn = useAtomValue(isLoggedInAtom);

  const [tableData, setTableData] = useState<Array<Order>>([]);

  const getOrderBookSuccess = (response: AxiosResponse<{result: Array<Order>}>) => {
    const { data } = response;
    if (data && !isEmpty(data.result)) {
      for (const order of data.result) {
        if (!tableData.find(e => e.id === order.id)) {
          tableData.push(order);
          setTableData(tableData);
        }
      }
    } else {
      setTableData([]);
    }
  }
  const { mutate: getOrderBooks, isLoading: isDataLoading } = useHttpGetByEvent<any, {result:Array<Order>}>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_MY_TRADES() });

  useEffect(() => {
    if (isLoggedIn) {
      if (isSelectedPairOnly && pair) {
        getOrderBooks({ endpoint: API_ENDPOINT.GET_MY_TRADES(pair) });
      } else {
        getOrderBooks(null);
      }
    }
  }, [isLoggedIn, isSelectedPairOnly]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      render: (text, record) => {
        return (
          <div className="cell">
            <Typography level="B3">{text}</Typography>
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
      title: 'Type',
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
    }
  ];

  if (isEmpty(tableData) && isDataLoading) return <Loading type='component' />

  return (
    <Table
      showSorterTooltip={false}
      scroll={{ x: "max-content", y: height+30 }}
      pagination={false}
      columns={columns}
      dataSource={[...tableData]}
      rowKey="id"
    />
  );
}

export default TradeHistoryReport;