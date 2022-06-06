import { Layout } from "antd";
import styled from "styled-components";

const PageStyled = styled.div``;
const MarketContentStyled = styled(Layout.Content)`
  .title {
    font-weight: 600;
    font-size: 30px;
    color: ${({theme}) => theme.fontColor.primary} !important;
  }
  .summary {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: ${({theme}) => theme.fontColor.primary} !important;
  }
`;
const MarketCard = styled.div`
    margin-top: 20px;
    .ant-card{
        background:${({theme}) => theme.background.secondary} ;
    }
    .ant-card-head{
        border-bottom: none;
        .ant-card-head-title{
            color: ${({theme}) => theme.fontColor.secondary};
        }
    }
    .ant-card-body {
        padding: 0 20px 16px;
        height: 126px;
    &>div{
        margin: 8px 0;
        .ant-typography{
            margin-left: 5px;
            color: ${({theme}) => theme.fontColor.primary};
        }
    }
    }
    .price-width{
        width: 80px;
    }
    .rate-width{
        width: 90px;
        text-align: right;
    }
    .coin-width{
        width: 80px;
    }
`;
const MarketTabsWrapper = styled.div`
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
    }
`
const MarketWrapper = styled.div`
    margin-top: 15px;
`
const MarketContentWrapper = styled.div`
    background: ${({theme}) => theme.background.secondary};
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
.ant-tabs .ant-tabs-tab {
    border: none;
    border-radius: ${({theme}) => theme.borderRadius.regular};
    padding:11px 20px;
    color: ${({theme}) => theme.fontColor.secondary};
    font-size: 14px;
}
.ant-tabs-tab.ant-tabs-tab-active {
    background: ${({theme}) => theme.color.primaryLight} !important;
    border: none;
    border-radius: ${({theme}) => theme.borderRadius.regular};
    color: ${({theme}) => theme.color.primary};
    font-weight: ${({theme}) => theme.fontWeight.medium};
}
.ant-tabs .ant-tabs-ink-bar{
    background: transparent;
}
`
const SpotFilter = styled.div`
margin-bottom: 16px;
    .ant-btn.ant-btn-default{
        border:1px solid transparent !important;
        color: ${({theme}) => theme.fontColor.secondary} !important;
        margin-right: 10px;
    }
    .ant-btn.ant-btn-default.active{
        color: ${({theme}) => theme.color.primary} !important;
        border:1px solid ${({theme}) => theme.color.primary} !important;
    }
`
const MarketPopup = styled.div`
    .quality{
        label {
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        color: ${({theme}) => theme.fontColor.primary};
        }
    }
    .graylabel{
        font-size: 12px;
        font-weight: 500;
        line-height: 14.4px;
        color: ${({theme}) => theme.fontColor.secondary};
    }
    .coinselect .ant-select-selection-item{
        display: flex;
        align-items: center;
    }

    .ant-slider:hover {
        .ant-slider-handle{
        border-color: ${({theme}) => theme.color.primary};
    }
    .ant-slider-track{
        background: ${({theme}) => theme.color.primary};
    }
    
    }
    .ant-slider-handle{
        border-color: ${({theme}) => theme.color.primary};
    }
    .ant-slider-track{
        background: ${({theme}) => theme.color.primary};
    }
    .priceBox{
        margin-top: 40px !important;
        color: ${({theme}) => theme.fontColor.primary};;
    }
    .middle-box{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .convert-btn-box{
            width: 38px;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: ${({ theme }) => theme.shadow.light};
            border-radius: ${({ theme }) => theme.borderRadius.circle};
            cursor: pointer;
        }
    }
`

const OptionGroupStyled = styled.div`
display: flex;
.coinvalue{
    margin-left: 10px;
}
`

// Grid Card Design
const GridWrapper = styled.div`
    .ant-card{background:${({theme}) => theme.background.primary};}
    margin-top: 15px;
    .ant-card-body{padding: 20px;}
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
    .ant-typography h1{
        font-size: 16px;
    }
`
const DrawerWrapper = styled.div`
    .coin-about{
        h1{font-size: 16px;}
        color: ${({theme}) => theme.fontColor.primary} !important;
    } 
`

const LastPriceWrapper = styled.div`
    transition: all 1s ease-in-out;
    &.up{
        color: ${({theme}) => theme.color.success} !important;
    }
    &.down{
        color: ${({theme}) => theme.color.danger} !important;
    }
`
const FutureModalWrapper = styled.div`

`

export { 
    FutureModalWrapper,
    DrawerWrapper,
    SpotFilter, 
    MarketPopup, 
    OptionGroupStyled, 
    FavoriteFilter, 
    GridWrapper, 
    CoinDrawerInfo, 
    CardStar, 
    MarketCardBtns, 
    CoinPriceInfo, 
    MarketCard, 
    MarketContentStyled, 
    PageStyled, 
    MarketTabsWrapper, 
    MarketWrapper, 
    MarketContentWrapper, 
    MarketGridLayout, 
    TableLastPrice, 
    CoinText,
    LastPriceWrapper
}