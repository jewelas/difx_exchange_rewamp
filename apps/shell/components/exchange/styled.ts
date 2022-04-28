import styled from "styled-components";
import { ThemeInterface } from "@difx/core-ui/themes";

export const PairMetadataStyled = styled.div`
    display: flex;
    height: 100%;
    padding: 0 10px;
    justify-content: space-between;
    .left {
      margin-top: 22px;
      display: flex;
      svg {
        margin-top: 5px;
        margin-left: 12px;
        margin-right: -12px;
      }
    }
    .center {
      display: flex;
      .price {
        display: flex;
        flex-direction: column;
        margin-top: 14px;
        margin-left: 15px;
        margin-right: 15px;
      }
    }
    .right {
      svg {
        cursor: pointer;
        margin-top: 22px;
      }
    }
`;

export const ListPairStyled = styled.div`
    padding: 15px 24px; 
    .ant-input{
      height: 32px !important;
    }
    .table-group{
      .head{
        display: flex;
        margin: 25px 0 5px 0;
        svg path{
          fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important; 
        }
        .favorite{
          svg path{
            fill: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
          }
        }
        .all{
          .ant-typography{
            color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
          }
        }
        svg{
          margin-right:10px;
          margin-top:2px;
          cursor: pointer;
        }
        .B2{
          cursor: pointer;
        }
      }
      .content{
        .ant-table{
          background: transparent !important;
          .ant-table-cell-scrollbar{
            box-shadow: unset;
          }
          .ant-table-thead{
            th{
              background: transparent !important;
              color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
              border-bottom: unset;
              padding: 16px 0;
              .ant-table-column-sorters{
                justify-content: unset;
                .ant-table-column-title{
                  flex: unset !important;
                }
              }
            }
          }
          .ant-table-tbody{
            tr{
              line-height: 0.5;
              td{
                border:unset;
                background: transparent !important;
                color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
                padding: 8px 0;
                .pair{
                  display:flex;
                  svg{
                    cursor: pointer;
                    margin-right: 8px;
                    path{
                      fill: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important; 
                    }
                  }
                  .added{
                    svg path{
                      fill: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
                    }
                  }
                }
              }
            }
          }
          .ant-table-body{
            overflow: hidden !important;
            padding-right: 5px;
            &:hover{
              overflow: auto scroll !important;
              padding-right: 0;
              ::-webkit-scrollbar {
                  width: 5px;
                  background: transparent;
              }
            }
          }
        }
      }
    }
`;
