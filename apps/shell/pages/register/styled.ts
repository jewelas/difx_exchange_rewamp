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
      width: 50% !important;
    }
  }
  .referral-group {
    display: flex;
    cursor: pointer;
    width: 147px;
    .icon {
      margin-top: 23px;
      margin-left: 10px;
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
      border-color: ${({ theme }) => theme.fontColor.secondary} !important;
      color: ${({ theme }) => theme.fontColor.secondary} !important;
      svg path {
        fill: ${({ theme }) => theme.fontColor.secondary} !important;
      }
      &.active {
        svg path {
          fill: #FFFFFF !important;
        }
      }
      &:hover {
        /* transition: unset !important;
        color: ${({ theme }) => theme.color.primary} !important;
        border-color: ${({ theme }) => theme.color.primary} !important; */
        /* svg path {
          fill: ${({ theme }) => theme.color.primary} !important;
        } */
      }
    }
  }
  .with-icon{
    background: ${({theme}) => theme.background.primary} !important;
    border: none
  }
  .with-icon.active{
    background: ${({theme}) => theme.color.primary} !important;
    color: #fff !important;
    border: none
  }
`;

export const PageStyled = styled.div`
  min-height: calc(100vh - 70px);
  .left-side {
    height: calc(100vh - 70px) !important;
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
    }
  }

  .right-side {
    height: calc(100vh - 70px) !important;
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

  .otpContainer{
    justify-content: space-between;
  }

  .otpbox{
    width: ${({theme}) => theme.otpBoxSize} !important;
    height: ${({theme}) => theme.otpBoxSize} !important;
    border: none;
    background: ${({theme}) => theme.background.primary} !important;
    border: 2px;
    font-size: ${({theme}) => theme.typography.xlarge};
  }

  .ant-btn{
    margin-top: 20px;
    width: 100%;
  }

  .botton-box{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .resend-box{
    color: ${({ theme }) => theme.fontColor.muted};
    span{
      margin-left: 5px;
      cursor: pointer;
      &.active{
        color: ${({ theme }) => theme.fontColor.link}
      }
    }
  }
  .paste-btn{
    color: ${({ theme }) => theme.fontColor.link};
    cursor: pointer;
  }

`