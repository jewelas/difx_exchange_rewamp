import { useState, useCallback, useEffect } from "react"
import { OTPBox } from "@difx/core-ui"
import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Button } from "antd";
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

  const onSuccess = useCallback((response)=>{
    const {data} = response.data
    setToken(data.token)
    setTab("reset")
  },[])

  const onError = useCallback((error)=>{
    console.log(error)
  },[])

  const { mutate: verify, isLoading } = useHttpPost({ onSuccess, onError, endpoint: API_ENDPOINT.VERIFY_FORGOT });

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

  return (
    <>
      <Typography level="B2">
        {t("forgot.verify_message")}{email? email : phoneNumber}
      </Typography>
      <OTPBox value={otpValue} numInputs={6} handleChange={handleChange}/>
      <Button
        disabled={ isLoading || hasFieldError}
        type="primary"
        onClick={onVerify}
      >
        {t("forgot.verify_btn")}
      </Button>
      <div className="botton-box">
        <div className="resend-box">
          {`00:${timer}`}
          <span className={`${resend? 'active' : null}`}>{t("forgot.resend")}</span>
        </div>
        <div className="paste-btn" onClick={()=>pasteCode()}>
          {t("forgot.paste")}
        </div>
      </div>
    </>
  )
}
