/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'antd';
import clsx from 'clsx';
import { Chart as LineChart, dispose, init } from 'klinecharts';
import { useEffect, useRef, useState } from 'react';
import { AxiosResponse } from "axios";
import { API_ENDPOINT, QUERY_KEY, REFETCH } from '../../../shared/constants';
import { useTheme, useHttpGetByEvent, useHttpGet, useSocket, useSocketProps, SocketEvent, ChartData } from './../../../shared';
import { rect, circle } from './shapeDefinition';
import { ChartStyled, GridStyled, IndicatorStyled, MainStyled } from './styled';
import BackgroundIcon from './BackgroundIcon';


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
  const [subsIndex, setSubsIndex] = useState<any>();
  const [lineChart, setLineChart] = useState<LineChart>();
  const [chartHistory, setChartHistory] = useState<Array<ChartDataType>>([]);
  const [currentChartData, setCurrentChartData] = useState<ChartData>();

  useEffect(() => {
    const kLineChart = init('k-line-chart', GridStyled(theme));
    if (kLineChart) {
      kLineChart.addShapeTemplate([rect as any, circle as any]);
      setLineChart(kLineChart);
    }
    return () => {
      dispose('k-line-chart')
    }

  }, []);

  const param: useSocketProps = {
    pair: pair,
    leavePair: previousPairRef.current,
    event: SocketEvent.graph_data,
  };

  const data = useSocket(param);

  useEffect(()=>{
    if(data){
      const dataStructure: ChartData = {
        timestamp: data[0],
        open: data[1],
        close: data[2],
        high: data[3],
        low: data[4],
        volume: data[5],
      }
      setCurrentChartData(dataStructure)
    }
  },[data])


  const getChartHistorySuccess = (response: AxiosResponse) => {
    const { data: resData } = response
    if (resData) setChartHistory(resData);
  }

  const { mutate: getChartHistory } = useHttpGetByEvent<null, any>({ 
    onSuccess: getChartHistorySuccess,
    endpoint: API_ENDPOINT.GET_CHART_HISTORY(pair, currentResolution)
  });

  // const { data: chartCurrent } = useHttpGet<null, any>(
  //   QUERY_KEY.CHART_CURRENT, 
  //   `${API_ENDPOINT.GET_CHART_CURRENT(pair, currentResolution)}`,
  //   { refetchInterval: REFETCH._3SECS }
  // );

  useEffect(() => {
    if (lineChart) {
      getChartHistory(null);
    }
  }, [lineChart, currentResolution, pair]);

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
    if (lineChart && chartHistory && currentChartData) {
      if (currentChartData && !chartHistory.find(e => e.timestamp === currentChartData.timestamp)) {
        const prevdata = lineChart.getDataList()
        prevdata.push(currentChartData)
        lineChart.applyNewData(prevdata)
      }
    }
  }, [chartHistory, currentChartData, lineChart]);

  useEffect(() => {
    if (lineChart && currentChartType) {
      lineChart.setStyleOptions({
        candle: {
          type: currentChartType
        }
      })
    }
  }, [currentChartType, lineChart]);

  useEffect(() => {
    if (lineChart && currentChartType) {
      if(mainIndicator === ''){
        lineChart?.removeTechnicalIndicator("candle_pane")
      }else{
        lineChart?.createTechnicalIndicator(mainIndicator, false, { id: 'candle_pane' });
      }
    }
  }, [mainIndicator, lineChart]);

  useEffect(() => {
    if (lineChart) {
      if(mainIndicator === ''){
        lineChart?.removeTechnicalIndicator("candle_pane")
      }else{
        lineChart?.createTechnicalIndicator(mainIndicator, false, { id: 'candle_pane' });
      }
    }
  }, [mainIndicator, lineChart]);

  useEffect(()=>{
    if(subIndicatorSelected){
      if(subsIndex){
        if(subsIndex[`${subIndicatorSelected}`]){
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
    if (chartContainerRef.current) chartContainerRef.current.style.height = '360px';
    if (chartRef.current) chartRef.current.style.height = '360px';
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
