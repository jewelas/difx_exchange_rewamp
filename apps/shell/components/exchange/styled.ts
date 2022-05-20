import styled from "styled-components";
import { ThemeInterface } from "@difx/core-ui/themes";

export const PairMetadataStyled = styled.div`
    display: flex;
    height: 100%;
    padding: 0 10px;
    justify-content: space-between;
    .left {
      margin-top: 22px;
      display: flex;
      svg {
        margin-top: 5px;
        margin-left: 12px;
        margin-right: -12px;
        cursor: pointer;
        path{
          fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important;
        }
      }
      .isFavorited svg path{
        fill: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
      }
    }
    .center {
      display: flex;
      .price {
        display: flex;
        flex-direction: column;
        margin-top: 14px;
        margin-left: 15px;
        margin-right: 15px;
      }
    }
    .right {
      svg {
        cursor: pointer;
        margin-top: 22px;
      }
    }
`;

export const TableWraperStyled = styled.div`
    padding: 15px 16px; 
    .ant-input{
      height: 40px !important;
    }
    .table-group{
      .head{
        display: flex;
        margin: 25px 0 5px 0;
        text-transform: capitalize;
        overflow-x: scroll;

        // Hide scrollbar
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
        }

        svg path{
          fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important; 
        }
        .favorite{
          svg path{
            fill: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
          }
        }
        .tab{
          margin-right: 10px;
          &.active{
            .ant-typography{
              color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
            }
          }
        }
        .all{
          .ant-typography{
            color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
          }
        }
        svg{
          margin-right:10px;
          margin-top:2px;
          cursor: pointer;
        }
        .B2{
          cursor: pointer;
          font-weight: 600;
        }
      }
      .content{
        overflow-x:hidden;
        .pair{
          width: 100px;
          display:flex;
          svg{
            cursor: pointer;
            margin-right: 8px;
            margin-left:3px;
            path{
              fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important; 
            }
          }
          .added{
            svg path{
              fill: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
            }
          }
        }
        .price{
          width:80px;
        }
        .change{
          width:90px;
        }
        .header-change{
          display:flex;
          /* margin-left:-10px; */
          svg{
            margin-right: 5px;
          }
        }
        .ant-table-body{
          tr:hover{
            cursor: pointer;
            background: ${({ theme }: { theme: ThemeInterface }) => theme.color.rowHover};
          }
        }
      }
    }
`;

export const ChartWraperStyled = styled.div`
    padding: 10px; 
    .head{
      .options{
        width: 200px;
        display:flex;
        .B3{
          margin-right: 23px;
          cursor: pointer;
          padding-bottom:2px;
          &.active{
            color: ${({ theme }) => theme.color.primary};
            border-bottom: solid 2px ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
    .content{
    }
`;

export const ChartContainerStyled = styled.div`
  height: 100%;
  padding: 10px;

  .ant-tabs-nav{
    margin-bottom: 10px !important;
  }
`
export const ChartHeadStyled = styled.div`
  background-color: ${({theme}) => theme.background.secondary};
  height: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({theme}) => theme.fontColor.primary};
  font-size: ${({theme}) => theme.typography.small};
  font-weight: ${({theme}) => theme.fontWeight.regular};

  .timeframes{
    display: flex;
    gap: 10px;
    margin-left: 5px;

    span{
      cursor: pointer;
      opacity: 0.8;
      &.active{
        opacity: 1 !important;
        color: ${({theme}) => theme.color.primary};
      }
    }
  }

  .right-box{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    gap: 2px;
  }

  .candle-types{
    font-size: 12px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: ${({theme}) => theme.fontColor.primary};

    .chart-type-icon{
      background: transparent;
      opacity: 0.5;
      border: none;
      cursor: pointer;
    }

    .types-dropdown{
      display: none;
      width: 115px;
      position: absolute;
      background-color: ${({theme}) => theme.background.primary};
      opacity: 1;
      top: 24px;
      right: 0px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 5px;
      border-radius: 5px;
      z-index: 100;
      transition: all 0.2s ease-in-out;
      box-shadow: 3px 3px 20px rgba(68, 68, 68, 0.2);
      button{
        border: none;
        width: 100%;
        background: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        span{
          flex-grow: 1;
          display: flex;
          justify-content: flex-start;
          margin-left: 2px;
        }

        &.active{
          span{
            color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
          }
          svg{
            path{
              fill: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
            }
          }
        }
      }
    }

    &:hover{
      .types-dropdown{
        display: flex;
      }
    }

  }
  
  .indicators{
    font-size: 12px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    .indicator-icon{
      border: none;
      background: transparent;
      opacity: 0.5;
      font-size: 11px;
      cursor: pointer;
      margin: 2px;
      transition: all 0.2s ease-in-out;
      padding: 0px 2px;
      border-radius: 2px;
    }

    .indicator-dropdown{
      display: none;
      position: absolute;
      background-color: ${({theme}) => theme.background.primary};
      opacity: 1;
      top: 24px;
      right: 0px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 5px;
      border-radius: 5px;
      z-index: 100;
      transition: all 0.2s ease-in-out;
      gap: 10px;
      box-shadow: 3px 3px 20px rgba(68, 68, 68, 0.2);

      .indicator-index{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span{
          font-weight: 600;
        }
      }

      .indicator-button-group{
        width: 186px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
      button{
        width: 42px;
        border: 1px solid ${({theme}) => theme.fontColor.primary};
        background: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color:  ${({theme}) => theme.fontColor.primary};
        font-weight: 600;
        gap: 5px;
        opacity: 0.5;
        font-size: 11px;
        cursor: pointer;
        margin: 2px;
        transition: all 0.2s ease-in-out;
        padding: 0px 2px;
        border-radius: 2px;

        &.active{
          border: 1px solid ${({theme}) => theme.color.primary} ;
          background: ${({theme}) => theme.color.primary};
          color: ${({theme}) => theme.fontColor.button};
          opacity: 1;
        }
      }
    }

    &:hover{
      .indicator-dropdown{
        display: flex;
      }
    }
  }

  .fullscreen{
    cursor: pointer;
    opacity: 0.5;
  }

  

`


