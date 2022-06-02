import styled from "styled-components";

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
    
    .deposity-qr-conatiner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export {DepositLayout}