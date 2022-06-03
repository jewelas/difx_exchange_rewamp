/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Typography } from "@difx/core-ui";
import { getCurrentDateTimeByDateString, getPriceFormatted } from "@difx/utils";
import { Table } from "antd";

export function OrderHistoryReportExpanded({tableData=[]}:{tableData?:any[]}) {

  const columns = [
    {
      title: "Date", dataIndex: "timestamp", key: "date",
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{getCurrentDateTimeByDateString(text)}</Typography>
          </div>
        )
      }
    },
    {
      title: "Trading Price", key: "p", dataIndex: 'p',
    },
    {
      title: "Executed", key: "q", dataIndex: 'q',
    },
    {
      title: "Transaction Fee", key: "fee", dataIndex: 'fee',
    },
    {
      title: "Total", key: "total",
      render: (text, record) => {
        return (
          <div className='cell'>
            <Typography level="B3">{ getPriceFormatted((record.q * record.p)+record.fee, (record.p && record.p.toString().includes(".")) ? record.p.toString().split(".")[1].length : 2)}</Typography>
          </div>
        )
      }
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        rowKey={"id"}
      />
    </div>
  )
}

export default OrderHistoryReportExpanded;