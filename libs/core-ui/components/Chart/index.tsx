import clsx from 'clsx';
import React, { useEffect, useRef, useMemo, useState } from 'react';
import { Popover, Button } from 'antd';
import { Icon } from './../Icon';
import { dispose, init } from 'klinecharts';
import { useTheme } from './../../../shared';
import { GridStyled, MainStyled, ChartStyled, IndicatorStyled } from './styled';

const TIMES = ['5m', '15m', '30m', '1h', '1d'];
const MAINS_INDEX = ['MA', 'EMA', 'BOLL', 'SAR'];
const SUBS_INDEX = ['VOL', 'MACD', 'KDJ', 'RSI', 'BIAS', 'BRAR', 'DMI', 'CR', 'PSY', 'DMA', 'TRIX', 'OBV', 'VR', 'WR', 'MTM', 'EMV']
function Chart() {

  const { theme } = useTheme();
  const chartRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState('5m');
  const [mainIndex, setMainIndex] = useState<string | null>(null);
  const [subsIndex, setSubsIndex] = useState<Array<string | null>>([]);

  useEffect(() => {
    const kLineChart = init('k-line-chart', GridStyled(theme))
    if (kLineChart)
      kLineChart.applyNewData([
        {
          close: 4976.16,
          high: 4977.99,
          low: 4970.12,
          open: 4972.89,
          timestamp: 1587660000000,
          volume: 204,
        },
        {
          close: 4977.33,
          high: 4979.94,
          low: 4971.34,
          open: 4973.2,
          timestamp: 1587660060000,
          volume: 194,
        },
        {
          close: 4977.93,
          high: 4977.93,
          low: 4974.2,
          open: 4976.53,
          timestamp: 1587660120000,
          volume: 197,
        },
        {
          close: 4966.77,
          high: 4968.53,
          low: 4962.2,
          open: 4963.88,
          timestamp: 1587660180000,
          volume: 28,
        },
        {
          close: 4961.56,
          high: 4972.61,
          low: 4961.28,
          open: 4961.28,
          timestamp: 1587660240000,
          volume: 184,
        },
        {
          close: 4964.19,
          high: 4964.74,
          low: 4961.42,
          open: 4961.64,
          timestamp: 1587660300000,
          volume: 191,
        },
        {
          close: 4968.93,
          high: 4972.7,
          low: 4964.55,
          open: 4966.96,
          timestamp: 1587660360000,
          volume: 105,
        },
        {
          close: 4979.31,
          high: 4979.61,
          low: 4973.99,
          open: 4977.06,
          timestamp: 1587660420000,
          volume: 35,
        },
        {
          close: 4977.02,
          high: 4981.66,
          low: 4975.14,
          open: 4981.66,
          timestamp: 1587660480000,
          volume: 135,
        },
        {
          close: 4985.09,
          high: 4988.62,
          low: 4980.3,
          open: 4986.72,
          timestamp: 1587660540000,
          volume: 76,
        },
      ])
    return () => {
      dispose('k-line-chart')
    }
  }, [theme]);

  const { width } = useMemo(() => {
    return {
      width: chartRef.current?.clientWidth
    }
  }, [chartRef]);

  const onChangeTime = (t: string) => {
    setTime(t);
  }

  const onChangeMainIndex = (t: string | null) => {
    setMainIndex(t)
  }

  const onChangeSubsIndex = (t: string | null) => {
    if (subsIndex.includes(t)) {
      const newSubs = subsIndex.filter(e => e !== t);
      setSubsIndex(newSubs)
    } else {
      const newSubs = [...subsIndex];
      newSubs.push(t);
      setSubsIndex(newSubs);
    }
  }

  const chartStyles = (
    <ChartStyled>
      <div className='item'>
        <Icon.CandleSolidIcon useDarkMode />
        <div>Solid</div>
      </div>
      <div className='item'>
        <Icon.CandleStrokeIcon useDarkMode />
        <div>Hollow</div>
      </div>
      <div className='item'>
        <Icon.CandleUpStrokeIcon useDarkMode />
        <div>Hollow Rise</div>
      </div>
      <div className='item'>
        <Icon.CandleDownStrokeIcon useDarkMode />
        <div>Hollow Fall</div>
      </div>
      <div className='item'>
        <Icon.BarIcon useDarkMode displayStroke />
        <div>Bar</div>
      </div>
      <div className='item'>
        <Icon.AreaIcon useDarkMode useDarkModeFor='svg' />
        <div>Area</div>
      </div>
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
          SUBS_INDEX.map(e=><Button key={e} onClick={() => { onChangeSubsIndex(e) }} className={clsx("item", subsIndex.includes(e) && 'active')}>{e}</Button>)
        }
      </div>
    </IndicatorStyled>
  )

  return (
    <MainStyled ref={chartRef} width={width || 0}
      className="k-line-chart-container">
      <div className='menubar'>
        {
          TIMES.map(e => <div className={clsx('text', time === e && 'active')} onClick={() => { onChangeTime(e) }} >{e}</div>)
        }
        <Popover content={chartStyles} placement="bottom">
          <div className='icon'>
            <Icon.CandleSolidIcon useDarkMode />
          </div>
        </Popover>

        <Popover content={indicators} placement="bottom">
          <div className='icon'>
            <Icon.IndicatorIcon useDarkMode useDarkModeFor='svg' />
          </div>
        </Popover>

      </div>
      <div id="k-line-chart" className="k-line-chart" />
    </MainStyled>
  )
}

export { Chart };
