import t from "@difx/locale";
import {
  VerifyIpRequest,
  VerifyIpResponse,
  useHttpPost
} from "@difx/shared";
import { OTPBox, Icon, showSuccess } from "@difx/core-ui";
import { Button, Form, notification } from "antd";
import { FormInstance } from "antd/es/form";
import { AxiosError, AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, useCallback } from "react";
import { API_ENDPOINT } from "@difx/shared";

export function VerifyIpForm({ userEmail }) {
  const [hasFieldError, setHasFieldError] = useState(true);
  const formRef = useRef<FormInstance>(null);
  const [otpValue, setOtpValue] = useState('')
  const [timer, setTimer] = useState(30)
  const [resend, setResend] = useState(false)

  const router = useRouter();

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

  const isRequiredFieldsEmpty = (): boolean => {
    let result = false;
    const values: FormData = formRef.current?.getFieldsValue();
    /* eslint-disable-next-line */
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        result = true;
        break;
      }
    }
    return result;
  };

  const onFormChange = () => {
    if (isRequiredFieldsEmpty()) {
      setHasFieldError(true);
    } else {
      const fieldsError = formRef.current?.getFieldsError();
      const errors = fieldsError.find((e) => !isEmpty(e.errors));
      if (errors && !isEmpty(errors.errors)) {
        setHasFieldError(true);
      } else {
        setHasFieldError(false);
      }
    }
  };

  const onSuccess = (response: AxiosResponse<VerifyIpResponse>) => {
    const { data } = response;

    if (data.statusText === "SUCCESS"){
      showSuccess(t("2fa.2fa"), t("2fa.verify_success"));
      localStorage.removeItem("extraAuthRequired")
      router.push("/login");
    }
  };

  const onResendSuccess = useCallback((response)=>{
    const { data } = response
    notification.info({
      message: "Resend Email",
      description: data.message,
    })
  },[])

  const onError = (error: AxiosError) => {
    formRef.current?.setFieldsValue({ code: null });
  };

  const { mutate: verifyIP, isLoading } = useHttpPost<VerifyIpRequest, VerifyIpResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.VERIFY_IP });
  const { mutate: resendMail, isLoading: isResendLoading } = useHttpPost({ onSuccess: onResendSuccess, onError, endpoint: API_ENDPOINT.RESEND_IP_VERIFICATION_MAIL });

  const onSubmit = async (formData: VerifyIpRequest) => {
    formData.email = userEmail;
    formData.code = otpValue;
    verifyIP(formData);
  };

  const handleChange = (otp) => {
    setOtpValue(otp)
    otp.length === 6 ? setHasFieldError(false) : setHasFieldError(true)
  }

  const resendOTP = () => {
    const reqData: any = {
      email:userEmail
    }
    resendMail(reqData)
  }

  const pasteCode = async() => {
    const text = await navigator.clipboard.readText();
    setOtpValue(text)
  }

  return (
    <Form
      ref={formRef}
      onFinish={onSubmit}
      onFieldsChange={onFormChange}
      autoComplete="off"
    >
      <div className="content">
        <OTPBox value={otpValue} numInputs={6} handleChange={handleChange}/>
        <div className="botton-box">
          <div className="resend-box">
            {`00:${timer.toString().padStart(2,'0')}`}
            <span onClick={resendOTP} className={`${resend? 'active' : null}`}>{t("forgot.resend")}</span>
          </div>
          <div className="paste-btn" onClick={()=>pasteCode()}>
            {t("forgot.paste")}
            <Icon.PasteIcon fill={`${({theme}) => theme.color.primary}`}/>
          </div>
        </div>
        <Button
          htmlType="submit"
          disabled={isLoading || hasFieldError}
          className="sign-in-btn"
          type="primary"
        >
          {t("common.verify")}
        </Button>
      </div>
    </Form>
  );
}

export default VerifyIpForm;
