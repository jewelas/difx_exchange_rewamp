/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'antd';
import clsx from 'clsx';
import { Chart as LineChart, dispose, init } from 'klinecharts';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './../../../shared';
import { Icon } from './../Icon';
import { ChartStyled, GridStyled, IndicatorStyled, MainStyled } from './styled';

const TIMES = ['5m', '15m', '30m', '1h', '1d'];
const MAINS_INDEX = ['MA', 'EMA', 'BOLL', 'SAR'];
const SUBS_INDEX = ['VOL', 'MACD', 'KDJ', 'RSI', 'BIAS', 'BRAR', 'DMI', 'CR', 'PSY', 'DMA', 'TRIX', 'OBV', 'VR', 'WR', 'MTM', 'EMV']

const CANDLE_STYLES = [
  {
    type: 'candle_solid',
    icon: <Icon.CandleSolidIcon useDarkMode />,
    label: 'Solid'
  },
  {
    type: 'candle_stroke',
    icon: <Icon.CandleStrokeIcon useDarkMode />,
    label: 'Hollow'
  },
  {
    type: 'candle_up_stroke',
    icon: <Icon.CandleUpStrokeIcon useDarkMode />,
    label: 'Hollow Rise'
  },
  {
    type: 'candle_down_stroke',
    icon: <Icon.CandleDownStrokeIcon useDarkMode />,
    label: 'Hollow Fall'
  },
  {
    type: 'ohlc',
    icon: <Icon.BarIcon useDarkMode displayStroke />,
    label: 'Bar'
  },
  {
    type: 'area',
    icon: <Icon.AreaIcon useDarkMode useDarkModeFor='svg' />,
    label: 'Area'
  }
]
export interface ChartDataType {
  close: number;
  low: number;
  high: number;
  open: number;
  timestamp: number;
}
export interface ChartProps {
  history: ChartDataType[];
  current: ChartDataType;
  onChangeResolution: (type: string) => void;
  type?:'basic' | 'pro'
}

