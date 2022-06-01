/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'antd';
import clsx from 'clsx';
import { Chart as LineChart, dispose, init } from 'klinecharts';
import { useEffect, useRef, useState } from 'react';
import { AxiosResponse } from "axios";
import { API_ENDPOINT, QUERY_KEY, REFETCH } from '../../../shared/constants';
import { useTheme, useAPI, useChartSocket, ChartSocketInterface, ChartData } from './../../../shared';
import { layoutTypeAtom } from "../../../shared/atom"
import { rect, circle } from './shapeDefinition';
import { ChartStyled, GridStyled, IndicatorStyled, MainStyled } from './styled';
import BackgroundIcon from './BackgroundIcon';
import { useAtomValue } from 'jotai';


export interface ChartDataType {
  close: number;
  low: number;
  high: number;
  open: number;
  timestamp: number;
}
export interface ChartProps {
  pair: string,
  currentResolution: string
  currentChartType: string
  mainIndicator: string
  subIndicator: string[]
  fullscreen: boolean
  setFullscreen: any
  setSubIndicatorSelected: any
  subIndicatorSelected: any
}

function Chart({ 
  pair,
  currentResolution,
  currentChartType,
  mainIndicator,
  subIndicator,
  fullscreen,
  setFullscreen,
  setSubIndicatorSelected,
  subIndicatorSelected
}: ChartProps) {

  const { theme } = useTheme();
  const mainGroupRef = useRef<HTMLDivElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const previousPairRef = useRef()
  const [subsIndex, setSubsIndex] = useState<any>([]);
  const [lineChart, setLineChart] = useState<LineChart>();
  const [chartHistory, setChartHistory] = useState<Array<ChartDataType>>([]);
  const [currentChartData, setCurrentChartData] = useState<ChartData>();
  const [dataLoadedTillTimestamp, setDataLoadedTillTimestamp] = useState<number | null>(null)
  const [loadMore, setLoadMore] = useState<boolean>(true)
  const layoutType = useAtomValue(layoutTypeAtom)

  const {API} = useAPI()

  const timeMap: any = {
    "5m": 300000,
    "15m": 900000,
    "30m": 1800000,
    "1h": 3600000,
    "30d": 86400000
  }

  const calcFormTimestamp = (type: string, to: number) => {
    // 1hr in milliseconds
    const milliseconds = 3600000
  
    switch (type) {
      case '5m': 
        return (((to * 1000) - (30 * milliseconds)) / 1000)
      case '15m': 
        return (((to * 1000) - (90 * milliseconds)) / 1000)
      case '30m': 
        return (((to * 1000) - (180 * milliseconds)) / 1000)
      case '1h': 
        return (((to * 1000) - (360 * milliseconds)) / 1000)
      case '1d': 
        return (((to * 1000) - (8640 * milliseconds)) / 1000)
      default:
        return ((to * 1000) / 1000)
    }
  }

  const getHistoryData = (from: number, to: number) => {
    // eslint-disable-next-line
    return new Promise(async(resolve, reject) => {
      try{
        const response = await API.get(API_ENDPOINT.GET_CHART_HISTORY(pair, currentResolution, from, to))
        const { data } = response.data
        resolve (data)
      }catch(err){ 
        reject(err)
      }
    })
  }

  const setInitialData = async(chart: any, from: number, to: number) => {
    const data = await getHistoryData(from, to)
    setDataLoadedTillTimestamp(from)
    chart.applyNewData(data)
  }

  const loadMoreData = async(chart: any, lastTimestamp: number) => {
    const to = lastTimestamp / 1000
    if(to){
      const from = calcFormTimestamp(currentResolution,to)
      const data: any = await getHistoryData(from, to)
      if(data && data.length > 0){
        chart.applyMoreData(data)
      }else{
        setLoadMore(false)
      }
    }
  }

  useEffect(() => {
    const kLineChart = init('k-line-chart', GridStyled(theme));
    if (kLineChart) {
      kLineChart.addShapeTemplate([rect as any, circle as any]);
      kLineChart.loadMore((lastTimestamp) => {
          if(typeof(lastTimestamp) === "number"){
            if(loadMore){
              loadMoreData(kLineChart, lastTimestamp)
            }
          }
      })
      const paneId = kLineChart?.createTechnicalIndicator("VOL", false);
      kLineChart?.createTechnicalIndicator("VOL", false, { id: paneId as string })
      subsIndex["VOL"] = paneId
      setLineChart(kLineChart);
    }
    return () => {
      dispose('k-line-chart')
    }
  }, []);

  useEffect(()=>{
    console.log(subsIndex)
  },[subsIndex])
  
  useEffect(() => {
    if(lineChart){
      const to = Math.floor(new Date().getTime() / 1000);
      const from = calcFormTimestamp(currentResolution,to)
      setInitialData(lineChart, from, to)
    }
  },[lineChart, pair, currentResolution])

  const param: ChartSocketInterface = {
    pair: pair,
    resolution: currentResolution
  };

  const data = useChartSocket(param);

  useEffect(()=>{
    if(data){
      if(lineChart){
        lineChart.updateData(data)
      }
    }
  },[data])

  useEffect(() => {
    if (lineChart) {
      lineChart.setStyleOptions(GridStyled(theme))
    }
  }, [lineChart, theme]);
  
  useEffect(() => {
    if (lineChart) {
      if (chartHistory) lineChart.applyNewData(chartHistory)
    }
  }, [lineChart, chartHistory]);


  useEffect(() => {
    if (lineChart && currentChartType) {
      lineChart.setStyleOptions({
        candle: {
          type: currentChartType
        }
      })
    }
  }, [currentChartType, lineChart]);

  // useEffect(() => {
  //   if (lineChart && currentChartType) {
  //     if(mainIndicator === ''){
  //       lineChart?.removeTechnicalIndicator("candle_pane")
  //     }else{
  //       lineChart?.createTechnicalIndicator(mainIndicator, false, { id: 'candle_pane' });
  //     }
  //   }
  // }, [mainIndicator, lineChart]);

  useEffect(() => {
    if (lineChart) {
      if(mainIndicator === ''){
        lineChart?.removeTechnicalIndicator("candle_pane")
      }else{
        lineChart?.createTechnicalIndicator(mainIndicator, false, { id: 'candle_pane' });
      }
    }
  }, [mainIndicator, lineChart]);

  useEffect(() => {
    if(lineChart){
      setTimeout(()=>{
        if (chartContainerRef.current) chartContainerRef.current.style.height = '100%';
        if (chartRef.current) chartRef.current.style.height = '100%';
        lineChart.resize()
      },500)
    }
  },[lineChart, layoutType])

  useEffect(()=>{
    if(subIndicatorSelected){
      if(subsIndex){
        if(subsIndex[`${subIndicatorSelected}`]){
          console.log("SUB")
          lineChart?.removeTechnicalIndicator(subsIndex[`${subIndicatorSelected}`], subIndicatorSelected)
          delete subsIndex[`${subIndicatorSelected}`]
          setSubsIndex(subsIndex)
        }else{
          if(Object.keys(subsIndex).length < 3){
            const paneId = lineChart?.createTechnicalIndicator(subIndicatorSelected, false);
            lineChart?.createTechnicalIndicator(subIndicatorSelected, false, { id: paneId as string })
            subsIndex[`${subIndicatorSelected}`] = paneId
            setSubsIndex(subsIndex)
          }
        }
      }else{
        const paneId = lineChart?.createTechnicalIndicator(subIndicatorSelected, false);
        lineChart?.createTechnicalIndicator(subIndicatorSelected, false, { id: paneId as string })
        const paneObject: any = {}
        paneObject[`${subIndicatorSelected}`] = paneId
        setSubsIndex(paneObject)
      }
      setSubIndicatorSelected(null)
    }
  },[subIndicatorSelected, lineChart])

  useEffect(() => {
    if(fullscreen){
      setTimeout(() => {
        if (chartContainerRef.current) chartContainerRef.current.style.height = '98%';
        lineChart?.resize();
      }, 500);
    }
    const eventListener = () => {
      if (document.fullscreenElement === null) {
        onExitFullScreen();
      }
    };
    document.addEventListener("fullscreenchange", eventListener, false);
    return () => {
      document.removeEventListener("fullscreenchange", eventListener, false);
    };
  }, [fullscreen]);

  useEffect(()=>{
    if(lineChart){
      window.onresize = (e) => {
        lineChart?.resize()
      }
    }
  },[lineChart])


  const onExitFullScreen = () => {
    if (chartContainerRef.current) chartContainerRef.current.style.height = '100%';
    if (chartRef.current) chartRef.current.style.height = '100%';
    lineChart?.resize();
  }

  return (
    <MainStyled ref={mainGroupRef}>
      <div className='background'>
        <BackgroundIcon/>
      </div>
      <div style={{ flexGrow: 1 }}>
        <div ref={chartContainerRef} className="k-line-chart-container">
          <div id="k-line-chart" ref={chartRef} className="k-line-chart" />
        </div>
      </div>

    </MainStyled>
  )
}


export { Chart };
