/* eslint-disable @typescript-eslint/no-explicit-any */
import { ASSETS_URL } from "@difx/constants";
import t from "@difx/locale";
import { Avatar, Button, Divider, Space, Table } from "antd";
import Text from "antd/lib/typography/Text";
import Link from "next/link";
import { RecentTransactionsWrapper } from "./styled";


interface DataType {
    key: string;
    coin: string;
    amount: number;
    type: string;
    date: string;
    status: string;
  }

export function SpotTransactions({userBalance}) {


  const columns = [
    {
      title: "Coin", key: "currency", dataIndex: 'currency', width: 16 , 
      render: (item: string) => {
        return(
          <>
            <Space>
              <Avatar shape="square" size={22} src={`${ASSETS_URL}${item.toLowerCase()}.png`}/>
              <Text>{item}</Text> 
            </Space>
          </> 
        )
      }
    },
    {
      title: "Amount", key: "amount", dataIndex: 'amount', width: 16
    },
    {
      title: "InOrder", key: "inorder", dataIndex: 'inorder', width: 16
    },
    {
      title: "Total", key: "total", dataIndex: 'total', width: 16
    },
    {
      title: "", key: "button-group", align: "right" as const, width: 36,
      render: (item: string) => {
        return(
          <>
            <Space split={<Divider type="vertical" className="table-btn-divider"/>} className="wallet-btn-group">
              <Link href="/wallet/deposit"><Button  type="link" className="deposit-link">{t("wallet.deposit")}</Button></Link>
              <Link href="/wallet/withdraw"><Button type="link">{t("wallet.withdraw")}</Button></Link>
              <Button type="link">{t("wallet.transfer")}</Button>
            </Space>
          </> 
        )
      }
    },

  ];

  return (
    <RecentTransactionsWrapper>
      <Table
      columns={columns}
      dataSource={userBalance}
      pagination={{ position: ['bottomCenter'] }}
      className="common-table"
      />
    </RecentTransactionsWrapper>
  );
}

export default SpotTransactions;
