import { Color } from "@difx/core-ui";
import styled from "styled-components";

export const FormStyled = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 40px;
  .H6 {
    margin-top: 20px;
    display: block;
  }
  .country-select-group {
    margin-top: 10px;
    .ant-select {
      width: auto !important;
    }
  }
  .referral-group {
    display: flex;
    cursor: pointer;
    width: 147px;
    .icon {
      margin-top: 23px;
      margin-left: 10px;
      .allPath{
        height: 100%;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .term-group {
    margin-top: 20px;
  }
  .sign-up-btn {
    margin-top: 20px;
    /* height: 48px !important; */
    width: 100%;
  }
  .input-group {
    margin-top: 30px;
    .ant-input {
      /* height: 48px; */
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
    .input-item {
      margin-bottom: 30px;
      display: flex;
      .ant-row.ant-form-item {
        margin-bottom: unset;
        width: 100%;
      }
      &.dial {
        .dropdown-dial {
          margin-right: 20px;
        }
      }
    }
  }
  .account-type-group {
    margin-top: 30px;
    button:nth-child(2) {
      margin-left: 30px;
    }
    button {
      padding: unset;
      height: 74px !important;
      width: 87px;
      border-radius: 2px;
      border: none !important;
      color: ${({ theme }) => theme.fontColor.secondary} !important;
      svg path {
        fill: ${({ theme }) => theme.fontColor.secondary} !important;
      }
      .allPath{
        justify-content: center;
        align-items: center;
        display: flex;
      }
      &.active {
        svg path {
          fill: #FFFFFF !important;
        }
      }
    }
  }
  .with-icon{
    background: ${({theme}) => theme.background.primary} !important;
    border: none !important
  }
  .with-icon.active{
    background: ${({theme}) => theme.color.primary} !important;
    color: #fff !important;
    border: none !important
  }
`;

export const PageStyled = styled.div`
  min-height: calc(100vh - 50px);
  .left-side {
    height: calc(100vh - 50px) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -5px;
    .message {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
      .H1 {
        margin-top: 20px;
      }
      .H5 {
        margin-top: 20px;
      }
    }
    .cover-group {
      margin-top: 30px;
      text-align: center;
      svg{
        width: 70%;
        height: 60vh;
      }
    }
  }

  .right-side {
    background: #fff;
    margin-top: -4px;
  }

  @media (max-width: 1026px) {
    .left-side {
      display: none !important;
    }
    .right-side {
      width: 100%;
      max-width: unset !important;
      flex: unset;
    }
  }

  .hZcEua.allPath{
    justify-content: center !important;
    align-items: center !important;
    display: flex !important;
  }

  .ant-input-password-icon{
    svg{
      width: 18px;
      height: 18px;
      path{
        fill: ${({ theme }) => theme.fontColor.muted} !important;;
      }
    }
  }
  .ant-tabs-tab{
    font-size: ${({ theme }) => theme.typography.large} !important;
    border: none !important;
    padding: 0px;
  }
  .ant-tabs-tab:nth-child(1){
    border-right: 1px solid ${({ theme }) => theme.fontColor.muted} !important;
    padding-right: 20px !important;
  }
  .ant-tabs .ant-tabs-ink-bar{
    background: none !important;
  }
  .muted-link{
    margin-top: 10px;
    a{
      color: ${({ theme }) => theme.fontColor.muted} !important;
      text-decoration: underline;
    }
  }
`;

export const EmailVerifyContainer = styled.div`
  background: ${({ theme }) => theme.background.secondary} ;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 200px 40px 40px 40px;

  .verifyBox{
    width: 80%;
  }

  p{
    margin-top: 10px;
    font-size: ${({theme}) => theme.typography.large} !important;
    color: ${({theme}) => theme.fontColor.muted} !important;
  }

  .ant-btn{
    margin-top: 10px;
    width: 100%;
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

`