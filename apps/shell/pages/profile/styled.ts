import { Layout } from "antd";
import styled from "styled-components";

const PageStyled = styled.div`
`;
const WhiteBG = styled.div`
    background: ${({theme}) => theme.background.secondary};
`;

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
    h3.ant-typography{
        margin-bottom: 0px;
    }
    .verifyIdsWrapper{
        margin-bottom: 30px;
        .verifyIdCard{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: ${({theme}) => theme.border.secondary};
            &.noborder{
                border: none;
            }
        }
        .verifyid{
            display: flex;
            align-items: center;
            margin: 15px 0;
            img{
                width: 48px !important;
                height: 44px !important;
            }
            .profileId{
                margin-left: 10px;
                h4{
                    margin-bottom: 0px;
                    font-size: 18px;
                }
                >div{
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            }
        }
    }
    .apiKeysContent{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const FeeLevelWrapper = styled.div`
    padding: 20px;
    background: ${({theme}) => theme.color.primaryGradient};
    color: ${({theme}) => theme.fontColor.button};
    position: relative;
    .bg-img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        };
    }
    .fee-levels{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .fee-level{
            display: flex;
            align-items: center;
            gap: 20px;
            .diamond-img{
                width: 60px;
                img{
                    width: 100%;
                }
            }
            .vip-level{
                h5{
                    font-size: 20px;
                    font-weight: ${({theme}) => theme.fontWeight.bold};
                    margin-bottom: 0px;
                    color: ${({theme}) => theme.fontColor.button};
                }
                span {

                }
            }
        }
        .level-details{
            h6{
                font-size: 16px;
                color: ${({theme}) => theme.fontColor.button};
            }
            h5{
                font-size: 14px;
                color: ${({theme}) => theme.fontColor.button}  !important;
                font-weight: ${({theme}) => theme.fontWeight.regular};
            }
            span{
                font-size: 18px;
            }
        }
    }
`
const ProfileHeader = styled.div`
    background: ${({theme}) => theme.background.secondary};
    padding: 20px 25px;
    position: relative;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    min-height: 120px;
    .profileHeaderLeftImg{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 90px;
        opacity: .4;
        img {
            width: 100%;
            height: 100%;
        };
    }
    .profileHeaderRightImg{
        position: absolute;
        right: 0px;
        top: 0px;
        width: 120px;
        img {
            width: 100%;
            height: 100%;
        };
    }
`
const ProfileHeaderContent = styled.div`
    z-index: 1;
        h3{
            margin-bottom: 0px;
        }
        .profileVerify{
            margin: 10px 0;
            ul{
                margin: 0px;
                padding: 0px;
            }
            li{
                list-style: none;
                display: inline-flex;
                align-items: center;
                margin-right: 20px;
                gap: 5px;
            }
        }
`
export {ProfileHeaderContent, ProfileHeader, WhiteBG, FeeLevelWrapper, ProfileWrapper, ProfileContentStyled, PageStyled}