/* eslint-disable @typescript-eslint/no-explicit-any */
import { Progress, Table, Tag } from "antd";
import { OrderTransacrtionWrapper } from "../styled";



export function FutureOrderHistoryTransaction() {
  
  const dataSource = [
    {
      key: 1,
      date: "17326291155",
      pair: 32,
      type: "BTCUSDT",
      side: "Buy",
      average: "Buy",
      executed: "Buy",
      amount: "2",
      status: "Cancel"
    }
  ];

  const columns = [
    { title: "Date", dataIndex: "date", key: "date", width: '20%',
    },
    { title: "Pair", key: "pair", dataIndex: 'pair',
    },
    { title: "Type", dataIndex: "type", key: "type",
    render: () => {
        return(
           <Tag color="green">Buy</Tag>
        )
      }
    },
    { title: "Side", dataIndex: "side", key: "side",
    },
    { title: "Average", dataIndex: "average", key: "average",
    },
    { title: "Executed", dataIndex: "executed", key: "executed", width: '10%',
    render: () => {
        return(
            <Progress type="circle" percent={50} width={35} strokeWidth={9} className="success"/>
        )
      }
    },
    { title: "Amount", dataIndex: "amount", key: "amount", width: '10%',
    },
    {title: "Status", key: "status", dataIndex: "status", align: "right" as const, width: '10%',
    },
  ];

  return (
    <OrderTransacrtionWrapper>
      <Table
        columns={columns}
        /* eslint-disable */
        // @ts-ignore
        dataSource={dataSource}
        pagination={false}
        className="common-table"
      />
      </OrderTransacrtionWrapper>
  );
}

export default FutureOrderHistoryTransaction;
