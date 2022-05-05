import { API_ENDPOINT, QUERY_KEY, REFETCH } from "@difx/constants";
import { Chart, ChartDataType } from "@difx/core-ui";
import { useHttpGet, useHttpGetByEvent } from "@difx/shared";
import { Tabs } from "antd";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from 'react';
import { ChartWraperStyled } from "./styled";

export function ChartWrapper({ pair }: { pair: string }) {

  const { TabPane } = Tabs;

  const [resolution, setResolution] = useState('5m');
  const [chartHistory, setChartHistory] = useState<Array<ChartDataType>>([]);
  const [tab, setTab] = useState('basic')

  const getChartHistorySuccess = (response: AxiosResponse<Array<ChartDataType>>) => {
    if (response.data) setChartHistory(response.data);
  }

  const { mutate: getChartHistory } = useHttpGetByEvent<null, Array<ChartDataType>>({ onSuccess: getChartHistorySuccess, endpoint: API_ENDPOINT.GET_CHART_HISTORY(pair, resolution) });
  const { data: chartCurrent } = useHttpGet<null, Array<ChartDataType>>(QUERY_KEY.CHART_CURRENT, `${API_ENDPOINT.GET_CHART_CURRENT(pair, resolution)}`, { refetchInterval: REFETCH._3SECS });

  useEffect(() => {
    getChartHistory(null);
  }, [resolution, pair]);

  return (
    <ChartWraperStyled>
      <div className="head">

        <Tabs defaultActiveKey="1" onChange={(e) => { setTab(e) }}>
          <TabPane tab="Basic" key="basic" />
          <TabPane tab="Pro" key="pro" />
          <TabPane tab="Info" key="info" />
        </Tabs>
        {
          ['basic', 'pro'].includes(tab)
          &&
          <Chart
            type={tab as 'basic' | 'pro'}
            onChangeResolution={(t) => setResolution(t)}
            history={chartHistory}
            current={chartCurrent ? chartCurrent[0] : null} />
        }
        {
          tab === 'info'
          &&
          <div>
            Todo... Waiting for backend complete
          </div>
        }
      </div>
    </ChartWraperStyled>
  );
}

export default ChartWrapper;