export const PlaceOrderWraperStyled = styled.div`
    padding: 10px;
    .asset-group{
        .asset-title{
          margin-top:20px;
          margin-left:5px;
          margin-bottom:10px
        }
        .asset-content{
          display:flex;
          justify-content: space-between;
          .ant-btn{
            margin: 0 5px;
            flex-grow: 1;
            background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important; 
            border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important; 
            color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important; 
          }
        }
      }
    .content{
      .tab-ordetype-group{
        &.compact{
          .ant-tabs-nav{
            width: 100%;
          }
          .ant-tabs-nav-wrap{
            width: 100% !important;
            .ant-tabs-nav-list{
              width: 100% !important;
              display: flex;
              justify-content: space-around;
            }
          }
        }
      }
      .side-group{
        .ant-btn{
            flex-grow: 1;
            background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important; 
            border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important; 
            color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important; 
            &.first{
              margin-right: 10px;
            }
            &.last{
              margin-left: 10px;
            }
            &.bid.active{
              border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success} !important;
              color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success} !important;
            }
            &.ask.active{
              border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.danger} !important;
              color: ${({ theme }: { theme: ThemeInterface }) => theme.color.danger} !important;
            }
          }
        .side-title{
          margin-bottom: 10px;
        }
        .side-content{
          display: flex;
          justify-content: space-between;
          margin-bottom:10px;
          .ant-btn{
            flex-grow: 1;
            background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important; 
            border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important; 
            color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important; 
            &.first{
              margin-right: 10px;
            }
            &.last{
              margin-left: 10px;
            }
            &.bid.active{
              border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success} !important;
              color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success} !important;
            }
            &.ask.active{
              border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.danger} !important;
              color: ${({ theme }: { theme: ThemeInterface }) => theme.color.danger} !important;
            }
          }
        }
      }
      .place-order-group{
        display: flex;
        .bid{
          margin-right: 10px;
          flex-grow: 1;
        }
        .ask{
          margin-left: 10px;
          flex-grow: 1;
        }
      }
    }
`;


export const OrderReportsWraperStyled = styled.div`
    padding: 10px 20px;
    height:100%;
    .display-selected-pair{
      .wrapper{
        z-index: 9;
        cursor: pointer;
        position: absolute;
        right: 9px;
        margin-top: 3px;
        font-size: 12px;
        line-height: 20px;
        .ant-switch{
          margin-right: 6px;
          margin-top: -1px;
        }
        .label{
          opacity: 0.8;
        }
      }
    }
    .content{
      height: 100%;
      padding-bottom: 50px;
      .bar-group{
        display: flex;
        justify-content: space-between;
        border-top: ${({ theme }) => theme.border.secondary};
        border-bottom: ${({ theme }) => theme.border.secondary};
        padding: 10px 20px;
        margin-left: -19px;
        margin-right: -20px;
        .bar-left{
          
        }
        .bar-right{
          .ant-btn{
            display:flex;
            svg{
              margin-top: 4px;
              margin-right:5px;
            }
          }
        }
      }
      .report-group{
        height: 100%;
      }
      .cell{
        svg{
          cursor: pointer;
          opacity: 0.7;
          &:hover{
            opacity: 1;
          }
        }
      }
    }
`;