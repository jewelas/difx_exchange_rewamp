/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon, Loading, Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { useHttpGet, useTransactionDetailsModal } from "@difx/shared";
import { Avatar, Button, Space, Table } from "antd";
import Text from "antd/lib/typography/Text";
import { RecentTransactionsWrapper } from "../styled";
import { API_ENDPOINT, ASSETS_URL, QUERY_KEY } from "@difx/constants"
import { getCurrentDateTimeByDateString } from "@difx/utils";



interface DataType {
    key: string;
    coin: string;
    amount: number;
    type: string;
    date: string;
    status: string;
  }

export function WithdrawalsTransactions() {
  const {modalVisible, setModalVisible} = useTransactionDetailsModal()
  const { data, isLoading } = useHttpGet( QUERY_KEY.RECENT_TRANSACTIONS ,API_ENDPOINT.GET_TRANSACTION_LIST(1,10), null)

  const iconSwitch = (type) => {
    switch(type){
      case "withdraw":
        return <Icon.WalletWithdrawIcon useDarkMode width={16} height={16} />
      case "deposit":
        return <Icon.WalletDepositIcon useDarkMode width={16} height={16} />
      default:
        return <Icon.WalletTransferIcon useDarkMode width={16} height={16} />
    }
  }
  
  const statusSwitch = (type) => {
    switch(type){
      case "new":
        return <Button type="text" className="ant-btn-success" > Completed </Button>
      case "requires_admin_confirmation":
        return <Button type="text" className="ant-btn-info" > Pending </Button>
      default:
        return <Button type="text" className="ant-btn-dangerous" onClick={() => {setModalVisible(!modalVisible)}}> Declined </Button>
    }
  }

  const columns = [
    {
      title: "Coin", key: "coin", dataIndex: 'coin', width: '20%',
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
      title: "Amount", key: "amount", dataIndex: 'amount', width: '20%',
    },
    { title: "Type", key: "type", dataIndex: 'type', width: '20%',
      render: (item: string) => {
        return(
          <>
            <Space>
              {iconSwitch(item)}
              {item}
            </Space>
          </> 
        )
      }
    },
    { title: "Date", dataIndex: "timestamp", key: "date", width: '20%',
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{getCurrentDateTimeByDateString(text)}</Typography>
          </div>
        )
      }
    },
    {
      title: "Status", key: "status", align: "right" as const, width: '20%',
      render: (item) => ( 
        <Space size="middle">
            {statusSwitch(item)}
        </Space>
      )
    },
  ];

  if(isLoading){
    return <Loading />
  }

  return (
    <RecentTransactionsWrapper>
      <Table
        columns={columns}
        /* eslint-disable */
        // @ts-ignore
        dataSource={data.result}
        pagination={false}
        className="common-table"
      />
      </RecentTransactionsWrapper>
  );
}

export default WithdrawalsTransactions;
