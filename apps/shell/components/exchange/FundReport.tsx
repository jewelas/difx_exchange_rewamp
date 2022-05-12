/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT } from "@difx/constants";
import { Typography, Loading } from "@difx/core-ui";
import isEmpty from "lodash/isEmpty";
import { Balance, useAuth, useHttpGetByEvent } from "@difx/shared";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import { useEffect, useState } from 'react';

export function FundReport() {

  const [tableData, setTableData] = useState<any>([]);

  const getDataSuccess = (response: AxiosResponse) => {
    const { data } = response;
    if (data && tableData) {
      for (const order of data) {
        if (!tableData.find(e => e.currency === order.currency)) {
          tableData.push(order);
          setTableData(tableData);
        }
      }
    }
  }
  const { mutate: getData, isLoading: isDataLoading } = useHttpGetByEvent<any, any>({ onSuccess: getDataSuccess, endpoint: API_ENDPOINT.GET_BALANCE });

  useEffect(() => {
    getData(null);
  }, []);

  const columns = [
    {
      title: 'Coin',
      dataIndex: 'currency',
      sorter: {
        compare: (a, b) => a.currency.localeCompare(b.currency),
        multiple: 1,
      },
      render: (text, record) => {
        return (
          <div className="cell">
            <Typography level="B3">{text}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Available',
      dataIndex: 'amount',
      sorter: {
        compare: (a, b) => a.amount - b.amount,
        multiple: 2,
      },
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B3">{text}</Typography>
          </div>
        )
      }
    }
  ];

  if (isEmpty(tableData) && isDataLoading) return (
    <Loading type='skeleton' column={2} row={10} flexGrowForColumns={[2, 1]} />
  )

  return (
    <Table
      scroll={{ x: "max-content", y: 260 }}
      showSorterTooltip={false}
      pagination={false}
      columns={columns}
      dataSource={[...tableData]}
      rowKey="currency"
    />
  );
}

export default FundReport;