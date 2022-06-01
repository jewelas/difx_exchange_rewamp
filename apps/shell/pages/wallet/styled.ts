import { Layout } from "antd";
import styled from "styled-components";

const PageStyled = styled.div``;

const WalletContentStyled = styled(Layout.Content)`
    .title {
        font-weight: 600;
        font-size: 30px;
        color: #090e16;
    }
    .summary {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        color: #090e16;
    }
    .widgets {
    }
    .site-layout-background {
        background: #fff;
    }
    .wallet-heading{
        h3{
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 0px;
        }
        p{
            color: ${({theme}) => theme.fontColor.secondary};
        }
    }
    .toggle-card-wrapper{
        padding: 20px;
        margin-top: 2px;
        background: ${({theme}) => theme.background.secondary};
        .toggle-card{
            &>div {
                display: flex;
                align-items: center;
                span{
                    color: ${({theme}) => theme.fontColor.secondary};
                }
            }
        }
    }
`;
const WalletTabsWrapper = styled.div`
    background: ${({theme}) => theme.background.secondary};
    margin-bottom: 3px;
    border-radius: 2px;
    padding: 0px 30px;
    .ant-tabs-top{
        margin-bottom: -3px;
    }
    .ant-tabs-top>.ant-tabs-nav{
        margin: 0px;
    }
    .ant-tabs-top>.ant-tabs-nav .ant-tabs-ink-bar{
        height: 3px;
        border-radius: 20px;
    }
`
const WalletWrapper = styled.div`
    padding: 25px;
    background: ${({theme}) => theme.background.secondary};
`
const DepositLayout = styled.div`
    margin-top: 2px;
    background: ${({theme}) => theme.background.secondary};
    padding: 3rem 24px;
    .deposit-form-wrapper{
        display: flex;
        &>div.divider{
            width: 2px;
            background: ${({theme}) => theme.background.primary};
            position: relative;
            margin: 4% 8%;
            flex: 0 0 2px;
        }
        &>div{
            flex: 50%;
        }
    }
    .ant-form-static-input{
        width: 100%;
        padding-right: 50px;
        .ant-typography-copy{
            position: absolute;
            right: 0px;
        }
    }
    .ant-form-static-input{
        font-size: 16px;
        display: flex;
        align-items: center;
        margin-bottom: 0px;
        .ant-typography-copy{
            right: 30px;
        }
    }
    .qr-wrapper{
        display: flex;
        align-items: center;
    }
    .radio-group{
        .ant-space-item .ant-radio-wrapper{
            border: ${({theme}) => theme.border.secondary};
            padding: 10px;
            border-radius: 3px;
            &.ant-radio-wrapper-checked{
                background: ${({theme}) => theme.color.primaryLight};
                border: ${({theme}) => theme.border.primary};
            }
        }
    }
`;

export {DepositLayout, WalletWrapper, WalletTabsWrapper, WalletContentStyled, PageStyled}