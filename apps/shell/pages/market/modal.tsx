import { Col, Form, Input, Row, Select } from "antd";
import React from "react";

const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}

export function MarketModal() {
  return (
    <>
        <Form>
            <Row>
                <Col span={16}>
                    <Input placeholder="Basic usage" />
                </Col>
                <Col span={8}>
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
            <Row>
                <Col span={16}>
                    <Input placeholder="Basic usage" />
                </Col>
                <Col span={8}>
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
        </Form>
    </>
  );
}

export default MarketModal;
