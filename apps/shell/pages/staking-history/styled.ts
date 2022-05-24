import styled from "styled-components";
import { ThemeInterface } from "@difx/core-ui/themes";

export const PageStyled = styled.div`
  background-color: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
  margin-top:-20px;
  height:100%;
  padding: 20px 90px;
  .ant-typography{
    color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
  }
  .head{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .left{

    }
    .right{
      display:flex;
      .ant-btn{
        height: 48px;
        border:unset !important;
        background: ${({ theme }: { theme: ThemeInterface }) => theme.color.primaryLight} !important; ;
      }
      .ant-btn.first{
        margin-right: 10px;
      }
    }
  }
  .content{
    background-color: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary} !important;
    min-height: 300px;
    .tab-groups{
      padding: 10px 30px;
      border-bottom: solid 3px ${({ theme }: { theme: ThemeInterface }) => theme.border.color};
      height: 61px;
      margin-bottom: 30px;
      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated{
        height: 3px;
      }
      .ant-tabs-nav-wrap{
        height: 51px;
      }
      .ant-tabs-tab{
        font-weight: 700;
        font-size: 24px;
        line-height: 22px;
      }
    }
    .ant-pagination-item-link, .ant-pagination-item{
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
      color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
      border:unset;
    }
    .filter{
      padding: 0 30px;
      display:flex;
      margin-bottom: 20px;
      .date{
        display:flex;
        .date-title{
          margin-top: 10px;
          margin-right: 10px;
          color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
        }
        svg{
          opacity: 0.6;
          fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
        }
        .ant-picker.ant-picker-range input{
          color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
        }
        .ant-picker-clear{
          border-radius: 100%;
          svg{
            width: 16px;
            height: 16px;
          }
        }
        .ant-picker{
          margin-right: 20px;
          border: unset;
          box-shadow: unset;
          background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
        }
      }
      .ant-btn.first{ margin-right: 10px;}
      .ant-btn{
        width: 100px;
        height: 38px !important;
      }
    }
    .table-group{
      padding: 15px;
      .ant-select-selector{
        height: 33px !important;
      }
      .ant-pagination{
        margin-top:20px !important;
        text-align: center;
      }
      .ant-table-cell{
        font-weight: 600;
        font-size: 18px;
        line-height: 28.28px;
      }
      .cell.coin{
        display:flex;
        .name{
          margin-top: 3px;
          margin-left: 5px;
        }
      }
      .ant-btn.active{
        width: 100px;
        height: 38px !important;
        color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success} !important;
        border-color: ${({ theme }: { theme: ThemeInterface }) => theme.color.success} !important;
      }
    }
  }
`;
