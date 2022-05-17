import { ChartContainerStyled } from "./styled"
import ChartHead from "./ChartHead"
import { Chart, ChartDataType } from "@difx/core-ui"
import { Tabs } from "antd"
import { useHttpGetByEvent, useHttpGet } from "@difx/shared"
import { API_ENDPOINT, QUERY_KEY, REFETCH } from "@difx/constants";
import { AxiosResponse } from "axios";
import { useState, useEffect, useRef } from "react"

const { TabPane } = Tabs

export interface ChartContainerInterface {
  pair: string
}

export default function ChartContainer({pair}: ChartContainerInterface) {
  const [tab, setTab] = useState('basic')
  const [currentResolution, setCurrentResolution] = useState('5m')
  const [currentChartType, setCurrentChartType] = useState('candle_solid')
  const [mainIndicator, setMainIndicator] = useState('MA')
  const [subIndicator, setSubIndicator] = useState([])
  // const [subI, setSubI] = useState([])
  const [fullscreen, setFullscreen] = useState(false)

  const KlineRef = useRef<HTMLDivElement>(null);
  const TradingViewRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(fullscreen){
      KlineRef.current?.requestFullscreen();

      setTimeout(() => {
        if (KlineRef.current) KlineRef.current.style.height = '100%';
      }, 500);
    }
  },[fullscreen])

  return (
    <ChartContainerStyled>
       <Tabs defaultActiveKey="chart">
        <TabPane tab="Chart" key="chart">
          <div ref={KlineRef}>
            <ChartHead 
              currentResolution={currentResolution}
              setCurrentResolution={setCurrentResolution}
              currentChartType={currentChartType}
              setCurrentChartType={setCurrentChartType}
              mainIndicator={mainIndicator}
              setMainIndicator={setMainIndicator}
              subIndicator={subIndicator}
              setSubIndicator={setSubIndicator}
              fullscreen={fullscreen}
              setFullscreen={setFullscreen}
            />
            <Chart
              pair={pair}
              currentResolution={currentResolution}
              currentChartType={currentChartType}
              mainIndicator={mainIndicator}
              subIndicator={subIndicator}
              fullscreen={fullscreen}
              setFullscreen={setFullscreen}
            />
          </div>
        </TabPane>
        <TabPane tab="Pro" key="pro">
          Trading View
        </TabPane>
        <TabPane tab="Info" key="info">
          Coin Info
        </TabPane>
      </Tabs>
    </ChartContainerStyled>
  )
}
