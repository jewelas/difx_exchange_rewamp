import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { EmailVerifyContainer } from "../../pages/register/styled";
import { AxiosError, AxiosResponse } from "axios";
// import OtpInput from 'react-otp-input';
import { useCallback, useEffect, useState } from "react";
import { Button, notification } from "antd"; 
import { useHttpPost, useAuth } from '@difx/shared'
import { API_ENDPOINT } from "@difx/constants";
import { useRouter } from "next/router";
import { OTPBox, Icon } from "@difx/core-ui"

export default function VerifyOTP({userEmail, verificationToken, userPhoneNumber}) {
  const [otpValue,setOtpValue] = useState('')
  const [timer, setTimer] = useState(30)
  const [resend, setResend] = useState(false)
  const [hasFieldError, setHasFieldError] = useState(true)
  
  const router = useRouter();
  const { updateSession } = useAuth()
  
  useEffect(()=>{
    if(!resend){
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
    }
  },[resend])
  
  useEffect(()=>{
    otpValue.length === 6 ? setHasFieldError(false) : setHasFieldError(true)
  },[otpValue])
  
  const onSignUpSuccess = useCallback((response: AxiosResponse)=>{
    const { user, permission } = response.data.data
    updateSession(user,permission)
    router.push("/home");
  },[])

  const onResendSuccess = useCallback((response: AxiosResponse)=>{
    const { data } = response
    notification.info({
      message: "Resend OTP",
      description: data.message,
    })
    setResend(false)
  },[])
  
  const onError = useCallback((error: AxiosError)=>{
    console.log(error)
  },[])
  
  const {mutate: signUp} = useHttpPost({onSuccess: onSignUpSuccess, onError, endpoint: API_ENDPOINT.SIGNUP})
  const { mutate: resendMail } = useHttpPost({ onSuccess: onResendSuccess, onError, endpoint: API_ENDPOINT.RESEND_SIGNUP_VERIFICATION });
  
  const submitOtp = () => {
    const reqData = {
      token: verificationToken,
      verification_code: otpValue
    }
    signUp(reqData)
  }

  const handleChange = (otp) => setOtpValue(otp);
  
  const pasteCode = async() => {
    const text = await navigator.clipboard.readText();
    setOtpValue(text)
  }

  const resendOTP = () => {
    const reqData = {
      token: verificationToken,
    }
    setTimer(30)
    resendMail(reqData)
  }

  return (
    <EmailVerifyContainer>
      <div className="verifyBox">
        <Typography level={"H2"}>{t("register.verifyHeader")}</Typography>
        <p>{t("register.verifyEmailMessage")}{userEmail ? userEmail : userPhoneNumber}</p>
        <OTPBox value={otpValue} numInputs={6} handleChange={handleChange}/>
        <div className="botton-box">
          <div className="resend-box">
            {`00:${timer.toString().padStart(2,'0')}`}
            <button onClick={resendOTP} disabled={!resend}>{t("forgot.resend")}</button>
          </div>
          <div className="paste-btn" onClick={()=>pasteCode()}>
            {t("forgot.paste")}
            <Icon.PasteIcon fill={`${({theme}) => theme.color.primary}`}/>
          </div>
        </div>
        <Button
          disabled={hasFieldError}
          type="primary"
          onClick={submitOtp}
        >
          {t("register.verifyEmailButton")}
        </Button>
      </div>
    </EmailVerifyContainer>
  )
}
