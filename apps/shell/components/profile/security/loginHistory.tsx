/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";

export function LoginHistoryTable() {
  
  const dataSource = [
    {
        key: 1,
        region: "United Arab Emirates",
        device: "Safari",
        time: "2022-03-22 /11:29",
    },
  ];

  const columns = [
    {title: "Login Region", key: "region", dataIndex: 'region'
    },
    { title: "Login Device", dataIndex: "device", key: "device"
    },
    { title: "Time", key: "time", dataIndex: 'time'
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

export default LoginHistoryTable;
