/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Tag } from "antd";
import { OrderTransacrtionWrapper } from "../styled";

export function FuturePositionTransaction() {
  
  const dataSource = [
    {
      key: 1,
      id: 2345,
      timestamp: 32,
      symbol: "BTCUSDT",
      type: "Buy",
      price: "Buy",
      size: "2",
      fee: "0.1%",
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
    { title: "Size", dataIndex: "size", key: "size", width: '10%',
    },
    { title: "Fee", dataIndex: "fee", key: "fee", width: '10%',
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

export default FuturePositionTransaction;