function Chart({ history, current, onChangeResolution, type='basic' }: ChartProps) {

  const { theme } = useTheme();
  const mainGroupRef = useRef<HTMLDivElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [candleStyle, setCandleStyle] = useState('candle_solid');
  const [time, setTime] = useState('5m');
  const [mainIndex, setMainIndex] = useState<string | null>(null);
  const [subsIndex, setSubsIndex] = useState<Array<{ paneId: string, indicator: string }>>([]);
  const [lineChart, setLineChart] = useState<LineChart>();

  const [isShowSubIndicators, setIsShowSubIndicators] = useState(false);
  const [isShowMainIndicators, setIsShowMainIndicators] = useState(false);

  useEffect(() => {
    const kLineChart = init('k-line-chart', GridStyled(theme));
    if (kLineChart) {
      setLineChart(kLineChart);
    }
    return () => {
      dispose('k-line-chart')
    }
  }, []);

  useEffect(() => {
    if (lineChart) {
      if (history) lineChart.applyNewData(history)
    }
  }, [lineChart, theme, history]);

  useEffect(() => {
    if (lineChart && history) {
      if (current && !history.find(e => e.timestamp === current.timestamp)) {
        history.push(current);
        lineChart.applyNewData(history)
      }
    }
  }, [history, current, lineChart]);

  useEffect(() => {
    if (lineChart && candleStyle) {
      lineChart.setStyleOptions({
        candle: {
          type: candleStyle
        }
      })
    }
  }, [candleStyle, lineChart]);

  useEffect(() => {
    const eventListener = () => {
      if (document.fullscreenElement === null) {
        onExitFullScreen();
      }
    };
    document.addEventListener("fullscreenchange", eventListener, false);
    return () => {
      document.removeEventListener("fullscreenchange", eventListener, false);
    };
  }, [document.fullscreenElement]);

  const onExitFullScreen = () => {
    setTimeout(() => {
      if (chartContainerRef.current) chartContainerRef.current.style.height = '330px';
      if (chartRef.current) chartRef.current.style.height = '330px';
      lineChart?.resize();
    }, 500);
  }

  const onChangeTime = (t: string) => {
    setTime(t);
    onChangeResolution(t);
  }

  const onChangeMainIndex = (t: string | null) => {
    if (!t) {
      lineChart?.removeTechnicalIndicator('candle_pane', t as string);
    } else {
      lineChart?.createTechnicalIndicator(t as string, false, { id: 'candle_pane' });
    }
    setMainIndex(t)
  }

  const onChangeSubsIndex = (t: string | null) => {

    // Remove
    const sub = subsIndex.find(e => e.indicator === t);
    if (sub) {
      lineChart?.removeTechnicalIndicator(sub.paneId, sub.indicator);

      const newSubs = subsIndex.filter(e => e.indicator !== t);
      setSubsIndex(newSubs);

      // Add
    } else {

      const paneId = lineChart?.createTechnicalIndicator(t as string, false);
      lineChart?.createTechnicalIndicator(t as string, false, { id: paneId as string })

      const newSubs = [...subsIndex];
      newSubs.push({ paneId: paneId as string, indicator: t as string });
      setSubsIndex(newSubs);
    }
  }

  const handleFullScreen = async () => {
    if (!document.fullscreenElement) {
      mainGroupRef.current?.requestFullscreen();

      setTimeout(() => {
        if (chartContainerRef.current) chartContainerRef.current.style.height = '100%';
        lineChart?.resize();
      }, 500);

    } else {
      document.exitFullscreen();
      onExitFullScreen();
    }
  }

  const chartStyles = (
    <ChartStyled>
      {
        CANDLE_STYLES.map(e =>
          <div key={e.type} onClick={() => { setCandleStyle(e.type) }} className={clsx('item', candleStyle === e.type && 'active')}>
            {e.icon}
            <div>{e.label}</div>
          </div>
        )
      }
    </ChartStyled>
  )


  const indicators = (
    <IndicatorStyled>
      <div className="head">Main index</div>
      <div className="group-items">
        {
          MAINS_INDEX.map(e => <Button key={e} onClick={() => { onChangeMainIndex(mainIndex === e ? null : e) }} className={clsx("item", mainIndex === e && 'active')}>{e}</Button>)
        }
      </div>
      <div style={{ marginTop: 20 }} className="head">Sub index</div>
      <div className="group-items">
        {
          SUBS_INDEX.map(e => <Button key={e} onClick={() => { onChangeSubsIndex(e) }} className={clsx("item", subsIndex.find(_e => _e.indicator === e) && 'active')}>{e}</Button>)
        }
      </div>
    </IndicatorStyled>
  )

  return (
    <MainStyled ref={mainGroupRef}>
      {
        type==='basic'
        &&
        <div className='shape-group'>
        <Icon.ChartIndHLine1Icon useDarkMode />
        <Icon.ChartIndHLine2Icon useDarkMode />
        <Icon.ChartIndHLine3Icon useDarkMode />
        <Icon.ChartIndVLine1Icon useDarkMode />
        <Icon.ChartIndVLine2Icon useDarkMode />
        <Icon.ChartIndVLine3Icon useDarkMode />
        <Icon.ChartIndSlash1Icon useDarkMode />
        <Icon.ChartIndSlash2Icon useDarkMode />
        <Icon.ChartIndSlash3Icon useDarkMode />
        <Icon.ChartIndPriceLineIcon useDarkMode />
        <Icon.ChartInd2SlashIcon useDarkMode />
        <Icon.ChartInd3SlashIcon useDarkMode />
        <Icon.ChartIndFibIcon useDarkMode />
        <Icon.TrashIcon className='trash-icon' useDarkMode />
      </div>
      }
    
      <div style={{flexGrow:1}}>
        <div ref={chartContainerRef} className="k-line-chart-container">
          <div className='menubar'>
            <div className="left">
              {
                TIMES.map(e => <div key={e} className={clsx('text', time === e && 'active')} onClick={() => { onChangeTime(e) }} >{e}</div>)
              }
              <div onMouseLeave={() => { setIsShowMainIndicators(false) }} onMouseEnter={() => { setIsShowMainIndicators(true) }} className='icon-dropdown'>
                <div className='icon'>
                  <Icon.CandleSolidIcon useDarkMode />
                </div>
                {
                  isShowMainIndicators && <div className='items'>{chartStyles}</div>
                }
              </div>

              <div onMouseLeave={() => { setIsShowSubIndicators(false) }} onMouseEnter={() => { setIsShowSubIndicators(true) }} className='icon-dropdown'>
                <div className='icon'>
                  <Icon.IndicatorIcon useDarkMode useDarkModeFor='svg' />
                </div>
                {
                  isShowSubIndicators && <div className='items'>{indicators}</div>
                }
              </div>
            </div>
            <div className="right">
              <div onClick={() => { handleFullScreen() }} className='icon'>
                <Icon.FullScreenIcon useDarkMode />
              </div>
            </div>
          </div>
          <div id="k-line-chart" ref={chartRef} className="k-line-chart" />
        </div>
      </div>

    </MainStyled>
  )
}

export { Chart };
