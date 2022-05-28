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
        &>div, &>div svg{
            fill: ${({theme}) => theme.color.primary};
        }
        .ant-menu-title-content{
          color: ${({theme}) => theme.color.primary};
          font-weight: ${({theme}) => theme.fontWeight.semiBold};
        }
      }
      .ant-menu-title-content{
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
        justify-content: space-between;
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
export {StepperWrapper, RecentTransactionsWrapper, SidebarWrapper, TopBalanceWrapper, AccountCardWrapper, ConvertModal}