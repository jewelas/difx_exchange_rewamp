/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "@difx/constants";
import { Loading, Typography } from "@difx/core-ui";
import { SocketEvent, useHttpGetByEvent, useSocket, useSocketByEvent, useSocketProps } from "@difx/shared";
import { getCurrentTimeByDateString } from "@difx/utils";
import { Table } from "antd";
import { AxiosResponse } from "axios";
import { useEffect, useMemo, useRef, useState } from 'react';
import { TableWraperStyled } from "./styled";

export function TradeInfoWrapper({ pair }: { pair: string }) {

  const componentRef = useRef(null);

  const columns = [
    {
      title: 'Price',
      dataIndex: 'price',
      render: (text, record) => {
        return (
          <div className="price">
            <Typography level="B3" color={record.trend === 0 ? 'success' : 'danger'}>{text}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Size',
      dataIndex: 'size',
      render: (text) => {
        return (
          <div className='size'>
            <Typography level="B3">{text}</Typography>
          </div>
        )
      }
    },
    {
      title: 'Time',
      dataIndex: 'at',
      render: (text) => {
        return (
          <div className='at'>
            <Typography level="B3">{getCurrentTimeByDateString(text)}</Typography>
          </div>
        )
      }
    },
  ];

  const getTradesSuccess = (response: AxiosResponse<Array<number | string>>) => {
    const { data } = response;
    if (data && data.length >= 4) {
      const _data = data.map(e => ({
        trend: e[0],
        price: e[1],
        size: e[2],
        at: e[3]
      }));
      setTradesData(_data);
    } else setTradesData([])
  }

  const [tradesData, setTradesData] = useState<Array<{ trend: number, price: number, size: number, at: string }>>([]);
  const { mutate: getTradesData } = useHttpGetByEvent<null, Array<number | string>>({ onSuccess: getTradesSuccess, endpoint: `${API_ENDPOINT.GET_TRADES(pair)}` });

  const getWSTradesSuccess = (tradeChangedSocketData: any) => {
    if (tradeChangedSocketData) {
      tradesData.splice(0, 0, {
        trend: tradeChangedSocketData[1],
        price: tradeChangedSocketData[2],
        size: tradeChangedSocketData[3],
        at: tradeChangedSocketData[4]
      });
      setTradesData(tradesData);
    }
  }

  const param: useSocketProps = {
    join: pair,
    leave: TradeInfoWrapper.previousPair,
    event: SocketEvent.trades,
    onSuccess: getWSTradesSuccess
  };
  const { send } = useSocketByEvent(param);

  useEffect(() => {
    setTradesData([]);
    getTradesData({ endpoint: `${API_ENDPOINT.GET_TRADES(pair)}` });
    send({ join: pair, leave: TradeInfoWrapper.previousPair });
    TradeInfoWrapper.previousPair = pair;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pair]);

  if (!pair) return <Loading type='component' />

  return (
    <TableWraperStyled style={{ marginTop: -29 }} ref={componentRef}>
      <div className="table-group">
        <div className="head">
          <Typography level='B2'>Market Trades</Typography>
        </div>
        <div className="content">
          <Table
            showSorterTooltip={false}
            pagination={false}
            columns={columns}
            dataSource={tradesData}
            rowKey={record=>`orderInfo_${record.size}_${record.at}`}
          />
        </div>
      </div>
    </TableWraperStyled>
  );
}

TradeInfoWrapper.previousPair = null;
export default TradeInfoWrapper;
