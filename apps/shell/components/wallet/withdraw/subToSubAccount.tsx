/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Col, Divider, Form, Input, Radio, RadioChangeEvent, Row, Select, Space, Typography } from "antd";
import { ASSETS_URL } from "@difx/constants"
import { DepositLayout } from "../../../pages/wallet/styled";
import { useState } from "react";
import { OptionGroupStyled } from "../../market/styled";
import Text from "antd/lib/typography/Text";

export function SubToSubAccount() {
  const [form] = Form.useForm()
  const [value, setValue] = useState(1);
  
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const SuffixAmountInput = (
    <div className="suffix-amount">
      <div style={{ opacity: 0.75 }}>BTC</div>
      <div className="line" />
      <Button ghost>MAX</Button>
    </div>
  )
  return (
    <DepositLayout style={{marginTop:0}}>
        <div className="deposit-form-wrapper">
            <div className="deposit-form">
                <Form
                form={form}
                layout="vertical"
                >
                    <Form.Item
                        label="Coin"
                    >
                        <Select className="coinselect">
                            <Select.Option>
                                <OptionGroupStyled>
                                    <div className="coinflag">
                                        <Avatar shape="square" size={26} src={`${ASSETS_URL}difx.png`}/>
                                    </div>
                                    <div className="coinvalue">
                                        BTC <span>Bitcoin</span>
                                    </div>
                                </OptionGroupStyled>
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Select the sub account"
                    >
                        <Select placeholder="Select the sub account" className="coinselect">
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <div className='amount'>
                        <Form.Item
                            label='Amount'>
                            <Input placeholder="Please enter the amount" type="text" onWheel={(e: any) => { e.target.blur() }} suffix={SuffixAmountInput} />
                            <Row align="middle" justify="space-between" style={{marginTop: 4}}>
                                <Col>
                                    <Text type="secondary">Avaible amount</Text> 0.0000 BTC
                                </Col>
                                <Col>
                                    <Text type="secondary">Minimum amount</Text> 0.0000 BTC
                                </Col>
                            </Row>
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="Note ( Optional )"
                    >
                        <Input placeholder="Note for recipient" />
                    </Form.Item>
                </Form>
                <Divider />
                <div>
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">Receive Amount</Text>
                        </Col>
                        <Col>
                            <Text strong>0.0091885 BTC</Text>
                            <div style={{textAlign: "right"}}>
                                <small>≈ $100</small>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Button type="primary" block style={{marginTop:20}}>Confirm</Button>
            </div>
            <div className="divider"></div>
            <div>
                <Typography.Title level={5}>FAQ</Typography.Title>
                <Typography.Paragraph style={{marginBottom:40}}>
                    <Text type="secondary">
                        <ul>
                            <li>
                                Why has my deposits not been credited yet ?
                            </li>
                            <li>
                                How to retrieve crypto deposit with wrong or missing ?
                            </li>
                            <li>
                                Why has my deposits not been credited yet ?
                            </li>
                            <li>
                                How to deposit ?
                            </li>
                            <li>
                                Why has my deposits not been credited yet ?</li>
                        </ul>
                    </Text>
                </Typography.Paragraph>
            </div>
        </div>
    </DepositLayout>
  );
}

export default SubToSubAccount;
