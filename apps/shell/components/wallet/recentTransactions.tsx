/* eslint-disable @typescript-eslint/no-explicit-any */
import { ASSETS_URL } from "@difx/constants";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { Avatar, Button, Col, Row, Space, Table } from "antd";
import Text from "antd/lib/typography/Text";
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

export function RecentTransactions() {
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
      <div className="recent_transactions_header">
      <Row align="middle" justify="space-between">
          <Col>
          <h3>Recent Transactions</h3>
          </Col>
          <Col>
              <a href={"/"} target="_blank" rel="noreferrer">
                  <Button type="link" className="anchor-link" icon={<Icon.BoardIcon />}>
                      View All
                  </Button>
              </a>
          </Col>
      </Row>
      </div>
      <Table
      columns={columns}
      dataSource={data}
      pagination={{ position: ['bottomCenter'] }}
      className="common-table"
      />
      </RecentTransactionsWrapper>
  );
}

export default RecentTransactions;
