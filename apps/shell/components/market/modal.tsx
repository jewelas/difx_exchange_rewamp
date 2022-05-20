import { Avatar, Button, Col, Form, Input, Row, Select, Slider, Typography } from "antd";
import { MarketPopup , OptionGroupStyled} from "../../pages/market/styled";
import React, { useEffect, useState } from "react";
import { useHttpGet, useMarketPair } from "@difx/shared";
import { API_ENDPOINT, ASSETS_URL, QUERY_KEY } from '@difx/constants';

const { Option } = Select;
export function MarketModal() {
    const { data: currencyData } = useHttpGet<null, any>(QUERY_KEY.CURRENCIES, API_ENDPOINT.GET_CURRENCIES, {});
    const {marketPair, setMarketPair} = useMarketPair()

    // const router = useRouter();
    const [currencyList, setCurrencyList] = useState([]);
    const [toValue, setToValue] = useState("USDT");
    
    const fromHandleChange = (value) => {
        setMarketPair(value)
    };
    const toHandleChange = (value) => {
        setToValue(value)
    };
    useEffect(() => {
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
                            <Input placeholder="Enter Quantity" type="number"  />
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
                <div style={{textAlign:"center"}}>Average price: <span style={{fontWeight:"700"}}>1 {toValue} ~ 0.00002617 {marketPair}</span></div>
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
