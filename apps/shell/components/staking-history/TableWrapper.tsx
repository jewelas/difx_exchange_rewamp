/* eslint-disable react-hooks/exhaustive-deps */
import { API_ENDPOINT } from "@difx/constants";
import { Icon, Loading, Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { StakingHistoryResponse, useHttpGetByEvent } from "@difx/shared";
import { getCurrentDateByDateString, getCurrentTimeByDateString } from "@difx/utils";
import { Button, DatePicker, Table } from "antd";
import { AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

/* eslint-disable-next-line */
export interface TableWrapperProps { }

export function TableWrapper(props: TableWrapperProps) {

  const [data, setData] = useState([]);

  const _startDate = new Date();
  _startDate.setDate(_startDate.getDate() - 30);

  const [startDate, setStartDate] = useState(_startDate);
  const [endDate, setEndDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const onPickerChange = (dates: Moment[]) => {
    if (!isEmpty(dates)) {
      setStartDate(dates[0].toDate());
      setEndDate(dates[1].toDate());
    }
  }

  const dateFormat = "YYYY-MM-DD";
  const dateFormat2Digits = 'YY-MM-DD';
  const startDateFormatted = moment(startDate).format(dateFormat);
  const endDateFormatted = moment(endDate).format(dateFormat);

  const onSuccess = (response: AxiosResponse<{ result: StakingHistoryResponse[] }>) => {
    const { data } = response;
    if (!isEmpty(data.result)) {
      setData(data.result)
    } else setData([])
  }
  const { mutate: getStakingHistory, isLoading: isDataLoading } = useHttpGetByEvent<any, { result: StakingHistoryResponse[] }>({ onSuccess, endpoint: API_ENDPOINT.GET_STAKING_HISTORY(startDateFormatted, endDateFormatted, page, limit) });

  useEffect(() => {
    getStakingHistory(null);
  }, [startDate, endDate]);

  const onReset = () => {
    setStartDate(_startDate);
    setEndDate(new Date());
    setPage(1);
  }

  const columns = [
    {
      title: 'Investment Date',
      dataIndex: 'end_date',
      render: (text, record) => {
        return (
          <div className="cell">
            <Typography level="B1">{`${getCurrentDateByDateString(text)}  ${getCurrentTimeByDateString(text, true)}`}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Coins',
      dataIndex: 'coin',
      render: (text) => {
        return (
          <div className='cell coin'>
            <Icon.CoinIcon coin={text} />
            <div className="name"><Typography level="B1">{text}</Typography></div>
          </div>
        )
      }
    },
    {
      title: 'Total Amount',
      dataIndex: 'amount',
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B1">{text}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Locked Period',
      dataIndex: 'duration',
      render: (text) => {
        return (
          <div className='cell'>
            <Typography level="B1">{`${text} Day(s)`}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Status',
      dataIndex: 'type',
      render: (text, record) => {
        return (
          <div className='cell'>
            {
              record.active ? <Button className="active">Active</Button>
                : <Button disabled className="expired">Expired</Button>
            }
          </div>
        )
      }
    }
  ];

  const { RangePicker } = DatePicker;

  return (

    <>
      <div className="filter">
        <div className="date">
          <div className="date-title">{t("staking.date")}</div>
          <RangePicker
            onChange={onPickerChange}
            defaultValue={[moment(getCurrentDateByDateString(startDate), dateFormat2Digits), moment(getCurrentDateByDateString(endDate), dateFormat2Digits)]}
          />
        </div>
        <Button onClick={() => { getStakingHistory(null) }} className="first" type="primary">{t("staking.search")}</Button>
        <Button onClick={() => { onReset() }}>{t("staking.reset")}</Button>
      </div>
      <div className="table-group">
        {
          isDataLoading ? <Loading type="component" style={{ height: "200px" }} />
            :
            <Table
              className="table-group"
              // scroll={{ x: "max-content", y: height }}
              showSorterTooltip={false}
              pagination={false}
              columns={columns}
              dataSource={data}
              rowKey="id"
            />
        }
      </div>
    </>

  );
}

export default TableWrapper;
