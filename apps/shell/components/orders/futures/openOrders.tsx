/* eslint-disable @typescript-eslint/no-explicit-any */
import { Progress, Table, Tag } from "antd";
import { OrderTransacrtionWrapper } from "../styled";

export function FutureOpenOrderTransaction() {
  
  const dataSource = [
    {
      key: 1,
      id: "Mike",
      timestamp: 32,
      symbol: "BTCUSDT",
      type: "Buy",
      price: "Buy",
      executed: "Buy",
      size: "2",
      fee: "0.1%",
      status: "Cancel"
    }
  ];

  const columns = [
    {title: "ID", key: "id", dataIndex: 'id', width: '20%'
    },
    { title: "Date", dataIndex: "timestamp", key: "date",
    },
    { title: "Symbol", key: "symbol", dataIndex: 'symbol',
    },
    { title: "Type", dataIndex: "type", key: "type",
    render: () => {
        return(
           <Tag color="green">Buy</Tag>
        )
      }
    },
    { title: "Price", dataIndex: "price", key: "price",
    },
    { title: "Executed", dataIndex: "executed", key: "executed", width: '10%',
    render: () => {
        return(
            <Progress type="circle" percent={50} width={35} strokeWidth={9} className="success"/>
        )
      }
    },
    { title: "Size", dataIndex: "size", key: "size", width: '10%',
    },
    { title: "Fee", dataIndex: "fee", key: "fee", width: '10%',
    },
    {key: "status", dataIndex: "status", align: "right" as const, width: '10%',
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

export default FutureOpenOrderTransaction;
