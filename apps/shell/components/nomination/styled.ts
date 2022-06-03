import styled from "styled-components";

export const PageStyledRemoveModal = styled.div`

    .container {
        padding: 55px 35px 40px;

        .isSure {
            font-weight: 800;
            font-size: 18px;
            line-height: 28px;
            color: #2B2C3E;
            padding: 25px 0px 20px;
        }

        .isConfirm {
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #9AA5B4;
        }

        .btnContainer {
            padding-top: 50px;
            display: flex;
            justify-content: center;
            column-gap: 10px;

            & > div {
                width: 127px;
                height: 38px;
                border-radius: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                font-size: 14px;
                line-height: 22px;
                cursor: pointer;
            }

            .cancel {
                background: #F8F8F9;
                color: #2B2C3E;
            }

            .delete {
                background: #DB5354;
                color: white;
            }
        }
    }
`

export const PageStyledAddModal = styled.div`
    .container {
        padding: 40px;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 800;
            font-size: 18px;
            line-height: 28px;
            color: #2B2C3E;
        }

        .inputContainer {
            display: flex;
            flex-wrap: wrap;
            column-gap: 12px;
            row-gap: 20px;
            max-width: 630px;
            padding-top: 40px;

            .inputItem {
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                font-weight: 500;
                font-size: 12px;
                line-height: 22px;
                color: black;

                .inpuBox {
                    position: relative;
                    width: 307px;
                    height: 46px;
                    background-color: #F8F8F9;
                    border-radius: 2px;
                    padding: 0px 20px;
                    display: flex;
                    align-items: center;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;

                    .selectBox {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;

                        .ant-select-selector {
                            align-items: center;
                            padding: 0px;

                            .ant-select-selection-placeholder {
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 22px;
                                color: #9AA5B4;
                            }
                        }
                    }

                    input {
                        width: 100%;
                        background-color: transparent;
                        border: none;
                        outline: none;

                        &::placeholder {
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 22px;
                            color: #9AA5B4;
                        }
                    }
                }
            }
        }

        .btnContainer {
            padding-top: 100px;
            display: flex;
            justify-content: flex-end;

            .addBtn {
                width: 127px;
                height: 42px;
                background: #3D7EFF;
                border-radius: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-weight: 700;
                font-size: 14px;
                line-height: 22px;
                cursor: pointer;
            }
        }
    }
`