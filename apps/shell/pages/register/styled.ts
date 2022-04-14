import { Color } from '@difx/core-ui';
import styled from 'styled-components';

export const FormStyled = styled.div`
  background: ${({theme})=> theme.backgroundColor2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 40px;
    .H6{
        margin-top: 20px;
        display:block;
    }
    
    .country-select-group{
      margin-top:10px;
      .ant-select{
        width:100% !important;
      }
    }
    .referral-group{
      display:flex;
      cursor:pointer;
      width: 147px;
      .icon{
        margin-top: 23px;
        margin-left: 10px;
      }
    }
    .term-group{
      margin-top: 20px;
    }
    .sign-up-btn{
      margin-top:20px;
      height: 48px !important;
      width: 100%;
    }
    .input-group{
      margin-top:30px;
      .ant-input{
        height: 48px;
        font-size: 14px;
        font-weight: 400;
        line-height:22px;
      }
      .input-item{
        margin-bottom:30px;
        display:flex;
        .ant-row.ant-form-item{
          margin-bottom: unset;
          width: 100%;
        }
        &.dial{
          .dropdown-dial{
            margin-right:20px;
          }
        }
      }
    }
    .account-type-group{
      margin-top:30px;
      button:nth-child(2){
        margin-left:30px;
      }
      button{
        padding:unset;
        height: 74px;
        width: 87px;
        border-radius: 2px;
        color: ${Color.grey.buttonSecondary};
        svg path{
          fill: ${Color.grey.buttonSecondary};
        }
        &.active{
          color: ${({theme})=> theme.primaryColor};
          border-color: ${({theme})=> theme.primaryColor} !important;
          svg path{
            fill: ${({theme})=> theme.primaryColor} !important;
          }
        }
        &:hover{
          transition: unset !important;
          color: ${({theme})=> theme.primaryColor} !important;
          border-color: ${({theme})=> theme.primaryColor} !important;
          svg path{
            fill: ${({theme})=> theme.primaryColor} !important;
          }
        }
      }
    }
  
`;

export const PageStyled = styled.div`
  .left-side{
    margin-top:-5px;
    .message{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
      .H1{
        margin-top: 20px;
      }
      .H5{
        margin-top: 20px;
      }
    }
    .cover-group{
      margin-top: 30px;
      text-align:center;
    }
  }

  .right-side{
    background: #fff;
    margin-top: -4px;
  }

  @media (max-width: 1026px) {
    .left-side{
      display: none !important;
    }
    .right-side{
      width: 100%;
      max-width: unset !important;
      flex: unset;
    }
  }
`;
