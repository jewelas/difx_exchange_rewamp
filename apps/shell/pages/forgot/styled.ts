import { Color } from "@difx/core-ui";
import styled from "styled-components";

const PageStyled = styled.div`
  .ant-row.row-group {
    background: ${({ theme }) => theme.backgroundColor};
    .ant-col.col-group {
      padding: 50px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 70px;
      background: ${({ theme }) => theme.backgroundColor2};
      border-radius: 15px;
      .H4 {
        margin-bottom: 30px;
      }
      .H4,
      .B2 {
        display: flex;
        justify-content: center;
      }
      .B2 {
        color: ${Color.grey.linkSecondary};
      }
      .B1 {
        color: ${Color.grey.linkSecondary};
      }

      .left-right {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
        .left {
          display: flex;
          .tab {
            cursor: pointer;
            &.active {
              .ant-typography {
                color: ${Color.blue.primary};
              }
            }
          }
          .splitter {
            border-left: solid 1px #c7cdd5;
            height: 14px;
            margin-top: 4px;
            margin-left: 21px;
            margin-right: 21px;
          }
        }
        .pointer {
          cursor: pointer;
        }
        .right {
          .ant-switch {
            margin-top: 1px;
            margin-left: 6px;
          }
          &:not(.forgot-pass) {
            display: flex;
            margin-top: 4px;
          }
          .B2 {
            font-weight: 500 !important;
            line-height: 17px !important;
          }
        }
      }
      .content {
        .guide {
          margin-top: 15px;
          margin-bottom: 30px;
          .B1 {
            color: ${({ theme }) => theme.textColor};
          }
        }
        .dial-group {
          display: flex;
          .dropdown-dial {
            margin-right: 10px;
          }
          .ant-row.ant-form-item {
            flex-grow: 1;
          }
        }
        .email {
          margin-bottom: 15px;
        }
      }
      .ant-btn {
        width: 100%;
      }
      .or {
        border-bottom: solid 1px #9aa5b4;
        margin-top: 40px;
        margin-bottom: 40px;
        color: #9aa5b4;
        div {
          background: ${({ theme }) => theme.backgroundColor2};
          width: 36px;
          text-align: center;
          position: absolute;
          margin-top: -12px;
          left: 46%;
        }
      }
      .sign-in-qrcode {
        display: flex;
        justify-content: center;
        padding-top: 10px;
        svg {
          margin-top: 3px;
          margin-right: 8px;
        }
      }
    }
  }
`;

export default PageStyled;
