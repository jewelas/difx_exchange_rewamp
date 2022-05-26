import React, { useEffect } from "react";
import { Avatar, Button, Col, Form, Input, Layout, Popover, Row, Select, Tooltip, Typography } from 'antd';
import WalletLayout from "../index.page";
import WalletStepper from "../../../components/wallet/stepper";
import { OptionGroupStyled } from "../../market/styled";
import { ASSETS_URL } from "@difx/constants";
import Text from "antd/lib/typography/Text";
import { DepositLayout } from "./styled";
import Paragraph from "antd/lib/typography/Paragraph";
import { Icon } from "@difx/core-ui";
import { useTheme } from "@difx/shared";


const QRBox = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
);

export function DepositPage() {
  const [form] = Form.useForm()

  const theme =  useTheme()
  

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <WalletStepper />
            <DepositLayout>
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
                                label="Network"
                            >
                                <Select placeholder="Select Network" className="coinselect">
                                    <Select.Option value="demo">Demo</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Address">
                                <div className="qr-wrapper">
                                    <Paragraph 
                                    copyable={{
                                        icon: [<Icon.CopyIcon key="copy-icon" />, <Icon.CheckCircleIcon key="copied-icon" width={15} height={15} />],
                                        tooltips: ['Copy Address', 'Copied'],
                                    }}
                                    className="ant-form-static-input">
                                        0x312ebdc921cccb33d9f202e8bb7b 8d5721de151f
                                        
                                    </Paragraph>
                                    <Popover content={QRBox} title="Title">
                                        <Button type="text" style={{width:"auto"}} icon={<Icon.QRCodeIcon fill={theme.theme === "light" ? "#000000" : "#FFFFFF"} className="input-qr"/>} />
                                    </Popover>
                                 </div>
                            </Form.Item>
                            <Form.Item label="Tag ID">
                                    <Paragraph 
                                    copyable={{
                                        icon: [<Icon.CopyIcon key="copy-icon" />, <Icon.CheckCircleIcon key="copied-icon" width={15} height={15} />],
                                        tooltips: ['Copy Address', 'Copied'],
                                    }}
                                    className="ant-form-static-input">
                                        0x312ebdc921cccb33d9f202e8bb7b 8d5721de151f
                                        
                                    </Paragraph>
                            </Form.Item>
                        </Form>
                        <div className="">
                            <Row align="middle" justify="space-between">
                                <Col>
                                    <Text type="secondary">Min.Deposit Amount</Text>
                                </Col>
                                <Col>
                                    <Text>0.02 BTC</Text>
                                </Col>
                            </Row>
                            <Row align="middle" justify="space-between">
                                <Col>
                                    <Text type="secondary">Expected Arrival</Text>
                                </Col>
                                <Col>
                                    <Text>12 Network Confirmation</Text>
                                </Col>
                            </Row>
                            <Row align="middle" justify="space-between">
                                <Col>
                                    <Text type="secondary">Min.Deposit Amount</Text>
                                </Col>
                                <Col>
                                    <Text>12 Network Confirmation</Text>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="">
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
                    <Typography.Title level={5}>Please note</Typography.Title>
                    <Typography.Paragraph>
                        <Text type="secondary">
                            Coins will be deposited immediately after minimum 2-12 network
                            confirmations depending on respective blockchain network. After
                            making a deposit, you can track its progress on the history page.
                        </Text>
                    </Typography.Paragraph>
                    </div>
                </div>
            </DepositLayout>
        </Layout>
    </WalletLayout>
  );
}

export default DepositPage;
