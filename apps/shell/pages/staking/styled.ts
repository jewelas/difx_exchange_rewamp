import styled from "styled-components";
import { ThemeInterface } from "@difx/core-ui/themes";

export const PageStyled = styled.div`
  background-color: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;
  margin-top: -22px;
  .head,.info,.body{
    .ant-col{
      margin: 0 auto;
    }
  }
  .ant-btn.ant-btn-default.ant-btn-background-ghost{
    display: flex;
    span{
      margin-left: 10px;
    }
  }

  .head{
    height: 356px;
    background-image: url("./imgs/staking_head.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    
    .ant-row{
      height: 100%;
      .left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 813px) {
          display:none;
        }
        .H2{
          margin-bottom: 15px;
          color: #fff !important;
        }
        .H6{
          color: #fff !important;
        }
        .ant-btn{
          margin-top: 25px;
          margin-bottom: 25px;
        }
        .nav{
          display: flex;
          .ant-btn{
            margin-right: 10px !important;
            span{
              color:#fff;
            }
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 813px) {
          max-width: 100%;
        }
        .card{
          background: #fff;
          min-width: 278px;
          height: 250px;
          padding: 30px;
          border-radius: 3px;
          .ant-typography{
            color: #454552 !important;
          }
          .top{
            margin-bottom: 30px;
          }
          .center{
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            .values{
              display: flex;
              flex-direction: column;
              .B2{
                color: #777;
              }
            }
          }
          .bottom{
            display: flex;
            justify-content: space-around;
            .ant-btn:not([disabled]).ant-btn-primary.ant-btn-background-ghost{
              color: #fff !important;
            }
            .ant-btn{
              flex-grow: 1;
              &.l{
                margin-right: 5px;
              }
              &.r{
                margin-left: 5px;
              }
            }
          }
        }
        .nav{
          display:none;
          .ant-btn{
            margin-right:15px !important;
          }
          @media (max-width: 813px) {
            display:flex;
            width: 100%;
            margin-top: 10px;
          }
        }
      }
    }

    .H2{
      font-weight: 800;
      line-height: 50.4px;
      font-size: 42px;
    }
  }
  .info{
    .ant-col{
      display: flex;
      justify-content: space-between;
      padding: 30px 0 20px 0;
    }
    .left{
      .locked-staking{
        .ant-typography{
          color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
        }
      }
    }
    .right{
      display: flex;
      .show-available{
        .ant-checkbox-wrapper{
          span{
            color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
          }
        }
      }
      .input-group{
        margin-left:12px;
        margin-top: -12px;
        .ant-input-affix-wrapper{
          width: 300px;
          background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary} !important;
          .ant-input{
            background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary} !important;
          }
        }
      }
    }
  }
  .body{
    min-height: 130px;
    .card-group{
      display: flex;
      flex-flow: wrap;
      row-gap: 46px;
      column-gap: 36px;
      padding: 30px;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary} !important;
      .card-item{
        padding: 20px;
        width: 350px;
        border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary} !important;
        .card-head{
          display:flex;
          justify-content: space-between;
          .cleft{
            display: flex;
            .coin-name{
              margin-top: 6px;
              margin-left: 10px;
              color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
            }
          }
          .cright{
            position: relative;
            .sold-out{
              background: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary};
              color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary};
              border-radius: 50px;
              padding: 3px 27px 5px;
              font-weight: 700;
              font-size: 18px;
              line-height: 22px;
            }
            svg{
              position:absolute;
              margin-left: -57px;
              margin-top: -14px;
            }
            .new{
              position:absolute;
              margin-left: -27px;
              color: #fff;
              font-size: 18px;
              line-height: 22px;
              font-weight: 800;
            }
          }
        }
        .card-body{
          .line1{
            margin-top: 20px;
            display: flex;
            .interest-rate{
              color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important;
            }
            .coin-name{
              margin-top: 20px;
              margin-left: 10px;
              .ant-typography{
                color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important;
              }
            }
          }
          .line2{
            margin-top: 20px;
            .ltitle{
              margin-bottom: 5px;
            }
            .lcontent{
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
          .line3{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            /* .minmax{
              .mtitle{
                .ant-typography{
                  color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important; 
                }
              }
              .mvalue{
                margin-top: 2px;
                .ant-typography{
                  color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important; 
                }
              }
            } */
          }
        }
        .card-bottom{
          margin-top: 20px;
          .ant-btn{
            width: 100%;
          }
        }
      }
    }
  }
`;
