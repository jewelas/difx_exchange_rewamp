import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { EmailVerifyContainer } from "../../pages/register/styled";
import { AxiosError, AxiosResponse } from "axios";
import OtpInput from 'react-otp-input';
import { useCallback, useState } from "react";
import { Button } from "antd"; 
import { useHttpPost, useAuth } from '@difx/shared'
import { API_ENDPOINT } from "@difx/constants";
import { useRouter } from "next/router";

export default function EmailVerify({userEmail, verificationToken}) {
  const [optVlaue,setOptValue] = useState('')
  
  const router = useRouter();
  const { updateSession } = useAuth()

  const handleChange = (otp) => setOptValue(otp);

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
      verification_code: optVlaue
    }
    signUp(resData)
  }

  return (
    <EmailVerifyContainer>
      <div className="verifyBox">
        <Typography level={"H2"}>{t("register.verifyEmailHeader")}</Typography>
        <p>{t("register.verifyEmailMessage")}{userEmail}</p>
        <OtpInput
          value={optVlaue}
          onChange={handleChange}
          numInputs={6}
          containerStyle="otpContainer"
          inputStyle="otpbox"
        />
        <Button
          type="primary"
          onClick={submitOtp}
        >
          {t("register.verifyEmailButton")}
        </Button>
      </div>
    </EmailVerifyContainer>
  )
}
