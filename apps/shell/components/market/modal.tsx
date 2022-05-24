import { Avatar, Button, Col, Form, Input, Row, Select, Slider, Typography } from "antd";
import { MarketPopup , OptionGroupStyled} from "../../pages/market/styled";
import React, { useEffect, useState } from "react";
import { useHttpGet, useMarketPair, useAPI, useHttpPost, useAuth } from "@difx/shared";
import { API_ENDPOINT, ASSETS_URL, QUERY_KEY } from '@difx/constants';

const { Option } = Select;
export function MarketModal() {
    const onSuccess = (response) => {
        return null
    }
    const { data: currencyData } = useHttpGet<null, any>(QUERY_KEY.CURRENCIES, API_ENDPOINT.GET_CURRENCIES, {});
    // const { mutate: previewCurrency } = useHttpPost<null, any>({ onSuccess, endpoint: API_ENDPOINT.PREVIEW_CURRENCY })
    const {marketPair, setMarketPair} = useMarketPair()
    const {API} = useAPI();
    const { isLoggedIn } = useAuth();

    // const router = useRouter();
    const [currencyList, setCurrencyList] = useState([]);
    const [toValue, setToValue] = useState("USDT");
    const [coinValue, setCoinValue] = useState(0);
    const [enterValue, setEnterValue] = useState([]);

    if(isLoggedIn){
        const requestData = {
          side: 0,
          symbol: marketPair.symbol,
          amount: 100
        }
        // previewCurrency(requestData)
        console.log("nitin", requestData)
    }

    const initialLoad = async(value) => {
        const response = await API.get(API_ENDPOINT.GET_MARKET_COIN_PRICE(value));
        const {data} = response.data
        setCoinValue(data.currentPrice)
    }
    
    const fromHandleChange = async(value) => {
        setMarketPair(value)
        const response = await API.get(API_ENDPOINT.GET_MARKET_COIN_PRICE(value));
        const {data} = response.data
        setCoinValue(data.currentPrice)
    };
    const toHandleChange = (value) => {
        setToValue(value)
    };

    useEffect(() => {
        initialLoad(marketPair)
        setCurrencyList(currencyData)
    }, [currencyData]);
    


  return (
    <>
        <MarketPopup>
            <Form>
                <Row gutter={16}>
                    <Col span={15}>
                    <div className="quality">
                        <label>From</label>
                        <Form.Item name='amount'>
                            <Input placeholder="Enter Quantity" type="number"  value={enterValue}/>
                        </Form.Item>
                    </div>
                    </Col>
                    <Col span={9}>
                        <label className="graylabel">Available balance: 0.00 {toValue}</label>
                        <Select defaultValue={toValue} style={{ width: '100%' }} onChange={toHandleChange} className="coinselect" disabled>
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
                <Row gutter={16}>
                    <Col span={15}>
                    <div className="quality">
                        <label>To</label>
                        <Form.Item name='amount'>
                            <Input placeholder="Enter Quantity" type="number" disabled />
                        </Form.Item>
                    </div>
                    </Col>
                    <Col span={9}>
                        <label className="graylabel">&nbsp;</label>
                        <Select value={marketPair} style={{ width: '100%' }} onChange={fromHandleChange} className="coinselect">
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
                {/* <div className={clsx("slider-group", side)}>
                    <Slider onChange={onSliderChange} marks={marks} step={null} value={sliderValue} />
                </div> */}
                <div style={{textAlign:"center"}}>Average price: <span style={{fontWeight:"700"}}>1 {toValue} ~ {coinValue} {marketPair}</span></div>
                <Button type="primary" className="success" block style={{marginTop:25}}>Buy</Button>
                <Button type="primary" className="dangerOutline" block style={{marginTop:15}}>Switch to Sell</Button>
                {/* <Button onClick={() => { !isLoggedIn && router.push('/login') }}
            disabled={isDisabled || isLoading}
            htmlType={isLoggedIn ? "submit" : "button"}
            className={clsx(type === 'buy' && "successOutline", type === 'sell' && "dangerOutline")} type='primary'>{getButtonSubmitLabel()}</Button> */}
            </Form>
        </MarketPopup>
    </>
  );
}

export default MarketModal;
