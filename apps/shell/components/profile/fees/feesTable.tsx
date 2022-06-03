/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";

export function FeesTable() {
  
  const dataSource = [
    {
        key: 1,
        level: "VIP 0",
        holdings: "0.0100%",
        makerFees: "0.0600%",
        takerFees: "0.0600%",
    },
    {
        key: 2,
        level: "VIP 1",
        holdings: "0.0100%",
        makerFees: "0.0600%",
        takerFees: "0.0600%",
    },
    {
        key: 3,
        level: "VIP 2",
        holdings: "0.0100%",
        makerFees: "0.0600%",
        takerFees: "0.0600%",
    },
    {
        key: 4,
        level: "VIP 3",
        holdings: "0.0100%",
        makerFees: "0.0600%",
        takerFees: "0.0600%",
    },
    {
        key: 5,
        level: "VIP 4",
        holdings: "0.0100%",
        makerFees: "0.0600%",
        takerFees: "0.0600%",
    },
    {
        key: 6,
        level: "VIP 5",
        holdings: "0.0100%",
        makerFees: "0.0600%",
        takerFees: "0.0600%",
    }
  ];

  const columns = [
    {title: "Level", key: "level", dataIndex: 'level', width: '25%'
    },
    { title: "Holdings", dataIndex: "holdings", key: "holdings", width: '25%'
    },
    { title: "Spot Maker Fees", key: "makerFees", dataIndex: 'makerFees', width: '25%'
    },
    { title: "Spot Taker Fees", dataIndex: "takerFees", key: "takerFees", width: '25%', align: "right" as const
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

export default FeesTable;
