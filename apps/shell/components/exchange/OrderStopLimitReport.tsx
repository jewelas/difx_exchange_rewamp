/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT } from "@difx/constants";
import { Icon, Loading, Typography } from "@difx/core-ui";
import { BaseResponse, Order, useAuth, SocketEvent, useSocket, useSocketProps, useHttpGetByEvent, useHttpPost } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from 'react';

export function OrderStopLimitReport() {

  // const { token } = useAuth();
  // const headers = { headers: { 'x-access-token': token } }

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

  const getOrderBookSuccess = (response: AxiosResponse<Array<Order>>) => {
    const { data } = response;
    if (data) {
      for (const order of data) {
        if (!tableData.find(e => e.id === order.id)) {
          tableData.push(order);
          setTableData([...tableData]);
        }
      }
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

  const { mutate: getOrderBooks, isLoading: isDataLoading } = useHttpGetByEvent<any, Array<Order>>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_ORDER_STOP_LIMIT });
  const { mutate: cancelOrder, isLoading } = useHttpPost<Order, BaseResponse>({ onSuccess: cancelOrderSuccess, endpoint: API_ENDPOINT.CANCEL_STOP_LIMIT_ORDER }); // TODO: handle headers in interceptor in useHttp


  useEffect(() => {
    getOrderBooks(null);
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
      title: 'Limit',
      dataIndex: 'limit',
      sorter: {
        compare: (a, b) => a.limit - b.limit,
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
      title: 'Stop',
      dataIndex: 'stop',
      sorter: {
        compare: (a, b) => a.stop - b.stop,
        multiple: 5,
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
        multiple: 6,
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

  if (isEmpty(tableData) && isDataLoading) return <Loading />

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