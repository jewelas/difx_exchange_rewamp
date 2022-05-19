import styled from "styled-components";
import { ThemeInterface } from "../../themes";

export const BarStyled = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  height: 30px;
  &.ask {
    background: rgba(219, 83, 84, 0.2);
  }
  &.bid {
    background: rgba(33, 193, 152, 0.2);
  }
  margin-top: -5px;
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
    padding-top: 10px;
    padding-left: 20px;
    border-bottom: ${({ theme }) => theme.border};
    padding-bottom: 10px;
  }
  .com-priceinfo{
    .left {
      .B1 {
        font-weight: 600;
        &.bid {
          color: ${({ theme }:{theme:ThemeInterface}) => theme.color.success};
        }
        &.ask {
          color: ${({ theme }:{theme:ThemeInterface}) => theme.color.danger};
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
      margin-top: 7px !important;
    }
  }
  .com-head {
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
      padding: 10px 15px 10px 20px;
      display: flex;
      justify-content: space-between;
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
        margin-bottom: 1px;
        padding: 5px;
        padding-left: 20px;
        padding-right: 15px;
        &:hover{
          cursor: pointer;
          background: ${({ theme }:{theme:ThemeInterface}) => theme.color.rowHover};
        }
        .ant-typography {
          z-index: 2;
          &.price {
            width: 70px;
            max-width: 70px;
            overflow: hidden;
            overflow: hidden;
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
              color: ${({ theme }:{theme:ThemeInterface}) => theme.color.success};
            }
            &.ask {
              color: ${({ theme }:{theme:ThemeInterface}) => theme.color.danger};
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
          color: ${({ theme }:{theme:ThemeInterface}) => theme.color.danger};
        }
      }
      .bid {
        overflow: hidden;
        .price {
          color: ${({ theme }:{theme:ThemeInterface}) => theme.color.success};
        }
      }
    }
  }
`;
