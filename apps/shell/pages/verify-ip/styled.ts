import { Color } from "@difx/core-ui";
import styled from "styled-components";

const PageStyled = styled.div`
  .ant-row.row-group {
    background: ${({ theme }) => theme.background.primary};
    .ant-col.col-group {
      padding: 50px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 70px;
      background: ${({ theme }) => theme.background.secondary};
      border-radius: 15px;
      .form {
        margin-top: 25px;
      }
      .H4,
      .B2 {
        display: flex;
        justify-content: center;
      }
      .B2 {
        margin-top: 10px;
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
        .email {
          margin-bottom: 15px;
        }
      }
      .ant-btn {
        width: 100%;
      }
    }
  }
`;

export default PageStyled;
