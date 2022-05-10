/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT } from "@difx/constants";
import { Typography, Icon, Loading } from "@difx/core-ui";
import { Order, useAuth, useHttpPost, useHttpGetByEvent, SocketEvent, useSocket, useSocketProps, BaseResponse } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from 'react';

export function OrderOpenReport() {

  // const { token } = useAuth();
  // const headers = { headers: { 'x-access-token': token } }

  const [tableData, setTableData] = useState<Array<Order>>([]);

  const param: useSocketProps = {
    event: SocketEvent.user_orders,
  };
  const userOrdersData = useSocket(param);

  const getOrderBookSuccess = (response: AxiosResponse<Array<Order>>) => {
    const { data } = response;
    if (data) {
      for (const order of data) {
        if (!tableData.find(e => e.id === order.id)) {
          tableData.push(order);
          setTableData([...tableData]);
        }
      }
    }else{
      setTableData([]);
    }
  }

  useEffect(() => {
    if (userOrdersData) {
      const index = tableData.findIndex(e => e.id === userOrdersData.id);
      if (index !== -1) {
        if (userOrdersData.q === 0) {
          tableData.splice(index, 1);
        }else{
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

  const { mutate: getOrderBooks, isLoading: isDataLoading } = useHttpGetByEvent<any, Array<Order>>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_ORDER_OPEN });
  const { mutate: cancelOrder, isLoading } = useHttpPost<Order, BaseResponse>({ onSuccess: cancelOrderSuccess, endpoint: API_ENDPOINT.CANCEL_BID_ORDER }); // TODO: handle headers in interceptor in useHttp

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
    },
    {
      title: '',
      dataIndex: '',
      render: (text, record) => {
        return (
          <div
            onClick={() => {
              if (!isLoading) {
                record.s === 0
                // eslint-disable-next-line
                // @ts-ignore
                  ? cancelOrder({ id: record.id }) // Cancel Bid Order
                  // eslint-disable-next-line
                  // @ts-ignore
                  : cancelOrder({ id: record.id, endpoint: API_ENDPOINT.CANCEL_ASK_ORDER }) // Cancel Ask Order
              }
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
      scroll={{ x: "max-content", y: 260 }}
      showSorterTooltip={false}
      pagination={false}
      columns={columns}
      dataSource={tableData}
      rowKey="id"
    />
  );
}

export default OrderOpenReport;