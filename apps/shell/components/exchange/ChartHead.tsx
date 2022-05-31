import { ChartHeadStyled } from "./styled"
import { Icon } from "@difx/core-ui";
import { useEffect } from "react";
import clsx from "clsx";
import { Button } from "antd";

const TIME_FRAMES = ['5m', '15m', '30m', '1h', '1d'];
const MAINS_INDEX = ['MA', 'EMA', 'BOLL', 'SAR'];
const SUBS_INDEX = ['VOL', 'MACD', 'KDJ', 'RSI', 'BIAS', 'BRAR', 'DMI', 'CR', 'PSY', 'DMA', 'TRIX', 'OBV', 'VR', 'WR', 'MTM', 'EMV']
// const CANDLE_TYPES = [
//   { key: 'candle_solid', text: 'Solid' , chart: ["original", "tradingview"]},
//   { key: 'candle_stroke', text: 'Hollow' , chart: ["original", "tradingview"]},
//   { key: 'candle_up_stroke', text: 'Hollow Rise', chart: ["original"] },
//   { key: 'candle_down_stroke', text: 'Hollow Fall' , chart: ["original"]},
//   { key: 'ohlc', text: 'Bar', chart: ["original", "tradingview"] },
//   { key: 'area', text: 'Area', chart: ["original", "tradingview"] },
//   { key: 'heiken-ashi', text: 'Heiken-Ashi', chart: ["tradingview"] },
//   { key: 'line', text: 'Line', chart: ["tradingview"] },
//   { key: 'baseline', text: 'Baseline', chart: ["tradingview"] },
// ]

const CANDLE_TYPES = [
  {
    type: 'candle_solid',
    icon: <Icon.CandleSolidIcon useDarkMode />,
    label: 'Solid',
    chart: ["original", "tradingview"]
  },
  {
    type: 'candle_stroke',
    icon: <Icon.CandleStrokeIcon useDarkMode />,
    label: 'Hollow',
    hart: ["original", "tradingview"]
  },
  {
    type: 'candle_up_stroke',
    icon: <Icon.CandleUpStrokeIcon useDarkMode />,
    label: 'Hollow Rise',
    chart: ["original"]
  },
  {
    type: 'candle_down_stroke',
    icon: <Icon.CandleDownStrokeIcon useDarkMode />,
    label: 'Hollow Fall',
    chart: ["original"]
  },
  {
    type: 'ohlc',
    icon: <Icon.BarIcon useDarkMode displayStroke />,
    label: 'Bar',
    chart: ["original", "tradingview"]
  },
  {
    type: 'area',
    icon: <Icon.AreaIcon useDarkMode useDarkModeFor='svg' />,
    label: 'Area',
    chart: ["original", "tradingview"]
  }
]


export default function ChartHead({
  currentResolution,
  setCurrentResolution,
  currentChartType,
  setCurrentChartType,
  mainIndicator,
  setMainIndicator,
  subIndicator,
  setSubIndicator,
  setSubIndicatorSelected,
  fullscreen,
  setFullscreen,
  panel,
  setPanel
}) {


  const handleSubIndicators = (indicator) => {
      setSubIndicatorSelected(indicator)
      if (subIndicator.includes(indicator)) {
        const newVal = subIndicator.filter(item => item != indicator)
        setSubIndicator(newVal);
      } else if(subIndicator.length<3) {
        setSubIndicator(prev => [...prev, indicator])
      }
  }

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
    setFullscreen(!fullscreen)
  }

  return (
    <ChartHeadStyled>
      {
        panel === "original" ?
          <>
          <div className="timeframes">
            {
              TIME_FRAMES.map((time_resolution) =>
                <span
                  onClick={() => setCurrentResolution(time_resolution)}
                  className={currentResolution === time_resolution ? 'active' : null}
                  key={time_resolution}
                >
                  {time_resolution}
                </span>
              )
            }
          </div>
          <div className="instruments-box">
            <div className="candle-types">
              <button className="chart-type-icon">
                <Icon.CandleSolidIcon useDarkMode useDarkModeFor='svg' />
              </button>
              <div className="types-dropdown">
                {
                  CANDLE_TYPES.map((candle, index) =>
                      <button
                        onClick={() => setCurrentChartType(candle.type)}
                        className={currentChartType === candle.type ? 'active' : null}
                        key={`${candle.type}_${index}`}
                      >
                        {candle.icon}
                        <span>{candle.label}</span>
                      </button>
                  )
                }
              </div>

            </div>
            <div className="indicators">
              <button className="indicator-icon">
                <Icon.IndicatorIcon useDarkMode useDarkModeFor='svg' />
              </button>
              <div className="indicator-dropdown">
                <div className="indicator-index">
                  <span>Main Index</span>
                  <div className="indicator-button-group">
                    {
                      MAINS_INDEX.map((indicator, index) =>
                        <button
                          onClick={() => setMainIndicator(prev => prev === indicator ? '' : indicator)}
                          className={`indicator-button ${mainIndicator === indicator ? 'active' : null}`}
                          key={`main_${indicator}_${index}`}
                        >
                          {indicator}
                        </button>
                      )
                    }
                  </div>
                </div>
                <div className="indicator-index">
                  <span>Sub Index</span>
                  <div className="indicator-button-group">
                    {
                      SUBS_INDEX.map((indicator) =>
                        <button
                          onClick={() => handleSubIndicators(indicator)}
                          className={clsx("indicator-button", subIndicator && subIndicator.includes(indicator) && 'active')}
                          key={`sub_${indicator}`}
                        >
                          {indicator}
                        </button>
                      )
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>
          </>
        :
          null
      }

      <div className="right-box">
        <div className="pane-selector">
          <div className="panel-type">
            <button 
              className={clsx(panel === "original" ? "active" : null)}
              onClick={()=>setPanel("original")}
            >
              Original
            </button>
          </div>
          <div className="panel-type">
            <button 
              className={clsx(panel === "info" ? "active" : null)}
              onClick={()=>setPanel("info")}
            >
              Info
            </button>
          </div>
        </div>
        <div className="fullscreen" onClick={handleFullscreen}>
          {
            panel === "original" ?
              <Icon.FullScreenIcon useDarkMode />
            :
              null
          }
        </div>
      </div>
    </ChartHeadStyled>
  )
}
