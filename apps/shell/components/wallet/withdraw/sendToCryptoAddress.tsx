/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Divider, Form, Input, Radio, RadioChangeEvent, Row, Select, Space, Typography } from "antd";
import { API_ENDPOINT, QUERY_KEY } from "@difx/constants"
import { DepositLayout } from "../../../pages/wallet/styled";
import { useEffect, useMemo, useState } from "react";
import Text from "antd/lib/typography/Text";
import { CoinSelector, Loading, showWarning } from "@difx/core-ui";
import { currentUserAtom, useAPI, useBalance, useHttpGet, WithdrawTypes } from "@difx/shared";
import { useAtomValue } from "jotai";
import { useVerificationModal } from "@difx/shared";
import VerificationModal from "./verificationModal";
import t from "@difx/locale";

export function SendToCryptoAddress() {
  const [form] = Form.useForm()
  const [selectedRecentTransaction, setSelectedRecentTransaction] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null)
  const [coinPrice, setCoinPrice] = useState(null)
  const [supportedNetworks, setSupportedNetworks] = useState(null)
  const [selectedNetwork, setSelectedNetwork] = useState(null)
  const [withdrawAddress, setWithdrawAddress] = useState(null)
  const [withdrawAmount, setWithdrawAmount] = useState(null)
  const [minAmount, setMinAmount] = useState(null)
  const [maxAmount, setMaxAmount] = useState(null)
  const [withdrawFee, setWithdrawFee] = useState(null)
  const [withdrawRequestId, setWithdrawRequestId] = useState(null)
  
  const { userBalance } = useBalance()
  const { API } = useAPI()
  const currentUser = useAtomValue(currentUserAtom)
  const { modalVisible, setModalVisible } = useVerificationModal()


  const { data: recentTransaction, isLoading } = useHttpGet<any, any>(QUERY_KEY.RECENT_TRANSACTIONS, API_ENDPOINT.GET_RECENT_TRANSACTIONS,{})
  const { data: coinList} = useHttpGet<null, any>(QUERY_KEY.CURRENCIES, API_ENDPOINT.GET_CURRENCIES, {});
  
  const onChange = (e: RadioChangeEvent) => {
    const transactionInfo = e.target.value
    const coinInfo = coinList.find(item => item.coin === transactionInfo.coin)
    setCoinDetails(coinInfo)
    setWithdrawAddress(transactionInfo.address)
    setSelectedNetwork(JSON.stringify({network:transactionInfo.network,display:transactionInfo.display}))
    setSelectedRecentTransaction(e.target.value)
  };

  const initCoinPrice = async(coin) => {
    try{
        const response = await API.get(API_ENDPOINT.GET_MARKET_COIN_PRICE(coin))
        if(response.status === 200){
            // eslint-disable-next-line
            const { data } = response?.data
            setCoinPrice(data.currentPrice)
        }else{
            setCoinPrice(0)
        }
    }catch(error){
        setCoinPrice(0)
    }
  }

  const handleCoinSelect = (coin: string) => {
    const coinInfo = JSON.parse(coin || "null")
    setCoinDetails(coinInfo)
  }

  const setCoinDetails = (coinInfo) => {
    initCoinPrice(coinInfo.coin)
    setSelectedCoin(coinInfo.coin)
    setSupportedNetworks(coinInfo.networks)
    setMinAmount(coinInfo.wmin)
    setMaxAmount(coinInfo.wmax)
    setWithdrawFee(coinInfo.wfee)
    setSelectedNetwork(JSON.stringify(coinInfo.networks[0]))
  }

  const handleNetworkSelect = (network: string) => {
    setSelectedNetwork(network)
  }

  const availableBalance = useMemo(()=>{
    if(selectedCoin && userBalance){
        const coinBalance = userBalance.find((coin: any) => coin.currency === selectedCoin).amount
        return coinBalance
    }else{
        return 0
    }
  },[userBalance, selectedCoin])

  const receiveAmount = useMemo(()=>{
    if(withdrawAmount){
        return (withdrawAmount - withdrawFee)
    }else{
        return 0
    }
  },[selectedCoin,selectedNetwork,withdrawAmount])

  const receiveAmountInUSD = useMemo(()=>{
    if(receiveAmount){
        return (receiveAmount * coinPrice)
    }else{
        return 0
    }
  },[receiveAmount])

  const isConfirmValid = useMemo(()=>{
      if(selectedCoin && selectedNetwork && withdrawAddress && withdrawAmount > minAmount){
        return true
      }else{
        return false
      }
  },[selectedCoin,withdrawAmount,selectedNetwork,withdrawAddress,minAmount])

  const confirmWithdraw = async() => {
    try{
        if(!currentUser.emailverified){
            showWarning(t("notifications.verify_email"),t("notifications.verify_email_message"))
            return
        }
        if(!currentUser.twofaenabled){
            showWarning(t("notifications.enable_2fa"),t("notifications.enable_2fa_message"))
            return
        }
        const reqData = {
            type: WithdrawTypes.external,
            coin: selectedCoin,
            amount: withdrawAmount,
            address: withdrawAddress,
            network: JSON.parse(selectedNetwork).network
        }
        const response = await API.post(API_ENDPOINT.WITHDRAW_REQUEST, reqData)
        // eslint-disable-next-line
        const { data, statusCode } = response?.data
        if(statusCode === 201){
            setModalVisible(true)
            setWithdrawRequestId(data.request_id)
        }
    }catch(error){
        console.log(error)
    }
  }

  const SuffixAmountInput = (
    <div className="suffix-amount">
      <div style={{ opacity: 0.75 }}>{selectedCoin}</div>
      <div className="line" />
      <Button
       ghost
       onClick={()=>setWithdrawAmount(availableBalance)}
        >
            MAX
        </Button>
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
                        <CoinSelector selectedCoin={selectedCoin} handleChange={handleCoinSelect}/>
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input 
                            placeholder="Enter Withdraw Address" 
                            disabled={!selectedCoin} 
                            value={withdrawAddress} 
                            onChange={(e) => setWithdrawAddress(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Network"
                    >
                        <Select 
                        placeholder="Select Network"
                        className="coinselect"
                        disabled={!supportedNetworks ? true : false}
                        onChange={handleNetworkSelect}
                        value={selectedNetwork}
                      >
                          {
                            !supportedNetworks ? 
                              "Loading..."
                            :
                              supportedNetworks.map((network,index) => {
                                return <Select.Option key={index} value={selectedNetwork}>{network.display} </Select.Option>
                              })
                          }
                      </Select>
                    </Form.Item>
                    <div className='amount'>
                        <Form.Item
                            label='Amount'>
                            <Input 
                                placeholder="Please enter the amount" 
                                type="number" 
                                value={withdrawAmount}
                                onWheel={(e: any) => { e.target.blur() }} 
                                suffix={SuffixAmountInput}
                                onChange={(e)=>setWithdrawAmount(e.target.value)} 
                            />
                            <Row align="middle" justify="space-between" style={{marginTop: 4}}>
                                <Col>
                                    <Text type="secondary">Avaible amount</Text> {availableBalance} {selectedCoin}
                                </Col>
                                <Col>
                                    <Text type="secondary">Minimum amount</Text> {minAmount} {selectedCoin}
                                </Col>
                                <Col>
                                    <Text type="secondary">Maximum amount</Text> {maxAmount} {selectedCoin}
                                </Col>
                            </Row>
                        </Form.Item>
                    </div>
                </Form>
                {
                    selectedCoin && withdrawAmount && selectedNetwork && withdrawAddress ? 
                        <>
                            <Divider />
                            <div className="">
                                <Row align="middle" justify="space-between">
                                    <Col>
                                        <Text type="secondary">Fee</Text>
                                    </Col>
                                    <Col>
                                        <Text>{withdrawFee} {selectedCoin}</Text>
                                    </Col>
                                </Row>
                                <Row justify="space-between">
                                    <Col>
                                        <Text type="secondary">Receive Amount</Text>
                                    </Col>
                                    <Col style={{textAlign: "right"}}>
                                        <Text strong>{receiveAmount} {selectedCoin}</Text>
                                        <div style={{textAlign: "right"}}>
                                            <small>≈ ${receiveAmountInUSD}</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Button 
                                type="primary" 
                                block 
                                style={{marginTop:20}}
                                onClick={confirmWithdraw}
                                disabled={!isConfirmValid}
                            >
                                Confirm
                            </Button>
                        </>
                    :
                        null
                }
                
            </div>
            <div className="divider"></div>
            <div>
                {
                    recentTransaction && recentTransaction.length > 0 ? 
                        <>
                            <div>
                                <Typography.Title level={5}>Select recent address</Typography.Title>
                                <div className="radio-group">
                                    <Radio.Group onChange={onChange} value={selectedRecentTransaction}>
                                        <Space direction="vertical">
                                            {
                                                // eslint-disable-next-line
                                                // @ts-ignore
                                                recentTransaction.map((item, index) => {
                                                    return <Radio key={index} value={item}>{item.address}</Radio>
                                                })
                                            }
                                        </Space>
                                    </Radio.Group>
                                </div>
                            </div>
                            <Divider />
                        </>
                    :
                        null
                }
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
        </div>
        <VerificationModal userEmail={currentUser ? currentUser.email : null} requestId={withdrawRequestId}/>
    </DepositLayout>
  );
}

export default SendToCryptoAddress;
