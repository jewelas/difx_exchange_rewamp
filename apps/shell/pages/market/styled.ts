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
const MarketTabsWrapper = styled.div`
    background: ${({theme}) => theme.background.white};
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
    }
`
const MarketWrapper = styled.div`
    margin-top: 15px;
`
const MarketContentWrapper = styled.div`
    background: ${({theme}) => theme.background.white};
    border-radius: 2px;   
`
const MarketGridLayout = styled.div`
`
const TableLastPrice = styled.div`
    padding: 3px;
    line-height: 22px;
    font-size: 16px;
    span{
        display: block;
        color: ${({theme}) => theme.fontColor.secondary};
    }
`
const CoinText = styled.div`
    
`

export {MarketCard, MarketContentStyled, PageStyled, MarketTabsWrapper, MarketWrapper, MarketContentWrapper, MarketGridLayout, TableLastPrice, CoinText}