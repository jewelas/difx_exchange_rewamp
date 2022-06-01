import { ChartContainerStyled } from "./styled"
import ChartHead from "./ChartHead"
import { Chart, ChartDataType } from "@difx/core-ui"
import { Tabs } from "antd"
import { useHttpGetByEvent, useHttpGet } from "@difx/shared"
import { API_ENDPOINT, QUERY_KEY, REFETCH } from "@difx/constants";
import { AxiosResponse } from "axios";
import { useState, useEffect, useRef } from "react"
import CoinInfo from "./CoinInfo"

const { TabPane } = Tabs

export interface ChartContainerInterface {
  pair: string
}

export default function ChartContainer({pair}: ChartContainerInterface) {
  const [panel, setPanel] = useState('original')
  const [currentResolution, setCurrentResolution] = useState('5m')
  const [currentChartType, setCurrentChartType] = useState('candle_solid')
  const [mainIndicator, setMainIndicator] = useState('MA')
  const [subIndicatorSelected, setSubIndicatorSelected] = useState(null)
  const [subIndicator, setSubIndicator] = useState(["VOL"])
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
          <div className="container" ref={KlineRef}>
            <ChartHead 
              currentResolution={currentResolution}
              setCurrentResolution={setCurrentResolution}
              currentChartType={currentChartType}
              setCurrentChartType={setCurrentChartType}
              mainIndicator={mainIndicator}
              setMainIndicator={setMainIndicator}
              subIndicator={subIndicator}
              setSubIndicator={setSubIndicator}
              setSubIndicatorSelected={setSubIndicatorSelected}
              fullscreen={fullscreen}
              setFullscreen={setFullscreen}
              panel={panel}
              setPanel={setPanel}
            />
            {
              panel === "original" ?
                <Chart
                  pair={pair}
                  currentResolution={currentResolution}
                  currentChartType={currentChartType}
                  mainIndicator={mainIndicator}
                  subIndicator={subIndicator}
                  fullscreen={fullscreen}
                  setSubIndicatorSelected={setSubIndicatorSelected}
                  subIndicatorSelected={subIndicatorSelected}
                  setFullscreen={setFullscreen}
                />
              :
                <CoinInfo coin={pair}/>

            }
          </div>
    </ChartContainerStyled>
  )
}
