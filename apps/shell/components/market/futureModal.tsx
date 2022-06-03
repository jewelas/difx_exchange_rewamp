import { FutureModalWrapper } from "./styled";
import React, { useState } from "react";
import { Button, Checkbox, Col, DatePicker, Form, Input, Radio, Row, Select, Typography } from "antd";

export function FutureModal() {
    const [ orderType, setOrderType ] = useState("marketExecution")
    const [ fieldVisible, setFieldVisible ] = useState(false)
    return (
        <>
            <FutureModalWrapper>
                <Row>
                    <Col span={12}>
                        Chart Area
                    </Col>
                    <Col span={12}>
                        <Typography.Title level={5}>
                            Future Order
                        </Typography.Title>
                        <Form
                            layout="vertical">
                                <Form.Item label="Symbol">
                                    <Select 
                                        placeholder="Select Network" className="coinselect">
                                        <Select.Option key="DIFXUSDT" value="DIFXUSDT">DIFXUSDT</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Type">
                                    <Select 
                                        onChange={(value) => setOrderType(value)}
                                        placeholder="Select Network"
                                        className="coinselect"
                                        value={orderType}
                                    >
                                        <Select.Option key="marketExecution" value="marketExecution">Market Execution</Select.Option>
                                        <Select.Option key="limitOrder" value="limitOrder">Limit</Select.Option>
                                    </Select>
                                </Form.Item>
                                {  
                                    orderType === "limitOrder" ?
                                        <div className="radio-group">
                                            <Form.Item label="Side">
                                                <Radio.Group>
                                                    <Radio key="buy" value="buy">Buy Limit</Radio>
                                                    <Radio key="sell" value="sell">Sell Limit</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                    : 
                                        null
                                }
                                
                                <Form.Item
                                    label='Quantity'>
                                    <Input 
                                        placeholder="Enter Quantity" 
                                        type="number" 
                                    />
                                </Form.Item>
                                <Form.Item
                                    label='Leverage'>
                                    <Input 
                                        placeholder="Enter Leverage" 
                                        type="text" 
                                    />
                                </Form.Item>
                                {  
                                    orderType === "limitOrder" ?
                                        <Row gutter={15}>
                                            <Col span={12}>
                                                <Form.Item label="Price">
                                                    <Input 
                                                        placeholder="Enter Stop Loss Amount" 
                                                        type="text" 
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item label="Stop Limt Price">
                                                    <Input 
                                                        placeholder="Enter Take Profit" 
                                                        type="text" 
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    : 
                                        null
                                }
                                <div style={{ marginBottom: '20px' }}>
                                    <Checkbox onChange={() => {
                                            setFieldVisible(!fieldVisible);
                                        }}>
                                            TP/SL
                                    </Checkbox>
                                </div>
                                {fieldVisible ? 
                                <Row gutter={15}>
                                    <Col span={12}>
                                        <Form.Item label="Stop Loss (Optional)">
                                            <Select 
                                                placeholder="Select Network" className="coinselect">
                                                <Select.Option key="DIFXUSDT" value="DIFXUSDT">DIFXUSDT</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Take Profit (Optional)">
                                            <Select 
                                                placeholder="Select Network" className="coinselect">
                                                <Select.Option key="DIFXUSDT" value="DIFXUSDT">DIFXUSDT</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                : null 
                                }
                                {  
                                    orderType === "limitOrder" && fieldVisible ?
                                    <Row gutter={15}>
                                        <Col span={12}>
                                            <Form.Item label="Expiration">
                                                <Select 
                                                    placeholder="Select Network" className="coinselect">
                                                    <Select.Option key="DIFXUSDT" value="DIFXUSDT">DIFXUSDT</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item label="Epiration date">
                                                <DatePicker.RangePicker />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    :
                                        null
                                }
                                {  
                                    orderType === "marketExecution" && fieldVisible ?
                                    <Form.Item
                                        label='Fill policy'>
                                        <Input 
                                            placeholder="Immediate or Cancel" 
                                            type="text" 
                                        />
                                    </Form.Item>
                                    :
                                        null
                                }
                                {fieldVisible ? 
                                <Form.Item
                                    label='Comment ( Optional )'>
                                    <Input.TextArea 
                                        placeholder="Immediate or Cancel"
                                    />
                                </Form.Item>
                                : null
                                }
                                <Typography.Title level={3}>
                                    39.62/39.83
                                </Typography.Title>
                                <Row gutter={15}>
                                    <Col span={orderType === "marketExecution" ? 12 : 24}>
                                        <Button type="primary" className="success" block>Long</Button>
                                    </Col>
                                    {  
                                        orderType === "marketExecution" ?
                                        <Col span={12}>
                                            <Button type="primary" className="danger" block>Short</Button>
                                        </Col>
                                            :
                                            null
                                    }
                                </Row>
                        </Form>
                    </Col>
                </Row>
            </FutureModalWrapper>
        </>
    );
}

export default FutureModal;
