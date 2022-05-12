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
        padding: 0 20px 16px;
        height: 150px;
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
    padding: 20px 30px;
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
const FavoriteFilter = styled.div`
.ant-btn {
    border: none;
    border-radius: ${({theme}) => theme.borderRadius.regular};
    span{
        color: ${({theme}) => theme.fontColor.secondary};
    }
}
.ant-btn.active {
    background: ${({theme}) => theme.color.primaryLight} !important;
    border: none;
    border-radius: ${({theme}) => theme.borderRadius.regular};
    span{
        color: ${({theme}) => theme.color.primary};
        font-weight: ${({theme}) => theme.fontWeight.semiBold};
        
    }
}
`

// Grid Card Design
const GridWrapper = styled.div`
    .ant-card-body{padding: 15px;}
`
const CoinText = styled.div`
    &>.ant-typography{
        display: block;
        font-size: 24px;
        font-weight: 600;
        margin-top: 10px;
    }
`
const CoinPriceInfo = styled.div`
    margin-top: 10px;
    .ant-typography{
        display: block;
    }
    .ant-row .ant-col:nth-child(2){
        border-right:${({theme}) => theme.border.secondary};
        border-left:${({theme}) => theme.border.secondary};
    }
`
const MarketCardBtns = styled.div`
    margin-top:15px;
    .ant-btn{width:100%}
`
const CardStar = styled.div`
    position: absolute;
    right: 20px;
    cursor: pointer;
`
// Drawer Design
const CoinDrawerInfo = styled.div`
    margin: 30px 0;
    &>.ant-row{
    margin: 10px 0;
    }
`

export {FavoriteFilter, GridWrapper, CoinDrawerInfo, CardStar, MarketCardBtns, CoinPriceInfo, MarketCard, MarketContentStyled, PageStyled, MarketTabsWrapper, MarketWrapper, MarketContentWrapper, MarketGridLayout, TableLastPrice, CoinText}