/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "@difx/constants";
import { Icon, Loading, Typography, showSuccess, showConfirm } from "@difx/core-ui";
import t from "@difx/locale";
import { BaseResponse, Order, SocketEvent, isLoggedInAtom, useHttpGetByEvent, useHttpPut, useSocket } from "@difx/shared";
import { getCurrentDateTimeByDateString } from "@difx/utils";
import { Table, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
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

  const cancelOrderSuccess = (response: AxiosResponse<BaseResponse>) => {
    const { data } = response;
    if (data) {
      showSuccess('Cancel Order', data.message);
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
  }, [isSelectedPairOnly, isLoggedIn, pair]);

  const columns = [
    {
      title: t("report.date"),
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
      title: t("report.symbol"),
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
      title: t("report.side"),
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
      title: t("report.price"),
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
      title: t("report.size"),
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
      title: t("report.filled"),
      dataIndex: 'oq',
      sorter: {
        compare: (a, b) => a.q - b.q,
      },
      render: (text, record) => {
        const filled = ((record.oq - record.q) * 100) / record.oq
        return (
          <div className='cell'>
            <Typography level="B3">{`${filled}%` || '0.00%'}</Typography>
          </div>
        )
      }
    },
    {
      title: t("report.total"),
      dataIndex: 'total',
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
      title: '',
      dataIndex: '',
      render: (text, record) => {
        return (
          <div
            onClick={() => {
              showConfirm(
                t("order.cancel_order"),
                t("order.cancel_order_confirm"),
                () => { if (!isLoading) { cancelOrder({ side: record.s, trade_id: record.id }) } },
                null,
                <ExclamationCircleOutlined />
              )
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
      rowKey={record => `openOrder_${record.id}`}
    />
  );
}

export default OrderOpenReport;