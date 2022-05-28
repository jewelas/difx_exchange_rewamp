import React, { useEffect, useMemo, useState } from "react";
import { Avatar, Button, Col, Form, Input, Layout, Popover, Row, Select, Typography } from 'antd';
import { OptionGroupStyled } from "../../market/styled";
import { API_ENDPOINT, ASSETS_URL, QUERY_KEY } from "@difx/constants";
import Text from "antd/lib/typography/Text";
import { DepositLayout } from "./DepositForm.style";
import Paragraph from "antd/lib/typography/Paragraph";
import { CoinSelector, Icon } from "@difx/core-ui";
import { useAPI, useHttpGet, useTheme } from "@difx/shared";

const QRBox = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
);

export function DepositForm() {
  const [form] = Form.useForm()
  const [selectedCoin, setSelectedCoin] = useState(null)
  const [supportedNetworks, setSupportedNetworks] = useState(null)
  const [selectedNetwork, setSelectedNetwork] = useState(null)
  // const [depositAddress, setDepositAddress] = useState(null)
  // const [depositTagId, setDepositTagId] = useState(null)

  const theme =  useTheme()
  const { API } = useAPI()

  const handleCoinSelect = (coin: string) => {
    const coinInfo = JSON.parse(coin || "null")
    setSelectedCoin(coinInfo.coin)
    setSupportedNetworks(coinInfo.networks)
  }

  const handleNetworkSelect = (network: string) => {
    setSelectedNetwork(network)
  }

  const depositAddress = useMemo(()=>{
    if(selectedCoin && selectedNetwork){
      const reqData = {
        coin: selectedCoin,
        network: selectedNetwork
      }
      const response = API.post(API_ENDPOINT.GENERATE_DEPOSIT_ADDRESS,reqData)
      console.log(response)
    }else{
      return null
    }
  },[selectedNetwork,selectedCoin])

  return (
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
                      <CoinSelector selectedCoin={selectedCoin} handleChange={handleCoinSelect}/>
                    </Form.Item>
                    <Form.Item
                        label="Network"
                    >
                      <Select 
                        placeholder="Select Network"
                        className="coinselect"
                        disabled={!supportedNetworks ? true : false}
                        onChange={handleNetworkSelect}
                      >
                          {
                            !supportedNetworks ? 
                              "Loading..."
                            :
                              supportedNetworks.map((network,index) => {
                                return <Select.Option key={index} value={network}>{network} </Select.Option>
                              })
                          }
                      </Select>
                    </Form.Item>
                    <Form.Item label="Address">
                        <div className="qr-wrapper">
                            <Paragraph 
                            copyable={{
                                icon: [<Icon.CopyIcon key="copy-icon" />, <Icon.CheckCircleIcon key="copied-icon" width={15} height={15} />],
                                tooltips: ['Copy Address', 'Copied'],
                            }}
                            className="ant-form-static-input"
                            >
                                {depositAddress}
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
                            className="ant-form-static-input"
                            >
                              {}
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
  );
}

export default DepositForm;
