/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table } from "antd";

export function APIKeysTable() {
  
  const dataSource = [
    {
        key: 1,
        label: "Test",
        token: "53d19e58-4e7d-4dc6-a14d-1a85742eb6ab",
        ip: "192.168.1.1",
        transaction: "12012012",
        date: "2022-03-22 /11:29",
        action: "0.0600%",
    }
  ];

  const columns = [
    {title: "Label", key: "label", dataIndex: 'label'
    },
    { title: "Token", dataIndex: "token", key: "token"
    },
    { title: "IP", dataIndex: "ip", key: "ip"
    },
    { title: "Transaction Limit", dataIndex: "transaction", key: "transaction"
    },
    { title: "Date", key: "date", dataIndex: 'date'
    },
    { title: "Action", key: "action", align: "right" as const,
    render: () => {
        return(
            <Button type="text" danger> Remove </Button>
        )
      }
    }
  ];

  return (
      <Table
        columns={columns}
        /* eslint-disable */
        // @ts-ignore
        dataSource={dataSource}
        pagination={false}
        className="common-table"
      />
  );
}

export default APIKeysTable;
