import { Layout } from "antd";
import styled from "styled-components";

const PageStyled = styled.div``;

const ProfileContentStyled = styled(Layout.Content)`
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
`
const ProfileWrapper = styled.div`
    padding: 25px;
    background: ${({theme}) => theme.background.secondary};
`
const FeeLevelWrapper = styled.div`
    padding: 20px;
    background: ${({theme}) => theme.color.primaryGradient};
    color: ${({theme}) => theme.fontColor.button};
    height: 150px;
    position: relative;
    .bg-img{
        position: absolute;
    }
`

export {FeeLevelWrapper, ProfileWrapper, ProfileContentStyled, PageStyled}