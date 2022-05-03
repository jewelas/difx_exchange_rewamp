/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT } from "@difx/constants";
import { Loading, Typography } from "@difx/core-ui";
import { Order, useAuth, useHttpGetByEvent } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from 'react';

export function OrderStopLimitReport() {

  const { token } = useAuth();
  const headers = { headers: { 'x-access-token': token } }

  const [tableData, setTableData] = useState<Array<Order>>([]);

  const getOrderBookSuccess = (response: AxiosResponse<Array<Order>>) => {
    const { data } = response;
    if (data) {
      for (const order of data) {
        if (!tableData.find(e => e.id === order.id)) {
          tableData.push(order);
          setTableData(tableData);
        }
      }
    }
  }
  const { mutate: getOrderBooks } = useHttpGetByEvent<any, Array<Order>>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_ORDER_STOP_LIMIT });

  useEffect(() => {
    getOrderBooks(headers);
  }, []);

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
      dataIndex: 'side',
      sorter: {
        compare: (a, b) => a.side - b.side,
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

  if(isEmpty(tableData)) return <Loading/>

  return (
    <Table
      showSorterTooltip={false}
      pagination={false}
      columns={columns}
      dataSource={[...tableData]}
      rowKey="id"
    />
  );
}

export default OrderStopLimitReport;