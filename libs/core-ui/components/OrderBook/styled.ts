import styled from "styled-components";
import { ThemeInterface } from "../../themes";

export const BarStyled = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  height: 24px;
  &.ask {
    background: rgba(219, 83, 84, 0.2);
  }
  &.bid {
    background: rgba(33, 193, 152, 0.2);
  }
  margin-top: -2px;
`;

export const ComponentStyled = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  height: 100%;
  .dot{
    position: absolute;
    margin-left:-15px;
    margin-right:-15px;
    margin-top:-2px;
  }
  .com-title {
    margin-bottom: -10px;
    padding-top: 10px;
    padding-left: 20px;
    border-bottom: ${({ theme }) => theme.border};
    padding-bottom: 10px;
  }
  .com-priceinfo{
    margin-top: 7px !important;
    .left {
      .B1 {
        font-weight: 600;
        &.bid {
          color: ${({ theme }:{theme:ThemeInterface}) => theme.color.success} !important;
        }
        &.ask {
          color: ${({ theme }:{theme:ThemeInterface}) => theme.color.danger} !important;
        }
      }
    }
    .center-group{
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      margin-bottom: 10px;
    }
    .btn-change-total{
      position: absolute;
      right: 51px;
      margin-top: 6px !important;
    }
  }
  .com-head {
    margin-bottom: -8px;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 12px 10px;
    border-bottom: ${({ theme }) => theme.border};

    .left {
      display: flex;
      width: 120px;
      justify-content: space-around;
      svg {
        cursor: pointer;
        opacity: 0.4;
      }
      .active {
        svg {
          opacity: 1;
        }
      }
    }

    .right {
      margin-left: -18px;
      .ant-select {
        margin-top: -6px;
      }
      .ant-btn{
        font-size: 12px;
        line-height: 20px;
        font-weight: 500;
        margin-right:10px !important;
        color: ${({ theme }:{theme:ThemeInterface}) => theme.fontColor.primary} !important;
      }
    }
  }

  .com-table-content {
    color: ${({ theme }) => theme.fontColor.primary};
    .head.compact{
      width: 100%;
      display:flex;
      font-size: 11px;
      margin-bottom: -4px;
      .left .t2{
        margin-right:-12px;
      }
      .left, .right{
        display: flex;
        flex-grow: 1;
        width:100%;
        padding:0 15px 0 20px;
        .t1{
          flex-grow: 1;
        }
        .t2{
          flex-grow: 1;
          text-align: right;
        }
      }
    }
    .table-head {
      padding: 5px 15px 0px 20px;
      margin-bottom: -4px;
      display: flex;
      justify-content: space-between;
      .ant-typography{
        font-size: 11px;
      }
      .quantity{
        width: 70px;
        max-width: 70px;
        text-align: right;
        margin-left: 16px;
      }
      .col-total{
        display: flex;
        svg{
          margin-right: 5px;
        }
      }
    }
    .loading {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
    .table-body {
      margin-top: 10px;
      overflow: hidden;
      .compact{
        display:flex;
        .left,.right{
          flex-grow: 1;
        }
      }
      .compact{
        .table-row:hover{
          background: unset !important;
        }
        .ant-typography {
          &.amount{
            width: unset !important;
          }
        }
        .ask{
          .price{
            justify-content: flex-end !important;
          }
          .total{
            justify-content: flex-start !important;
          }
        }
        .bid{
          .total{
            justify-content: flex-end !important;
          }
          .price{
            justify-content: flex-start !important;
          }
        }
      }
      .table-row {
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 1px; */
        padding: 2px;
        padding-left: 20px;
        padding-right: 15px;
        &:hover{
          cursor: pointer;
          background: ${({ theme }:{theme:ThemeInterface}) => theme.color.rowHover};
        }
        .ant-typography {
          z-index: 2;
          font-size: 12px !important;
          &.price {
            width: 50px;
            max-width: 50px;
            overflow: visible !important;
            white-space: nowrap;
            display: flex;
            justify-content: flex-start;
          }
          &.amount {
            width: 70px;
            max-width: 70px;
            overflow: hidden;
            overflow: hidden;
            white-space: nowrap;
            display: flex;
            justify-content: flex-end;
          }
          &.total {
            overflow: hidden;
            overflow: hidden;
            flex-grow: 1;
            max-width: 70px;
            white-space: nowrap;
            overflow: visible;
            display: flex;
            justify-content: flex-end;
          }
        }
      }
      .center-group {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        padding: 0 20px;
        .left {
          .B1 {
            font-weight: 600;
            &.bid {
              color: ${({ theme }:{theme:ThemeInterface}) => theme.color.success} !important;
            }
            &.ask {
              color: ${({ theme }:{theme:ThemeInterface}) => theme.color.danger} !important;
            }
          }
        }
        .right {
          .ant-btn{
            font-size: 12px;
            line-height: 20px;
            font-weight: 500;
            margin-left: 10px !important;
            margin-right:-5px !important;
            color: ${({ theme }:{theme:ThemeInterface}) => theme.fontColor.primary} !important;
          }
        }
      }
      .ask {
        overflow: hidden;
        .price {
          color: ${({ theme }:{theme:ThemeInterface}) => theme.color.danger} !important;
        }
      }
      .bid {
        overflow: hidden;
        .price {
          color: ${({ theme }:{theme:ThemeInterface}) => theme.color.success} !important;
        }
      }
    }
  }
`;
