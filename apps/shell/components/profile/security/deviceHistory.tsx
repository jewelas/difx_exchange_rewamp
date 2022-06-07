/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table } from "antd";

export function DeviceHistoryTable() {
  
  const dataSource = [
    {
        key: 1,
        device: "Windows 10 (Windows)",
        activity: "Last active 21 May 2022 at 8:30",
    },
  ];

  const columns = [
    {title: "Device", key: "device", dataIndex: 'device'
    },
    { title: "Activity", dataIndex: "activity", key: "activity"
    },
    { title: "Action", key: "action",
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

export default DeviceHistoryTable;
