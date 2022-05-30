import styled from "styled-components";
import { Modal } from 'antd';
import { ThemeInterface } from "@difx/core-ui/themes";

export const ModalStyled = styled(Modal)`
  .estimated{
      text-align: center;
  }
  .es-content{
      .ant-typography{
        color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
      }
  }
  .amount{
    color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    .am-title{
      display: flex;
      justify-content: space-between;
      margin-top:40px;
      margin-bottom:5px;
      .am-left{
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
      }
      .am-right{
        font-size: 12px;
        font-weight: 500;
        line-height: 14.4px;
        color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary};
      }
    }
  }
  .durations{
    color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    .du-title{
      margin-top:20px;
      margin-bottom:5px;
    }
    .du-arr{
        display: flex;
        flex-flow: wrap;
        row-gap: 6px;
        column-gap: 5px;
        .ant-btn{
          border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
          color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important;
          background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary} !important;
          width: 56px !important;
          height: 32px !important;
          display: flex;
          justify-content: center;
          padding-left:0px !important;
          padding-top:3px !important;
          span{
            margin:0 auto;
          }
          &:hover{
            background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
          }
          &.active{
            border: solid 1px ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
            color:${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
          }
        }
      }
  }
  .locked-amount{
    color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
    margin-top:20px;
    .locked-amount-title{
      margin-bottom:5px
    }
    .locked-amount-content{
      display: flex;
      justify-content: space-between;
      .locked-title{
        margin-bottom:5px;
        font-size: 12px;
        line-height: 14px;
        font-weight: 500;
        color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary};
      }
      .locked-value{
        font-size: 18px;
        line-height: 21.6px;
        font-weight: 700;
        color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
      }
    }
  }
  .conditions{
    margin-top:40px;
  }
  .staking-now{
    margin-top:20px;
    width:100%;
    display:flex;
    .ant-btn{
      flex-grow: 1;
    }
  }

`;


