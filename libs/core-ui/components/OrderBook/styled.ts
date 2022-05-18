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
    }
  }

  .com-table-content {
    /* padding: 10px 15px 10px 20px; */
    color: ${({ theme }) => theme.fontColor.primary};
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
