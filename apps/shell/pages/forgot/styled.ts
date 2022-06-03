import { Color } from "@difx/core-ui";
import styled from "styled-components";

export const PageStyled = styled.div`
  height: calc(100vh - 50px);
  background: ${({ theme }) => theme.background.secondary};
  .ant-row.row-group {
    background: ${({ theme }) => theme.background.secondary};
    .ant-col.col-group {
      max-width: 550px;
      padding: 50px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 70px;
      background: ${({ theme }) => theme.background.primary};
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
        color: ${({ theme }) => theme.fontColor.muted};
      }
      .B1 {
        color: ${({ theme }) => theme.fontColor.muted};
      }

      .left-right {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
        a{
          color: ${({ theme }) => theme.fontColor.muted} !important;
        }
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
          a{
            text-decoration: underline;
          }
        }
      }
      .content {
        .guide {
          margin-top: 15px;
          margin-bottom: 30px;
          .B1 {
            color: ${({ theme }) => theme.fontColor.primary};
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
          background: ${({ theme }) => theme.background.secondary};
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
      .botton-box{
        margin: 10px 0px;
        display: flex;
        justify-content: space-between;
      }
      .resend-box{
        color: ${({ theme }) => theme.fontColor.muted};
        button{
          border: none !important;
          background: transparent !important;
          cursor: pointer;
          color: ${({ theme }) => theme.fontColor.link} !important;
          :disabled{
            color: ${({ theme }) => theme.fontColor.muted} !important;
          }
        }
      }
      .paste-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 5px;
        color: ${({ theme }) => theme.fontColor.link};
        cursor: pointer;
      }

      .ant-input-affix-wrapper{
        height: ${({ theme }) => theme.inputFieldHeight};
      }

      #repeat_password.ant-input{
        height: 42px !important;
      }

      .ant-tabs{
        overflow: hidden;
      }

      .ant-input-password-icon{
        svg{
          width: 18px;
          height: 18px;
          path{
            fill: ${({ theme }) => theme.fontColor.muted} !important;
          }
        }
      }
      .ant-input{
        background: ${({ theme }: { theme }) => theme.background.secondary} !important;
        border-radius: ${({ theme }: { theme }) => theme.borderRadius.regular} !important;
      }
      .ant-input-affix-wrapper,
      .ant-input-affix-wrapper-borderless, 
      .ant-input-affix-wrapper-borderless:hover,
      .ant-input-affix-wrapper-borderless:focus, 
      .ant-input-affix-wrapper-borderless-focused, 
      .ant-input-affix-wrapper-borderless-disabled, 
      .ant-input-affix-wrapper-borderless[disabled]{
        height: ${({ theme }: { theme }) => theme.inputFieldHeight} !important;
        background: ${({ theme }: { theme }) => theme.background.secondary} !important;
        border-radius: ${({ theme }: { theme }) => theme.borderRadius.regular} !important;
        border: ${({ theme }: { theme }) => theme.border.secondary} !important;
        &:focus{
          box-shadow: none !important;
        }
      }
      .sign-in-btn{
        &:disabled{
          border: ${({ theme }: { theme }) => theme.border.secondary} !important;
          background: ${({ theme }: { theme }) => theme.color.disabled} !important;
        }
      }
      .ant-select-selector{
        height: ${({ theme }: { theme }) => theme.inputFieldHeight} !important;
        background: ${({ theme }: { theme }) => theme.background.secondary} !important;
        border-radius: ${({ theme }: { theme }) => theme.borderRadius.regular} !important;
        border: ${({ theme }: { theme }) => theme.border.secondary} !important;
        color: ${({ theme }: { theme }) => theme.fontColor.primary} !important;
      }
    }
  }
`;

