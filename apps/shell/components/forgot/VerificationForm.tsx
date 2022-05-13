import { useState, useCallback, useEffect } from "react"
import { OTPBox } from "@difx/core-ui"
import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Button, notification } from "antd";
import {
  useHttpPost
} from "@difx/shared"
import {
  API_ENDPOINT
} from "@difx/constants"

export interface VerificationFormInterface {
  setTab: any,
  email: string | null,
  phoneNumber: string | null,
  setToken: any,
}

export default function VerificationForm({setTab, email, phoneNumber, setToken}:VerificationFormInterface) {
  const [otpValue, setOtpValue] = useState('')
  const [hasFieldError, setHasFieldError] = useState(true)
  const [timer, setTimer] = useState(30)
  const [resend, setResend] = useState(false)


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
    otpValue.length === 6 ? setHasFieldError(false) : setHasFieldError(true)
  },[otpValue])

  
  const handleChange = (otp) => {
    setOtpValue(otp)
  }

  const onVerifySuccess = useCallback((response)=>{
    const {data} = response.data
    setToken(data.token)
    setTab("reset")
  },[])

  const onResendSuccess = useCallback((response)=>{
    const { data } = response
    notification.info({
      message: "Resend Email",
      description: data.message,
    })
  },[])

  const onError = useCallback((error)=>{
    console.log(error)
  },[])

  const { mutate: verify, isLoading: isVerifyLoading } = useHttpPost({ onSuccess: onVerifySuccess, onError, endpoint: API_ENDPOINT.VERIFY_FORGOT });
  const { mutate: resendMail, isLoading: isResendLoading } = useHttpPost({ onSuccess: onResendSuccess, onError, endpoint: API_ENDPOINT.RESEND_FORGOT_OTP });

  const pasteCode = async() => {
    const text = await navigator.clipboard.readText();
    setOtpValue(text)
  }

  const onVerify = () => {
    const reqData: any = {}
    reqData.code = otpValue
    email ? reqData.email = email : reqData.phoneNumber = phoneNumber
    verify(reqData)
  }

  const resendOTP = () => {
    const reqData: any = {}
    email ? reqData.email = email : reqData.phoneNumber = phoneNumber
    resendMail(reqData)
  }

  return (
    <>
      <Typography level="B2">
        {t("forgot.verify_message")}{email? email : phoneNumber}
      </Typography>
      <OTPBox value={otpValue} numInputs={6} handleChange={handleChange}/>
      <Button
        disabled={ isVerifyLoading || hasFieldError}
        type="primary"
        onClick={onVerify}
      >
        {t("forgot.verify_btn")}
      </Button>
      <div className="botton-box">
        <div className="resend-box">
          {`00:${timer.toString().padStart(2,'0')}`}
          <span onClick={resendOTP} className={`${resend? 'active' : null}`}>{t("forgot.resend")}</span>
        </div>
        <div className="paste-btn" onClick={()=>pasteCode()}>
          {t("forgot.paste")}
        </div>
      </div>
    </>
  )
}
