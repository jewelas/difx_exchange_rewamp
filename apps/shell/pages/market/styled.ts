import { Layout } from "antd";
import styled from "styled-components";

const PageStyled = styled.div``;
const MarketContentStyled = styled(Layout.Content)`
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
`;
const MarketCard = styled.div`
    margin-top: 20px;
    .ant-card-head{
        border-bottom: none;
        .ant-card-head-title{
            color: ${({theme}) => theme.fontColor.secondary};
        }
    }
    .ant-card-body {
        padding: 0 24px 20px;
    &>div{
        margin: 8px 0;
        .ant-typography{
            margin-left: 5px;
        }
    }
    }
`;

export {MarketCard, MarketContentStyled, PageStyled}