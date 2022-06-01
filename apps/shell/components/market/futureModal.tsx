import { FutureModalWrapper } from "./styled";
import React from "react";
import { Button, Checkbox, Col, DatePicker, Form, Input, Radio, Row, Select, Typography } from "antd";

export function FutureModal() {

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
                                        placeholder="Select Network" className="coinselect">
                                        <Select.Option key="DIFXUSDT" value="DIFXUSDT">DIFXUSDT</Select.Option>
                                        <Select.Option key="DIFXUSDT" value="DIFXUSDT">DIFXUSDT</Select.Option>
                                    </Select>
                                </Form.Item>
                                <div className="radio-group">
                                    <Form.Item label="Side">
                                        <Radio.Group>
                                            <Radio key="buy" value="buy">Buy Limit</Radio>
                                            <Radio key="sell" value="sell">Sell Limit</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </div>
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
                                <div style={{ marginBottom: '20px' }}>
                                    <Checkbox>
                                            TP/SL
                                    </Checkbox>
                                </div>
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
                                <Form.Item
                                    label='Fill policy'>
                                    <Input 
                                        placeholder="Immediate or Cancel" 
                                        type="text" 
                                    />
                                </Form.Item>
                                <Form.Item
                                    label='Comment ( Optional )'>
                                    <Input.TextArea 
                                        placeholder="Immediate or Cancel"
                                    />
                                </Form.Item>
                                <Typography.Title level={3}>
                                    39.62/39.83
                                </Typography.Title>
                                <Row gutter={15}>
                                    <Col span={12}>
                                        <Button type="primary" className="success" block>Long</Button>
                                    </Col>
                                    <Col span={12}>
                                        <Button type="primary" className="danger" block>Short</Button>
                                    </Col>
                                </Row>
                        </Form>
                    </Col>
                </Row>
            </FutureModalWrapper>
        </>
    );
}

export default FutureModal;
