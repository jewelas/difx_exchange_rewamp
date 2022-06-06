import styled from "styled-components";
import { ThemeInterface } from "@difx/core-ui/themes";

export const PageStyled = styled.div`
    background-color: ${({ theme }: { theme: ThemeInterface }) => theme.background.primary} !important;

    .head {
        min-height: 864px;
        background-image: url("./imgs/nomination/nomination_head.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding: 50px 0px;

        .titleContainer {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 25px;

            .title {
                max-width: 960px;
                text-align: center;
                font-weight: 800;
                font-size: 60px;
                line-height: 81px;
                color: white;
            }
        }

        .descriptionContainer {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0px 25px;

            .description {
                max-width: 588px;
                text-align: center;
                font-weight: 600;
                font-size: 16px;
                line-height: 28px;
                color: white;
            }
        }

        .btnContainer {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 50px 25px;

            .addButton {
                width: 200px;
                height: 50px;
                background-color: white;
                border-radius: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #3D7EFF;
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                cursor: pointer;
            }
        }

        .actionsContainer {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0px 25px;

            .actions {
                max-width: 840px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 400;
                font-size: 20px;
                line-height: 22px;
                color: white;
                column-gap: 20px;

                div {
                    display: flex;
                    column-gap: 8px;
                    align-items: center;
                }

                .dashed {
                    flex-grow: 1;
                    display: flex;
                    column-gap: 20%;
                    align-items: center;
                    justify-content: space-between;

                    & > div {
                        height: 1px;
                        background-color: white;
                        opacity: 0.4;
                        flex: 2;
                    }

                    & > div:first-of-type {
                        flex: 1;
                    }

                    & > div:last-of-type {
                        flex: 1;
                    }
                }
            }
        }
    }

    .boardContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 25px;
        margin-top: -240px;

        .board {
            width: 100%;
            max-width: 1682px;
            border-radius: 23px;
            background-color: white;
            background-clip: content-box;
            border: 17px solid rgba(255, 255, 255, 0.18);
            height: 555px;

            .ant-tabs-nav-wrap {
                border-bottom: 1px solid #f4f4f4;
                overflow: visible;
            }

            .ant-tabs .ant-tabs-tab {
                border-radius: ${({ theme }) => theme.borderRadius.regular};
                margin: 25px 40px;
                color: ${({ theme }) => theme.fontColor.secondary};
            }

            .ant-tabs-tab-btn {
                font-weight: 600;
                font-size: 20px;
                line-height: 22px;
            }

            .ant-tabs-tab.ant-tabs-tab-active {
                border-radius: ${({ theme }) => theme.borderRadius.regular};
                font-weight: ${({ theme }) => theme.fontWeight.medium};
            }

            .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
                color: #131314;
            }

            .ant-tabs .ant-tabs-ink-bar{
                border-radius: 30px;
                height: 4px;
                transform: translateY(50%);
            }

            .authBoard {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;

                .description {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 22px;
                    color: black;
                    padding: 20px;
                }

                .authBtn {
                    width: 320px;
                    height: 48px;
                    background-color: #F3F6FB;
                    border-radius: 2px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 22px;
                    margin: 20px;
                    color: #4E6593;
                }
            }

            .nomineeRequest {
                .header {
                    background-color: #fafafa;
                    color: #9AA5B4;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 18px;
                    display: flex;
                    justify-content: space-between;
                    column-gap: 10px;
                    width: 100%;
    
                    & > div {
                        padding: 20px 40px;
                        flex: 2;
                    }
    
                    & > div:last-of-type {
                        text-align: right;
                    }

                    .long {
                        flex:3;
                    }
                }

                .rowsContainer {
                    height: 300px;
                    overflow: auto;

                    .rows {
                        color: #2B2C3E;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 28px;
                        display: flex;
                        justify-content: space-between;
                        column-gap: 10px;
                        width: 100%;
                        border-bottom: 1px solid #f4f4f4;
        
                        & > div {
                            padding: 25px 40px;
                            flex: 2;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
        
                        & > div:last-of-type {
                            text-align: right;
                        }

                        .long {
                            flex:3;
                        }

                        .claimBox {
                            display: flex;
                            justify-content: flex-end;
                        }
        
                        .ifAccept {
                            display: flex;
                            justify-content: flex-end;
        
                            .accept {
                                color: #21C198;
                                position: relative;
                                cursor: pointer;
                                font-weight: 700;
                                font-size: 18px;
                                line-height: 18px;
                                padding-right: 20px;
        
                                &::after {
                                    content: '';
                                    position: absolute;
                                    top: 50%;
                                    right: 0px;
                                    transform: translateY(-50%);
                                    height: 30px;
                                    width: 1px;
                                    background-color: #f4f4f4;
                                }
                            }
        
                            .decline {
                                color: #DB5354;
                                cursor: pointer;
                                font-weight: 700;
                                font-size: 18px;
                                line-height: 18px;
                                padding-left: 20px;
                            }
                        }
        
                        .claim {
                            background: linear-gradient(84.56deg, #0B5CD6 12.23%, #3D7EFF 94.22%);
                            background-clip: text;
                            -webkit-text-fill-color: transparent;
                            -webkit-background-clip: text;
                            cursor: pointer;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 18px;
                        }
                    }
                }
    
            }

            .nominess {
                .header {
                    background-color: #fafafa;
                    color: #9AA5B4;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 18px;
                    display: flex;
                    justify-content: space-between;
                    column-gap: 10px;
                    width: 100%;
    
                    & > div {
                        padding: 20px 40px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex: 2;
                    }

                    .long {
                        flex: 3;
                    }
                }

                .rowsContainer {
                    height: 300px;
                    overflow: auto;

                    .rows {
                        color: #2B2C3E;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 28px;
                        display: flex;
                        justify-content: space-between;
                        column-gap: 10px;
                        width: 100%;
                        border-bottom: 1px solid #f4f4f4;
        
                        & > div {
                            padding: 25px 40px;
                            flex: 2;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .long {
                            flex: 3;
                        }
    
                        .pending {
                            color: #FAAD14;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 18px;
                        }
    
                        .remove {
                            color: #DB5354;
                            cursor: pointer;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 18px;
                        }
                    }
                }

            }

        }
    }

    .adContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 100px 25px 60px;

        .adBoxes {
            width: 100%;
            max-width: 1682px;
            display: flex;
            justify-content: space-between;
            column-gap: 10px;

            & > div {
                width: 263px;
                height: 263px;
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 20px;

                .title {
                    color: #131314;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 22px;
                    color: #131314;
                }

                .content {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 28px;
                    text-align: center;
                    color: #2B2C3E;
                }
            }
        }
    }
`