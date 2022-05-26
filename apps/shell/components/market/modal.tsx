import { Avatar, Button, Col, Form, Input, Row, Select, Slider, Typography } from "antd";
import { MarketPopup , OptionGroupStyled} from "./styled";
import React, { useEffect, useMemo, useState } from "react";
import { useHttpGet, useMarketPair, useAPI, useBalance, numFormatter, useMarketModal } from "@difx/shared";
import { API_ENDPOINT, ASSETS_URL, QUERY_KEY } from '@difx/constants';
import { debounce } from "lodash"
import { showSuccess, ConvertButton} from "@difx/core-ui";
import clsx from "clsx";
import type { SliderMarks } from 'antd/lib/slider';

const { Option } = Select;

const marks: SliderMarks = {
   0: " ",
   25: " ",
   50: " ",
   75: " ",
   100: " ",
};

export function MarketModal() {
    const { data: currencyData } = useHttpGet<null, any>(QUERY_KEY.CURRENCIES, API_ENDPOINT.GET_CURRENCIES, {});
    const { marketPair, setMarketPair } = useMarketPair()
    const { quickBuyType, setQuickBuyType } = useMarketModal()
    const { API } = useAPI();
    const { userBalance } = useBalance()
    const [coinBalance, setCoinBalance] = useState<number>(0)

    const [currencyList, setCurrencyList] = useState([]);
    const [toValue, setToValue] = useState("USDT");
    const [coinValue, setCoinValue] = useState(0);
    const [fromAmount, setFromAmount] = useState<number | string>();
    const [toAmount, setToAmount] = useState<number | string>();
    const [isEnable, setIsEnable] = useState(false)
    const [sliderValue, setSliderValue] = useState(0)

    const initialLoad = async(value) => {
        const response = await API.get(API_ENDPOINT.GET_MARKET_COIN_PRICE(value));
        const {data} = response.data
        setCoinValue(data.currentPrice)
        if(quickBuyType === "sell"){
            setToValue(marketPair)
        }else{
            setToValue("USDT")
        }
        setIsEnable(false)
        setFromAmount("")
        setToAmount("")
        setSliderValue(0)
    }
    
    const fromHandleChange = async(value) => {
        setMarketPair(value)
        const response = await API.get(API_ENDPOINT.GET_MARKET_COIN_PRICE(value));
        const {data} = response.data
        setCoinValue(data.currentPrice)
    };

    const toHandleChange = (value) => {
        setFromAmount(value)
        previewValue(value)
    };

    const switchCoins = () => {
        if(quickBuyType === "buy"){
            setQuickBuyType("sell")
        }else{
            setQuickBuyType("buy")
        }
    }

    const onSliderChange = (e) => {
        setSliderValue(e)
        const percentValue = coinBalance * (e/100)
        toHandleChange(Number(percentValue))
    }

    const handleOrder = async() => {
        try{
            const reqData = {
                side: quickBuyType === "buy" ? 0 : 1,
                symbol: `${marketPair}USDT`,
                amount: Number(fromAmount)
            }
            const response = await API.post(API_ENDPOINT.PLACE_ORDER_MARKET, reqData)
            // eslint-disable-next-line
            const  { message } = response?.data
            showSuccess(message, "Order Successfully Placed")
            setFromAmount("")
            setToAmount("")
            setIsEnable(false)
        }catch(error){
            console.log(error)
        }
    }

    const previewValue = useMemo(()=>{
        return debounce(async(val) => {
            const reqData = {
                side: quickBuyType === "buy" ? 0 : 1,
                symbol: `${marketPair}USDT`,
                amount: Number(val)
            }
            try{
                const response = await API.post(API_ENDPOINT.PREVIEW_CURRENCY, reqData)
                // eslint-disable-next-line
                const { gettingAmount, price } = response?.data?.data
                setToAmount(Number(gettingAmount))
                setCoinValue(Number(price))
                setIsEnable(true)
            }catch(error){
                setFromAmount("")
                setToAmount("")
                setIsEnable(false)
            }
        }, 750)
    },[marketPair, quickBuyType])


    useEffect(() => {
        if(currencyData && userBalance){
            initialLoad(marketPair)
            setCurrencyList(currencyData)
            if(quickBuyType === "buy"){
                const balance = userBalance.find((item: any )=> item.currency === "USDT")
                if(balance){
                    setCoinBalance(balance.amount)
                }
            }else{
                const balance = userBalance.find((item: any )=> item.currency === marketPair)
                if(balance){
                    setCoinBalance(balance.amount)
                }
            }
        }
    }, [currencyData, userBalance, marketPair, quickBuyType]);


    return (
        <>
            <MarketPopup>
                <Form>
                    <Row gutter={16}>
                        <Col span={15}>
                        <div className="quality">
                            <label>From</label>
                            <Form.Item name='from-amount'>
                                <Input placeholder="Enter Quantity" allowClear type="number" onChange={(e) => toHandleChange(e.target.value)} value={fromAmount}/>
                                <span style={{display: "none"}}>{fromAmount}</span>
                            </Form.Item>
                        </div>
                        </Col>
                        <Col span={9}>
                            <label style={{fontSize: "11px"}} className="graylabel">Available balance: {numFormatter(coinBalance)} {toValue}</label>
                            <Select 
                                value={toValue} 
                                style={{ width: '100%' }} 
                                className="coinselect" 
                                disabled={true}
                            >
                            {
                            !currencyList
                            ?
                            "Loading..."
                            :
                            currencyList.map(item =>
                                <Option value={item.coin} key={item.coin}>
                                    <OptionGroupStyled>
                                        <div className="coinflag">
                                            <Avatar shape="square" size={26} src={`${ASSETS_URL}${item.coin.toLowerCase()}.png`}/>
                                        </div>
                                        <div className="coinvalue">
                                            {item.coin}
                                        </div>
                                    </OptionGroupStyled>
                                </Option>
                                )
                            }
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <div className="middle-box">
                            <div  onClick={switchCoins} className="convert-btn-box">
                                <ConvertButton isSell={quickBuyType === "buy" ? true : false}/>
                            </div>
                        </div>
                    </Row>
                    <Row gutter={16}>
                        <Col span={15}>
                        <div className="quality">
                            <label>To</label>
                            <Form.Item name='to-amount'>
                                <Input placeholder={`${toAmount ? toAmount : 'Total Amount'}`} type="number" disabled/>
                            </Form.Item>
                        </div>
                        </Col>
                        <Col span={9}>
                            <label className="graylabel">&nbsp;</label>
                            <Select 
                                value={quickBuyType === "buy" ? marketPair : "USDT"} 
                                style={{ width: '100%' }} 
                                onChange={fromHandleChange} 
                                className="coinselect" 
                                disabled={true}
                            >
                            {
                            !currencyList
                            ?
                            "Loading..."
                            :
                            currencyList.map(item =>
                                <Option value={item.coin} key={item.coin}>
                                    <OptionGroupStyled>
                                        <div className="coinflag">
                                            <Avatar shape="square" size={26} src={`${ASSETS_URL}${item.coin.toLowerCase()}.png`}/>
                                        </div>
                                        <div className="coinvalue">
                                            {item.coin}
                                        </div>
                                    </OptionGroupStyled>
                                </Option>
                                )
                            }
                            </Select>
                        </Col>
                    </Row>
                    <div className={clsx("slider-group")}>
                        <Slider 
                            onChange={onSliderChange} 
                            marks={marks} step={null} 
                            value={sliderValue} 
                            tooltipPlacement='bottom'
                        />
                    </div>
                    <div className="priceBox" style={{textAlign:"center"}}>Average price: <span style={{fontWeight:"700"}}>1 {toValue} ~ {coinValue} {marketPair}</span></div>
                    <Button 
                    type="primary" 
                    className={clsx(quickBuyType === "buy" ? "success" : "danger")}
                    onClick={handleOrder} 
                    block  
                    style={{marginTop:25}}
                    disabled={!isEnable}
                    >
                        {quickBuyType === "buy" ? "Buy" : "Sell"}
                    </Button>

                    <Button type="primary"
                        onClick={switchCoins} 
                        className={clsx( "outlineBtn",quickBuyType === "buy" ? "dangerOutline" : "successOutline" )}
                        block style={{marginTop:15}}
                    >
                        Switch to {quickBuyType === "buy" ? "Sell" : "Buy"}
                    </Button>
                </Form>
            </MarketPopup>
        </>
    );
}

export default MarketModal;
