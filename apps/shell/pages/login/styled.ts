import { Color } from "@difx/core-ui";
import styled from "styled-components";

const PageStyled = styled.div`
  height: calc(100vh - 70px);
  .ant-row.row-group {
    background: ${({ theme }) => theme.background.primary};
    .ant-col.col-group {
      width: 100%;
      max-width: 550px;
      padding: 50px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 70px;
      background: ${({ theme }) => theme.background.secondary};
      border-radius: 15px;
      .H4,
      .B2 {
        display: flex;
        justify-content: center;
      }
      .B2 {
        color: ${({ theme }) => theme.fontColor.muted};
      }
      .B1 {
        color: ${({ theme }) => theme.fontColor.muted};
      }
      .link {
        cursor: pointer;
        background: ${({ theme }) => theme.background.secondary};
        color: ${({ theme }) => theme.fontColor.primary};
        border: 0.5px solid
          ${({ theme }) =>
            theme.currentTheme === "light"
              ? "#E1DDDD"
              : theme.background.primary};
        box-sizing: border-box;
        border-radius: 13.5px;
        padding: 2px 0px;
        width: 112px;
        margin: 0 auto;
        margin-top: 13px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        svg {
          margin-right: 5px;
        }
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
                color: ${({ theme }) => theme.color.primary};
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
        .dial-group {
          margin: 0px !important;
          display: flex;
          .dropdown-dial {
            margin-right: 10px;
            margin-bottom: 0px;
          }
          .ant-row.ant-form-item {
            flex-grow: 1;
          }
        }
        .email {
          /* margin-bottom: 15px; */
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
          background: ${({ theme }) => theme.background.secondary};
          width: 36px;
          text-align: center;
          position: absolute;
          margin-top: -12px;
          left: 46%;
        }
      }
      .sub-account-link{
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.fontColor.link};
        font-size: 16px;
        cursor: pointer;
      }
      .to-register-box{
        display: flex;
        justify-content: center;
        align-items: center;
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
      .text-highlight{
        color: ${({ theme }) => theme.color.success};
      }
      .forgot-pass a{
        color: ${({ theme }) => theme.fontColor.muted} !important;
      }
      .subtext{
        margin-top: 10px;
        color: ${({ theme }) => theme.fontColor.primary} ;
      }
      .sign-in-qrcode{
        border: 1px solid ${({ theme }) => theme.color.primary} ;
        color:${({ theme }) => theme.color.primary} !important;
      }
      .sign-in-account{
        border: 1px solid ${({ theme }) => theme.color.primary} ;
        color:${({ theme }) => theme.color.primary} !important;
      }
    }
  }
`;

export default PageStyled;
