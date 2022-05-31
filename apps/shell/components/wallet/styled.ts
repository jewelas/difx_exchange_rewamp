import styled from "styled-components";
import { Layout } from 'antd';
const { Sider } = Layout;

const SidebarWrapper = styled(Sider)`
  height: calc(100vh - 50px);
  .ant-menu-item{
      gap: 10px;
      &.ant-menu-item-active>div{
          fill: #08c;
      }
      &.ant-menu-item-selected, :hover{
        background-color: ${({theme}) => theme.color.primaryLight} !important;
        &>div, &>div svg, &>div svg path{
            fill: ${({theme}) => theme.color.primary};
        }
        .ant-menu-title-content, .ant-menu-title-content a{
          color: ${({theme}) => theme.color.primary};
          font-weight: ${({theme}) => theme.fontWeight.semiBold};
        }
      }
      .ant-menu-title-content, .ant-menu-title-content a{
          color: ${({theme}) => theme.fontColor.secondary};
      }
      &>div{
        display: flex;
        align-items: center;
      }
  }
  .ant-menu-item-group{
      border-top: ${({theme}) => theme.border.secondary};
  }
`;

const TopBalanceWrapper = styled.div`
    .total-balance-wrapper{
        display: flex;
        justify-content: space-between;
        padding: 25px;
        background: ${({theme}) => theme.background.secondary};
        margin-bottom:2px;
        position: relative;
        .bg-img-abs-right{
            position: absolute;
            right: 0;
            top: 0;
        }
    }
    .total-balance{
        h4{
            font-size: 30px;
            font-weight: 800;
            margin-bottom: 0px;
            line-height: 30px;
        }
        h6{
            font-size: 16px;
            color: ${({theme}) => theme.fontColor.secondary};
            font-weight: 800;
            margin-bottom: 0px;
        }
        &.yesterday-pl{
            h4{
                color: ${({theme}) => theme.color.danger};
                font-size: 22px;
            }
            h6{
                font-size: 14px;
                color: ${({theme}) => theme.color.danger};
            }
        }
        &.overview-pl{
            h4{
                color: ${({theme}) => theme.color.success};
                font-size: 22px;
            }
            h6{
                font-size: 14px;
                color: ${({theme}) => theme.color.success};
            }
        }
        .total-balance-heading{
        display: flex;
        align-items: center;
            p{
                margin-bottom: 0px;
                color: ${({theme}) => theme.fontColor.secondary};
                margin-right:5px
            }
            svg {
                width: 17px;
                path{
                    fill: ${({theme}) => theme.fontColor.primary};
                }
            }
        }
    }
    
`
const AccountCardWrapper = styled.div`
    padding: 25px;
    background: ${({theme}) => theme.background.secondary};
    .wallet-card{
        background: ${({theme}) => theme.background.secondary};
        position: relative;
        padding: 25px;
        border-radius: 10px;
        box-shadow: ${({theme}) => theme.shadow.light};
        &.rewards-balance{
            .wallet-card-bg{
                opacity: 0.1;
            }
            background: linear-gradient(91.84deg, #FCF0EB 48.44%, rgba(255, 223, 209, 0.82) 100.49%);
            h3{
                color: #FFA856 !important;
            }
            h6{
                color: #FFA856;
            }
        }
        .wallet-card-bg{
            position: absolute;
            right: 0px;
            top: 0;
        }
        .wallet-card-icon{
            img{
                width: 60px;
                height: 60px;
            }
            h3{
                font-size: 22px;
                color: ${({theme}) => theme.fontColor.secondary};
                margin-top: 5px;
            }
        }
        .wallet-card-content{
            h6{
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 0px;
                line-height: 42px;
            }
            span{
                font-size: 14px;
                color: ${({theme}) => theme.fontColor.secondary};
            }
        }
        .wallet-card-bg{

        }
    }
`
const RecentTransactionsWrapper = styled.div`
    margin-top: 2px;
    background: ${({theme}) => theme.background.secondary};
    .recent_transactions_header{
        padding: 20px;
        h3{
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 0px;
        }
    }
    .anchor-link{
        color: ${({theme}) => theme.fontColor.muted} !important;
    }
    .recent-transactions-table{
        padding: 0px 50px !important;
    }
    .ant-btn{
        border: none !important;;
    }
    .deposit-link{
        color: ${({theme}) => theme.color.success} !important;
    }
`
const ConvertModal = styled.div`
    .modal-footer{
        border-top:${({theme}) => theme.border.secondary};
        margin: 0 -24px -24px;
        padding: 20px 24px;
    }
    .convert-total{
        label{
            color: ${({theme}) => theme.fontColor.secondary};
        }
        div{
            font-size: 18px;
            font-weight: ${({theme}) => theme.fontWeight.semiBold};
            span{
                color: ${({theme}) => theme.fontColor.secondary};
                font-size: 12px;
                font-weight: ${({theme}) => theme.fontWeight.regular};
            }
        }
    }
`
// Stepper Wrapper StyleSheet
const StepperWrapper = styled.div`
    background: rgb(254,249,244);
    background: linear-gradient(117deg, rgba(254,249,244,1) 0%, rgba(255,255,255,1) 100%);
    padding: 24px 40px;
    position: relative;
    overflow: hidden;
    .wallet-stepper-topright{
        position: absolute;
        right: -60px;
        top:-70px;
        opacity: .4;
    }
    .wallet-stepper-leftbottom{
        position: absolute;
        left: -70px;
        bottom:-100px;
        opacity: .4;
    }
`
const  TransactionDetailsWrapper = styled.div`
    .top-section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 -24px 24px;
        padding: 0 24px 24px 24px;
        border-bottom: ${({theme}) => theme.border.secondary};
    }
    .witdrawal-modal{
        .ant-row{
            margin: 10px 0;
            &>.ant-col:last-child{
                max-width: 50%;
                .long-text{
                    font-size: 12px;
                    text-align: right;
                }
            }
        }
    }
`
const WithdrawModalWrapper = styled.div`
    padding: 20px;
    .withdraw-options{
        &>div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${({theme}) => theme.background.primary};
            padding: 10px 20px;
            margin-bottom: 15px;
            cursor: pointer;
            &>div:first-child{
            display: flex;
            justify-content: space-between;
            align-items: center;
                img {
                    margin-right:20px;
                    width:40px
                }
                .ant-typography{
                    margin-bottom: 0px;
                }
            }
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
`
const TransferModalWrapper = styled.div`
    .transfer_input_wrapper{
        display: flex;
        align-items: center;
        background: ${({theme}) => theme.background.primary};
        border-radius: ${({ theme }) => theme.borderRadius.rounded};
        margin-bottom: 20px;
        .transfer_dots{
            width: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 60px;
            padding: 0 20px;
            position: relative;
            &>svg{
                transform: rotate(90deg);
                position: absolute;
                width: 56px;
                height: 42px;
                top: 15px;
                line{
                    stroke: ${({ theme }) => theme.fontColor.secondary};
                }
            }
            .transfer_input_circle{
                width: 12px;
                height: 12px;
                border-radius: ${({ theme }) => theme.borderRadius.round};
                border: 2px solid ${({ theme }) => theme.fontColor.primary};
                position: relative;
            }
            .transfer_input_square{
                width: 12px;
                height: 12px;
                border: 2px solid ${({ theme }) => theme.fontColor.primary};
            }
        }
        .transfer_inputs{
            width:calc(100% - 70px);
            /* padding-left: 20px; */
            .ant-form-item{
                flex-direction: row;
                margin-bottom: 0px;
                align-items: center;
                &:first-child{
                    border-bottom: ${({theme}) => theme.border.secondary};
                }
                .ant-form-item-label{
                    padding-bottom: 0;
                    width: 40px;
                    label{
                        color: ${({theme}) => theme.fontColor.secondary};
                        height: 48px
                    }
                }
                .ant-select{
                    width: 150px;
                    .ant-select-selector {
                        .ant-select-selection-item{
                            display: flex;
                            align-items: center;
                            
                        }
                    }
                }
                .ant-form-item-control-input-content label{
                    padding:0 11px;
                }
            }
        }
        .transfer_img{
            width: 70px;
            &>div{
                width: 38px;
                height: 38px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: ${({ theme }) => theme.shadow.light};
                border-radius: ${({ theme }) => theme.borderRadius.circle};
                cursor: pointer;
                background: ${({theme}) => theme.background.secondary};
                margin: auto;
            }
        }
    }
`

export {TransferModalWrapper, WithdrawModalWrapper, TransactionDetailsWrapper, StepperWrapper, RecentTransactionsWrapper, SidebarWrapper, TopBalanceWrapper, AccountCardWrapper, ConvertModal}