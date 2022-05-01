import { API_ENDPOINT, FETCHING, QUERY_KEY } from "@difx/constants";
import { Loading, Typography, Chart } from "@difx/core-ui";
import {
  PairType, SocketEvent, useHttpGet, useSocket, useSocketProps
} from "@difx/shared";
import { Table, Tabs } from "antd";
import { useMemo, useRef } from 'react';
import { getCurrentTimeByDateString } from "../../utils/dateTimeUtils";
import { ChartWraperStyled } from "./styled";

export function ChartWrapper({ pair }: { pair: string }) {
  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchInterval: FETCHING.REFETCH_INTERVAL });

  const { TabPane } = Tabs;

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

  const { data: tradesData } = useHttpGet<null, Array<number | string>>(QUERY_KEY.TRADES, `${API_ENDPOINT.GET_TRADES}${pair}`, null);
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
    pair: pair && pair as string,
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

  if (!pairs || !pair) return <Loading />;

  return (
    <ChartWraperStyled>
      <div className="head">

        <Tabs defaultActiveKey="1" onChange={() => {console.log('...')}}>
          <TabPane tab="Basic" key="1">
            <Chart />
          </TabPane>
          <TabPane tab="Pro" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Info" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </ChartWraperStyled>
  );
}

export default ChartWrapper;
