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

export const PlaceOrderWraperStyled = styled.div`
    padding: 10px;
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