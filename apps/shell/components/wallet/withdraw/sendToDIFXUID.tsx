/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Col, Divider, Form, Input, Radio, RadioChangeEvent, Row, Select, Space, Typography } from "antd";
import { API_ENDPOINT, ASSETS_URL } from "@difx/constants"
import { DepositLayout } from "../../../pages/wallet/styled";
import { useMemo, useState } from "react";
import { OptionGroupStyled } from "../../market/styled";
import Text from "antd/lib/typography/Text";
import { CoinSelector, showWarning } from "@difx/core-ui";
import { currentUserAtom, useAPI, useBalance, useVerificationModal, WithdrawTypes } from "@difx/shared";
import { useAtomValue } from "jotai";
import t from "@difx/locale";
import VerificationModal from "./verificationModal";

export function SendToDIFXUID() {
    const [form] = Form.useForm()
    const [value, setValue] = useState(1);
    const [selectedCoin, setSelectedCoin] = useState(null)
    const [coinPrice, setCoinPrice] = useState(null)
    const [difxID, setDifxID] = useState(null)
    const [withdrawAmount, setWithdrawAmount] = useState(null)
    const [minAmount, setMinAmount] = useState(null)
    const [withdrawFee, setWithdrawFee] = useState(null)
    const [note, setNote] = useState(null)
    const [withdrawRequestId, setWithdrawRequestId] = useState(null)
    const { modalVisible, setModalVisible } = useVerificationModal()
  
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const { userBalance } = useBalance()
  const { API } = useAPI()
  const currentUser = useAtomValue(currentUserAtom)

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
    initCoinPrice(coinInfo.coin)
    setSelectedCoin(coinInfo.coin)
    setMinAmount(coinInfo.wmin)
    setWithdrawFee(coinInfo.wfee)
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
  },[selectedCoin,withdrawAmount])

  const receiveAmountInUSD = useMemo(()=>{
    if(receiveAmount){
        return (receiveAmount * coinPrice)
    }else{
        return 0
    }
  },[receiveAmount])

  const isConfirmValid = useMemo(()=>{
    if(selectedCoin && withdrawAmount > minAmount){
      return true
    }else{
      return false
    }
  },[selectedCoin,withdrawAmount,minAmount])

  const SuffixAmountInput = (
    <div className="suffix-amount">
      <div style={{ opacity: 0.75 }}>BTC</div>
      <div className="line" />
      <Button
       ghost
       onClick={()=>setWithdrawAmount(availableBalance)}
        >
            MAX
        </Button>
    </div>
  )

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
            type: WithdrawTypes.sub_account,
            coin: selectedCoin,
            amount: withdrawAmount,
            uuid: difxID,
        }
        console.log(reqData)
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
                    <Form.Item label="DIFX UID">
                        <Input placeholder="Enter DIFX UID" value={difxID} onChange={(e)=>setDifxID(e.target.value)}/>
                    </Form.Item>
                    <div className='amount'>
                        <Form.Item
                            label='Amount'>
                            <Input 
                                placeholder="Please enter the amount" 
                                type="text" 
                                onWheel={(e: any) => { e.target.blur() }} 
                                value={withdrawAmount}
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
                            </Row>
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="Note ( Optional )"
                    >
                        <Input 
                            placeholder="Note for recipient" 
                            value={note}
                            onChange={(e)=>setNote(e.target.value)}
                        />
                    </Form.Item>
                </Form>
                {
                    selectedCoin && difxID && withdrawAmount ? 
                        <>
                            <Divider />
                            <div>
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
        <VerificationModal userEmail={currentUser ? currentUser.email : null} requestId={withdrawRequestId}/>
    </DepositLayout>
  );
}

export default SendToDIFXUID;
