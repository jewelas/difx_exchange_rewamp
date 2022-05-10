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
      width: 100% !important;
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
        color: ${({ theme }) => theme.color.primary} !important;
        border-color: ${({ theme }) => theme.color.primary} !important;
        svg path {
          fill: ${({ theme }) => theme.color.primary} !important;
        }
      }
      &:hover {
        transition: unset !important;
        color: ${({ theme }) => theme.color.primary} !important;
        border-color: ${({ theme }) => theme.color.primary} !important;
        svg path {
          fill: ${({ theme }) => theme.color.primary} !important;
        }
      }
    }
  }
`;

export const PageStyled = styled.div`
  .left-side {
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
  min-height: 75vh;
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
`