import styled from "styled-components";
import { dark, light, ThemeInterface } from "./../../themes";

export const MainStyled = styled.div`
  padding-top:10px;
  height: calc(100% - 28px);
  /* min-height:470px; */
  background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary};
  display:flex;
  width:100%;
  .background{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top:50%;
    text-align: center;
  }
  .shape-group{
    position: absolute;
    background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary};
    width: 40px;
    margin-top: 50px;
    overflow: hidden;
    height: calc(100% - 20px);
    z-index: 9;
    display:flex;
    flex-direction: column;
    justify-content: center;
    svg{
      margin-top:-5px;
      transform: scale(0.75);
      cursor: pointer;
      opacity: 0.5;
      &:hover{
        opacity: 0.8;
      }
      &.trash-icon{
        margin: 3px 0 0 3px;
      }
    }
  }
  .k-line-chart-container {
    box-shadow: unset !important;
    display: flex;
    flex-direction: column;
    /* margin:-14px 0 10px 0px; */
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
    height: 100%;
    /* height: calc(100% - 28px) !important; */
    background-color: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary};
    .chart-styles-group{
      .item{
        display:flex;
        svg{
          margin-top:-2px;
          cursor: pointer;
          fill:red;
          opacity: 0.5;
          &:hover{
            opacity: 0.8;
          }
        }
      }
    }
    .menubar{
      display:flex;
      margin-bottom: 7px;
      justify-content: space-between;
      .left{
        display:flex;
        .text{
          font-size: 12px;
          cursor: pointer;
          margin-right:10px;
          color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary};
          &.active, &:hover{
            opacity: 0.7;
            color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary};
          }
        }
        .icon-dropdown{
          .items{
            background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary};
            padding:15px;
            border-radius: 5px;
            position: absolute;
            z-index: 9999;
            box-shadow: 7px 8px 13px -7px rgba(0,0,0,0.15);
            -webkit-box-shadow: 7px 8px 13px -7px rgba(0,0,0,0.15);
            -moz-box-shadow: 7px 8px 13px -7px rgba(0,0,0,0.15);
          }
        }

        .icon{
          margin-left: 5px;
          margin-right: 5px;
          svg{
            margin-top:-2px;
            cursor: pointer;
            opacity: 0.5;
            &:hover{
              opacity: 0.8;
            }
          }
        }
      }
      .right{
        .icon{
          margin-left: 5px;
          margin-right: 5px;
          svg{
            margin-top:-2px;
            cursor: pointer;
            opacity: 0.5;
            &:hover{
              opacity: 0.8;
            }
          }
        }
      }
    }
    .k-line-chart-title {
      margin: 0;
      color: #E6E8EA;
      padding-bottom: 10px;
    }
    .k-line-chart {
      display: flex;
      flex: 1;
    }
    .k-line-chart-menu-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
      font-size: 12px;
      color: #929AA5;
      button {
        cursor: pointer;
        background-color: #2196F3;
        border-radius: 2px;
        margin-right: 8px;
        height: 24px;
        line-height: 26px;
        padding: 0 6px;
        font-size: 12px;
        color: #fff;
        border: none;
        outline: none;
      }
    }
  }
`;

export const ChartStyled = styled.div`
.item{
  margin: 3px 0;
  display:flex;
  cursor: pointer;
  color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary};
  &:hover{
    color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
    svg{
      opacity: 0.8;
    }
  }
  svg{
    cursor: pointer;
    opacity: 0.5;
    margin-right: 5px;
  }
  &.active{
    color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
    svg{
      opacity: 0.8;
    }
  }
}
`;

export const IndicatorStyled = styled.div`
  width: 220px;
  .head{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary};
      font-size: 12px;
      margin-bottom:10px;
    }
  .group-items{
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 5px;
    column-gap: 7px;
    .item{
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important;
      border-color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
      width:50px;
      padding:0.5px !important;
      text-align: center;
      font-size: 12px !important;
      cursor: pointer;
      opacity: 0.8;
      height:25px !important;
      &:hover{
        opacity: 1;
      }
      &.active{
        color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
      }
    }
  }
`;

