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
        svg path{
          fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important; 
        }
        .favorite{
          svg path{
            fill: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
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
            background: ${({ theme }:{theme:ThemeInterface}) => theme.color.rowHover};
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
            color: ${({theme})=> theme.color.primary};
            border-bottom: solid 2px ${({theme})=> theme.color.primary};
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
    .content{
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