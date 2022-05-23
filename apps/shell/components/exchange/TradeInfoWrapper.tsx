import { API_ENDPOINT, REFETCH, QUERY_KEY } from "@difx/constants";
import { Loading, Typography } from "@difx/core-ui";
import { getCurrentTimeByDateString } from "@difx/utils";
import {
  PairType, SocketEvent, useHttpGet, useSocket, useSocketProps
} from "@difx/shared";
import { Table } from "antd";
import { useMemo, useRef } from 'react';
import { TableWraperStyled } from "./styled";

export function TradeInfoWrapper({ pair }: { pair: string }) {
  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);

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

  const { data: tradesData } = useHttpGet<null, Array<number | string>>(QUERY_KEY.TRADES, `${API_ENDPOINT.GET_TRADES(pair)}`, null);
  const marketTrades: Array<{ trend: number, price: number, size: number, at: string }> = useMemo(() => {
    if (tradesData && tradesData.length >= 4) {
      return tradesData.map(e => ({
        trend: e[0],
        price: e[1],
        size: e[2],
        at: e[3]
      }));
    } else return []
  }, [tradesData])

  const param: useSocketProps = {
    join: pair && pair as string,
    event: SocketEvent.trades,
  };
  const tradeChangedSocketData = useSocket(param)
  const tableData = useMemo(() => {
    if (tradeChangedSocketData) {
      marketTrades.splice(0, 0, {
        trend: tradeChangedSocketData[1],
        price: tradeChangedSocketData[2],
        size: tradeChangedSocketData[3],
        at: tradeChangedSocketData[4]
      });
    }
    return marketTrades.splice(0, 12);
  }, [tradeChangedSocketData, marketTrades]);

  if (!pairs || !pair) return  <Loading type='component' />

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
            dataSource={tableData}
            rowKey="at"
          />
        </div>
      </div>
    </TableWraperStyled>
  );
}

export default TradeInfoWrapper;
