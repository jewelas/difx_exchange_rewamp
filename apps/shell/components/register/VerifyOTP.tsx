import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { EmailVerifyContainer } from "../../pages/register/styled";
import { AxiosError, AxiosResponse } from "axios";
// import OtpInput from 'react-otp-input';
import { useCallback, useEffect, useState } from "react";
import { Button } from "antd"; 
import { useHttpPost, useAuth } from '@difx/shared'
import { API_ENDPOINT } from "@difx/constants";
import { useRouter } from "next/router";
import { OTPBox } from "@difx/core-ui"

export default function VerifyOTP({userEmail, verificationToken, userPhoneNumber}) {
  const [otpValue,setOtpValue] = useState('')
  const [timer, setTimer] = useState(30)
  const [resend, setResend] = useState(false)
  const [hasFieldError, setHasFieldError] = useState(true)
  
  const router = useRouter();
  const { updateSession } = useAuth()
  
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
  
  const onSuccess = useCallback((response: AxiosResponse)=>{
    const { user, permission } = response.data.data
    updateSession(user,permission)
    router.push("/home");
  },[])
  
  const onError = useCallback((error: AxiosError)=>{
    console.log(error)
  },[])
  
  const {mutate: signUp} = useHttpPost({onSuccess, onError, endpoint: API_ENDPOINT.SIGNUP})
  
  const submitOtp = () => {
    const resData = {
      token: verificationToken,
      verification_code: otpValue
    }
    signUp(resData)
  }

  const handleChange = (otp) => setOtpValue(otp);
  
  const pasteCode = async() => {
    const text = await navigator.clipboard.readText();
    setOtpValue(text)
  }

  return (
    <EmailVerifyContainer>
      <div className="verifyBox">
        <Typography level={"H2"}>{t("register.verifyHeader")}</Typography>
        <p>{t("register.verifyEmailMessage")}{userEmail ? userEmail : userPhoneNumber}</p>
        <OTPBox value={otpValue} numInputs={6} handleChange={handleChange}/>
        <Button
          type="primary"
          onClick={submitOtp}
        >
          {t("register.verifyEmailButton")}
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
      </div>
    </EmailVerifyContainer>
  )
}