export const GridStyled = (themeType: string) => {

  const theme = themeType === 'dark' ? dark : light;

  return {
    grid: {
      show: true,
      horizontal: {
        show: true,
        size: 1,
        color: theme.chart.line,
        // 'solid'|'dash'
        style: 'dash',
        dashValue: [2, 2]
      },
      vertical: {
        show: true,
        size: 1,
        color: theme.chart.line,
        // 'solid'|'dash'
        style: 'dash',
        dashValue: [2, 2]
      }
    },
    candle: {
      margin: {
        top: 0.2,
        bottom: 0.1
      },
      // 'candle_solid'|'candle_stroke'|'candle_up_stroke'|'candle_down_stroke'|'ohlc'|'area'
      type: 'candle_solid',
      bar: {
        upColor: '#26A69A',
        downColor: '#EF5350',
        noChangeColor: '#888888'
      },
      area: {
        lineSize: 2,
        lineColor: '#2196F3',
        value: 'close',
        backgroundColor: [{
          offset: 0,
          color: 'rgba(33, 150, 243, 0.01)'
        }, {
          offset: 1,
          color: 'rgba(33, 150, 243, 0.2)'
        }]
      },
      priceMark: {
        show: true,
        high: {
          show: true,
          color: '#D9D9D9',
          textMargin: 5,
          textSize: 10,
        },
        low: {
          show: true,
          color: '#D9D9D9',
          textMargin: 5,
          textSize: 10,
        },
        last: {
          show: true,
          upColor: '#26A69A',
          downColor: '#EF5350',
          noChangeColor: '#888888',
          line: {
            show: true,
            // 'solid'|'dash'
            style: 'dash',
            dashValue: [4, 4],
            size: 1
          },
          text: {
            show: true,
            size: 12,
            paddingLeft: 2,
            paddingTop: 2,
            paddingRight: 2,
            paddingBottom: 2,
            color: '#FFFFFF',
            borderRadius: 2
          }
        }
      },
      tooltip: {
        // 'always' | 'follow_cross' | 'none'
        showRule: 'always',
        // 'standard' | 'rect'
        showType: 'standard',
        labels: ['T: ', 'O: ', 'C: ', 'H: ', 'L: ', 'V: '],
        values: null,
        defaultValue: 'n/a',
        rect: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 6,
          offsetLeft: 8,
          offsetTop: 8,
          offsetRight: 8,
          borderRadius: 4,
          borderSize: 1,
          borderColor: '#3f4254',
          backgroundColor: 'rgba(17, 17, 17, .3)'
        },
        text: {
          size: 12,
          color: theme.fontColor.secondary,
          marginLeft: 8,
          marginTop: 6,
          marginRight: 8,
          marginBottom: 0
        }
      }
    },
    technicalIndicator: {
      margin: {
        top: 0.2,
        bottom: 0.1
      },
      bar: {
        upColor: '#26A69A',
        downColor: '#EF5350',
        noChangeColor: '#888888'
      },
      line: {
        size: 1,
        colors: ['#FF9600', '#9D65C9', '#2196F3', '#E11D74', '#01C5C4']
      },
      circle: {
        upColor: '#26A69A',
        downColor: '#EF5350',
        noChangeColor: '#888888'
      },
      lastValueMark: {
        show: false,
        text: {
          show: false,
          color: '#ffffff',
          size: 12,
          paddingLeft: 3,
          paddingTop: 2,
          paddingRight: 3,
          paddingBottom: 2,
          borderRadius: 2
        }
      },
      tooltip: {
        // 'always' | 'follow_cross' | 'none'
        showRule: 'always',
        // 'standard' | 'rect'
        showType: 'standard',
        showName: true,
        showParams: true,
        defaultValue: 'n/a',
        text: {
          size: 12,
          color: '#D9D9D9',
          marginTop: 6,
          marginRight: 8,
          marginBottom: 0,
          marginLeft: 8
        }
      }
    },
    xAxis: {
      show: true,
      height: null,
      axisLine: {
        show: true,
        color: theme.chart.line,
        size: 1
      },
      tickText: {
        show: true,
        color: theme.fontColor.primary,
        size: 12,
        paddingTop: 3,
        paddingBottom: 6
      },
      tickLine: {
        show: true,
        size: 1,
        length: 3,
        color: '#888888'
      }
    },
    yAxis: {
      show: true,
      width: null,
      // 'left' | 'right'
      position: 'right',
      // 'normal' | 'percentage' | 'log'
      type: 'normal',
      inside: false,
      axisLine: {
        show: true,
        color: theme.chart.line,
        size: 1
      },
      tickText: {
        show: true,
        color: theme.fontColor.primary,
        size: 12,
        paddingLeft: 3,
        paddingRight: 6
      },
      tickLine: {
        show: true,
        size: 1,
        length: 3,
        color: '#888888'
      }
    },
    separator: {
      size: 1,
      color: '#888888',
      fill: true,
      activeBackgroundColor: 'rgba(230, 230, 230, .15)'
    },
    crosshair: {
      show: true,
      horizontal: {
        show: true,
        line: {
          show: true,
          // 'solid'|'dash'
          style: 'dash',
          dashValue: [4, 2],
          size: 1,
          color: '#888888'
        },
        text: {
          show: true,
          color: '#D9D9D9',
          size: 12,
          family: 'Helvetica Neue',
          weight: 'normal',
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 2,
          paddingBottom: 2,
          borderSize: 1,
          borderColor: '#505050',
          borderRadius: 2,
          backgroundColor: '#505050'
        }
      },
      vertical: {
        show: true,
        line: {
          show: true,
          // 'solid'|'dash'
          style: 'dash',
          dashValue: [4, 2],
          size: 1,
          color: '#888888'
        },
        text: {
          show: true,
          color: '#D9D9D9',
          size: 12,
          family: 'Helvetica Neue',
          weight: 'normal',
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 2,
          paddingBottom: 2,
          borderSize: 1,
          borderColor: '#505050',
          borderRadius: 2,
          backgroundColor: '#505050'
        }
      }
    },
    shape: {
      point: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
        borderSize: 1,
        radius: 4,
        activeBackgroundColor: '#2196F3',
        activeBorderColor: '#2196F3',
        activeBorderSize: 1,
        activeRadius: 6
      },
      line: {
        // 'solid'|'dash'
        style: 'solid',
        color: '#2196F3',
        size: 1,
        dashValue: [2, 2]
      },
      polygon: {
        // 'stroke'|'fill'
        style: 'stroke',
        stroke: {
          // 'solid'|'dash'
          style: 'solid',
          size: 1,
          color: '#2196F3',
          dashValue: [2, 2]
        },
        fill: {
          color: 'rgba(33, 150, 243, 0.1)'
        }
      },
      arc: {
        // 'stroke'|'fill'
        style: 'stroke',
        stroke: {
          // 'solid'|'dash'
          style: 'solid',
          size: 1,
          color: '#2196F3',
          dashValue: [2, 2]
        },
        fill: {
          color: '#2196F3'
        }
      },
      text: {
        style: 'fill',
        color: '#2196F3',
        size: 12,
        family: 'Helvetica Neue',
        weight: 'normal',
        offset: [0, 0]
      }
    },
    annotation: {
      // 'top' | 'bottom' | 'point'
      position: 'top',
      offset: [20, 0],
      symbol: {
        // 'diamond' | 'circle' | 'rect' | 'triangle' | 'custom' | 'none'
        type: 'diamond',
        size: 8,
        color: '#2196F3',
        activeSize: 10,
        activeColor: '#FF9600'
      },
    },
    tag: {
      // 'top' | 'bottom' | 'point'
      position: 'point',
      offset: 0,
      line: {
        show: true,
        style: 'dash',
        dashValue: [4, 2],
        size: 1,
        color: '#2196F3'
      },
      text: {
        color: '#FFFFFF',
        backgroundColor: '#2196F3',
        size: 12,
        family: 'Helvetica Neue',
        weight: 'normal',
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 2,
        borderSize: 1,
        borderColor: '#2196F3'
      },
      mark: {
        offset: 0,
        color: '#FFFFFF',
        backgroundColor: '#2196F3',
        size: 12,
        family: 'Helvetica Neue',
        weight: 'normal',
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 2,
        borderSize: 1,
        borderColor: '#2196F3'
      }
    }
  }

}



