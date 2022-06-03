/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loading } from "@difx/core-ui";
import { useAPI } from "@difx/shared";
import { Button, Pagination, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { RecentTransactionsWrapper } from "./styled";
import { API_ENDPOINT } from "@difx/constants"
import moment from "moment";

interface DataType {
    key: string;
    coin: string;
    amount: number;
    type: string;
    date: string;
    status: string;
  }

export function EarnTransactions() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [totalItems, setTotalItems] = useState(null)
  const [totalPages, setTotalPages] = useState(null)

  const _startDate = new Date();
  _startDate.setDate(_startDate.getDate() - 30);

  const [startDate, setStartDate] = useState(_startDate);
  const [endDate, setEndDate] = useState(new Date());

  const dateFormat = "YYYY-MM-DD";
  const dateFormat2Digits = 'YY-MM-DD';
  const startDateFormatted = moment(startDate).format(dateFormat);
  const endDateFormatted = moment(endDate).format(dateFormat);

  const {API} = useAPI()

  const columns = [
    {
      title: "Coin", key: "coin", dataIndex: 'coin',
    },
    {
      title: "Amount", key: "amount", dataIndex: 'amount',
    },
    {
      title: "Type",
      key: "type",
      dataIndex: 'type',
    },
    { title: "Date", dataIndex: "date", key: "date"},
    {
      title: "Chart",
      key: "date",
      dataIndex: "date"
    },
    {
      title: "Status", key: "status", align: "right" as const,
      render: () => (
        <Space size="middle">
            <Button
              type="text"
              className="ant-btn-success"
            >
              Completed
            </Button>
        </Space>
      )
    },
  ];

  // const data: DataType[] = [
  //   {
  //     key: '1',
  //     coin: 'John Brown',
  //     amount: 32,
  //     type: 'New York No. 1 Lake Park',
  //     date: "2022-02-22",
  //     status: "Completed"
  //   },
  //   {
  //     key: '2',
  //     coin: 'John Brown',
  //     amount: 32,
  //     type: 'New York No. 1 Lake Park',
  //     date: "2022-02-22",
  //     status: "Completed"
  //   },
  //   {
  //     key: '3',
  //     coin: 'John Brown',
  //     amount: 32,
  //     type: 'New York No. 1 Lake Park',
  //     date: "2022-02-22",
  //     status: "Completed"
  //   },
  // ];

  const updateRecords = async(startDate, endDate, page,limit) => {
    setIsLoading(true)
    try{
      const response = await API.get(API_ENDPOINT.GET_STAKING_HISTORY(startDate, endDate, page, limit))
      // eslint-disable-next-line
      const { data, statusCode } = response?.data
      if(statusCode === 200){
        setData(data.result)
        setTotalItems(data.totalItems)
        setTotalPages(data.totalPages)
        setCurrentPage(data.currentPage)
      }
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  const getParticularPage = (startDate, endDate, pageNumber) => {
    updateRecords(startDate, endDate, pageNumber, limit)
  }

  const onPageChange = (page) => {
    getParticularPage(startDateFormatted, endDateFormatted, page)
  }

  useEffect(()=>{
    updateRecords(startDateFormatted, endDateFormatted, currentPage, limit)
  },[])

  if(isLoading){
    return <Loading />
  }

  return (
    <RecentTransactionsWrapper>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ['bottomCenter'] }}
        className="common-table"
      />
      <Pagination 
        current={currentPage} 
        pageSize={limit} 
        total={totalItems} 
        // showSizeChanger 
        onChange={onPageChange}
      />
    </RecentTransactionsWrapper>
  );
}

export default EarnTransactions;
