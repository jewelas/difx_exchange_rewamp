/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Space, Table } from "antd";
import React from "react";
import { RecentTransactionsWrapper } from "./styled";


interface DataType {
    key: string;
    coin: string;
    amount: number;
    type: string;
    date: string;
    status: string;
  }

export function FutureTransactions() {
  const columns = [
    {
      title: "Coin", key: "coin", dataIndex: 'coin',
    },
    {
      title: "Amount", key: "amount", dataIndex: 'amount',
    },
    {
      title: "Type",
      key: "type",
      dataIndex: 'type',
    },
    { title: "Date", dataIndex: "date", key: "date"},
    {
      title: "Chart",
      key: "date",
      dataIndex: "date"
    },
    {
      title: "Status", key: "status", align: "right" as const,
      render: () => (
        <Space size="middle">
            <Button
              type="text"
              className="ant-btn-success"
            >
              Completed
            </Button>
        </Space>
      )
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      coin: 'John Brown',
      amount: 32,
      type: 'New York No. 1 Lake Park',
      date: "2022-02-22",
      status: "Completed"
    },
    {
      key: '2',
      coin: 'John Brown',
      amount: 32,
      type: 'New York No. 1 Lake Park',
      date: "2022-02-22",
      status: "Completed"
    },
    {
      key: '3',
      coin: 'John Brown',
      amount: 32,
      type: 'New York No. 1 Lake Park',
      date: "2022-02-22",
      status: "Completed"
    },
  ];

  return (
    <RecentTransactionsWrapper>
      <Table
      columns={columns}
      dataSource={data}
      pagination={{ position: ['bottomCenter'] }}
      className="common-table"
      />
    </RecentTransactionsWrapper>
  );
}

export default FutureTransactions;
