import React, { useEffect, useState } from "react";
import { Button, Col, Form, Popover, Row, Select, Typography } from 'antd';
import { API_ENDPOINT } from "@difx/constants";
import Text from "antd/lib/typography/Text";
import { DepositLayout } from "./DepositForm.style";
import Paragraph from "antd/lib/typography/Paragraph";
import { CoinSelector, Icon } from "@difx/core-ui";
import { useAPI, useTheme } from "@difx/shared";
import { QRCodeSVG } from 'qrcode.react';

const QRBox = ({qrData}) => {
  return (
    <QRCodeSVG
      value={qrData}
      size={180}
      includeMargin={true}
    />
  )
};

export function DepositForm() {
  const [form] = Form.useForm()
  const [selectedCoin, setSelectedCoin] = useState(null)
  const [supportedNetworks, setSupportedNetworks] = useState(null)
  const [selectedNetwork, setSelectedNetwork] = useState(null)
  const [depositAddress, setDepositAddress] = useState(null)
  const [depositTagId, setDepositTagId] = useState(null)
  const [minimumDeposit, setMinimumDeposit] = useState(null)
  const [maximumDeposit, setMaximumDeposit] = useState(null)
  const [depositFee, setDepositFee] = useState(null)
  const [legacyAddress, setLegacyAddress] = useState(null)

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

  const clearFields = () => {
    setDepositAddress(null)
    setDepositTagId(null)
    setLegacyAddress(null)
    setDepositFee(null)
    setMaximumDeposit(null)
    setMinimumDeposit(null)
  }

  useEffect(()=>{
    if(selectedCoin && selectedNetwork){
      const reqData = {
        coin: selectedCoin,
        network: selectedNetwork
      }
      API.post(API_ENDPOINT.GENERATE_DEPOSIT_ADDRESS,reqData).then((response) => {
        // eslint-disable-next-line
        const { data } = response?.data
        if(data){
          const { address, tag, legacyaddress, dfee, dmax, dmin } = data
          setDepositAddress(address)
          setDepositTagId(tag)
          setLegacyAddress(legacyaddress)
          setDepositFee(dfee)
          setMaximumDeposit(dmax)
          setMinimumDeposit(dmin)
        }else{
          clearFields()
        }
      }).catch(error => {
        console.log(error)
      })
    }else{
      clearFields()
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
                    {
                      depositAddress ?
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
                              {/* <Popover content={<QRBox qrData={depositAddress} />}>
                                  <Button type="text" style={{width:"auto"}} icon={<Icon.QRCodeIcon fill={theme.theme === "light" ? "#000000" : "#FFFFFF"} className="input-qr"/>} />
                              </Popover> */}
                            </div>
                      </Form.Item>
                      :
                        null
                    }
                    {
                      depositTagId ? 
                        <Form.Item label="Tag ID">
                                <Paragraph 
                                copyable={{
                                    icon: [<Icon.CopyIcon key="copy-icon" />, <Icon.CheckCircleIcon key="copied-icon" width={15} height={15} />],
                                    tooltips: ['Copy Address', 'Copied'],
                                }}
                                className="ant-form-static-input"
                                >
                                  {depositTagId}
                                </Paragraph>
                        </Form.Item>
                      :
                        null
                    }
                    {
                      legacyAddress ? 
                        <Form.Item label="Tag ID">
                                <Paragraph 
                                copyable={{
                                    icon: [<Icon.CopyIcon key="copy-icon" />, <Icon.CheckCircleIcon key="copied-icon" width={15} height={15} />],
                                    tooltips: ['Copy Address', 'Copied'],
                                }}
                                className="ant-form-static-input"
                                >
                                  {legacyAddress}
                                </Paragraph>
                        </Form.Item>
                      :
                        null
                    }
                </Form>
                {
                  depositAddress ? 
                    <div className="">
                        <Row align="middle" justify="space-between">
                            <Col>
                                <Text type="secondary">Min.Deposit Amount</Text>
                            </Col>
                            <Col>
                                <Text>{minimumDeposit} {selectedCoin}</Text>
                            </Col>
                        </Row>
                        <Row align="middle" justify="space-between">
                            <Col>
                                <Text type="secondary">Max.Deposit Amount</Text>
                            </Col>
                            <Col>
                                <Text>{maximumDeposit} {selectedCoin}</Text>
                            </Col>
                        </Row>
                        <Row align="middle" justify="space-between">
                            <Col>
                                <Text type="secondary">Deposit Fee</Text>
                            </Col>
                            <Col>
                                <Text>{depositFee} {selectedCoin}</Text>
                            </Col>
                        </Row>
                    </div>
                  :
                    null
                }
            </div>
            <div className="divider"></div>
            <div className="">
              {
                depositAddress ? 
                <>
                  <div className="deposity-qr-conatiner">
                  <Typography.Title level={5}>Scan the QR for deposit address</Typography.Title>
                    <QRBox qrData={depositAddress} />
                  </div>
                </>
                :
                 null

              }
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
