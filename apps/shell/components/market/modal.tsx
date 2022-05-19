import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { MarketPopup } from "../../pages/market/styled";
import React from "react";

const { Option } = Select;
const { Text } = Typography;
function handleChange(value) {
    console.log(`selected ${value}`);
}

export function MarketModal() {
  return (
    <>
        <MarketPopup>
            <Form>
                <Row gutter={16}>
                    <Col span={16}>
                    <div className="quality">
                        <label>From</label>
                        <Form.Item name='amount'>
                            <Input placeholder="Enter Quantity" type="number"  />
                        </Form.Item>
                    </div>
                    </Col>
                    <Col span={8}>
                        <label className="graylabel">Available balance: 0.00 USD</label>
                        <Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={16}>
                    <div className="quality">
                        <label>To</label>
                        <Form.Item name='amount'>
                            <Input placeholder="Enter Quantity" type="number"  />
                        </Form.Item>
                    </div>
                    </Col>
                    <Col span={8}>
                        <label className="graylabel">Available balance: 0.00 BTC</label>
                        <Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                </Row>
                <div style={{textAlign:"center"}}>Average price: <span style={{fontWeight:"700"}}>1 USD ~ 0.00002617 BTC</span></div>
                <Button type="primary" className="success" block style={{marginTop:25}}>Buy</Button>
                <Button type="primary" className="dangerOutline" block style={{marginTop:15}}>Switch to Sell</Button>
            </Form>
        </MarketPopup>
    </>
  );
}

export default MarketModal;
