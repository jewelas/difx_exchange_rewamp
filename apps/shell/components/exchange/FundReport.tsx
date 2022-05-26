/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT } from "@difx/constants";
import { Loading, Typography } from "@difx/core-ui";
import { isLoggedInAtom, useHttpGetByEvent } from "@difx/shared";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import { useAtomValue } from "jotai/utils";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from 'react';

export function FundReport({height=200}:{height?:number}) {

  const [tableData, setTableData] = useState<any>([]);
  const isLoggedIn = useAtomValue(isLoggedInAtom);

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
    if (isLoggedIn) getData(null);
  }, [isLoggedIn]);

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

  if (isEmpty(tableData) && isDataLoading) return <Loading type='component' />

  return (
    <Table
      scroll={{ x: "max-content", y: height+50 }}
      showSorterTooltip={false}
      pagination={false}
      columns={columns}
      dataSource={[...tableData]}
      rowKey="currency"
    />
  );
}

export default FundReport;