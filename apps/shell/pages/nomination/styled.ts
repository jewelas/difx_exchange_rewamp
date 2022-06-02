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
        margin-top: -200px;

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
        }
    }
`