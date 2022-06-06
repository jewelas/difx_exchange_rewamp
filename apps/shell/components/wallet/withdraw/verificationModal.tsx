import { Icon, OTPBox } from "@difx/core-ui";
import t from "@difx/locale";
import { useAPI, useVerificationModal } from "@difx/shared";
import { Button, Form, Modal, Typography } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React, { useEffect, useState } from "react";
import { WithdrawModalWrapper } from "../styled";
import { API_ENDPOINT } from "@difx/constants"


export function VerificationModal({userEmail, requestId}) {
  const { modalVisible, setModalVisible } = useVerificationModal();
  const [hasFieldError, setHasFieldError] = useState(true);
  const [verificationCode, setVerificationCode] = useState('')
  const [twofa, setTwofa] = useState('')
  const [timer, setTimer] = useState(55)
  const [resend, setResend] = useState(false)

  const { API } = useAPI()

  const closeModal = () => {
      setModalVisible(false);
    };

  const handleVerificationCode = (otp) => {
      setVerificationCode(otp)
  }

  const handleTwofa = (otp) => {
    setTwofa(otp)
  }

  const resendVerificationCode = () => {
    const reqData: any = {
      email:userEmail
    }
    // resendMail(reqData)
  }
  
  const pasteVerificationCode = async() => {
    const text = await navigator.clipboard.readText();
    setVerificationCode(text)
  }

  const pasteTwofa = async() => {
    const text = await navigator.clipboard.readText();
    setTwofa(text)
  }

  const onSubmit = async() => {
    try{
      const reqData = {
        request_id: requestId,
        verification_code: verificationCode,
        twofa_code: 125545
      }
      console.log(reqData)
      const response = await API.put(API_ENDPOINT.CONFIRM_WITHDRAW,reqData)
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    const countdown = setInterval(()=>{
      setTimer((prevState)=>{
        if(prevState > 0) return prevState-1
        setResend(true)
        clearInterval(countdown)
        return prevState
      })
    },1000)
    return () => {
      clearInterval(countdown)
    }
  },[])

  useEffect(()=>{
    if(verificationCode.length === 6 && twofa.length === 6){
      setHasFieldError(false)
    }else{
      setHasFieldError(true)
    }
  },[verificationCode, twofa])

  return (
        <Modal title="" footer={null} visible={modalVisible} onCancel={closeModal} closable={false} maskClosable={false}>
            <WithdrawModalWrapper>
                <div>
                    <Typography.Title level={5}>{t("wallet.verification_code")}</Typography.Title>
                    <Paragraph type="secondary">Please enter the verification code sent to {userEmail}</Paragraph>
                </div>
                <div className="withdraw-code">
                <Form
                  onFinish={onSubmit}
                  autoComplete="off"
                >
                  <div className="content">
                      <OTPBox value={verificationCode} numInputs={6} handleChange={handleVerificationCode}/>
                      <div className="botton-box">
                      <div className="resend-box">
                          {`00:${timer.toString().padStart(2,'0')}`}
                          <span onClick={resendVerificationCode} className={`${resend? 'active' : null}`}> {t("forgot.resend")}</span>
                      </div> 
                      <div className="paste-btn" onClick={()=>pasteVerificationCode()}>
                          {t("forgot.paste")}
                          <Icon.PasteIcon fill={`${({theme}) => theme.color.primary}`}/>
                      </div>
                      </div>
                  </div>
                  <div style={{marginTop:40}}>
                      <Paragraph type="secondary">Please enter the 2FA code</Paragraph>
                  </div>
                  <div className="content">
                      <OTPBox value={twofa} numInputs={6} handleChange={handleTwofa}/>
                      <div className="botton-box">
                      <div className="resend-box">
                          {/* {`00:${timer.toString().padStart(2,'0')}`}
                          <span onClick={resendOTP} className={`${resend? 'active' : null}`}> {t("forgot.resend")}</span> */}
                      </div> 
                      <div className="paste-btn" onClick={()=>pasteTwofa()}>
                          {t("forgot.paste")}
                          <Icon.PasteIcon fill={`${({theme}) => theme.color.primary}`}/>
                      </div>
                      </div>
                      <Button
                      htmlType="submit"
                      disabled={hasFieldError}
                      className="sign-in-btn"
                      type="primary"
                      >
                      {t("common.confirm")}
                      </Button>
                  </div>
                </Form>
                </div>
            </WithdrawModalWrapper>
        </Modal>
  );
}

export default VerificationModal;
