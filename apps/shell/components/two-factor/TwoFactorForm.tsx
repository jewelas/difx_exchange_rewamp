import t from "@difx/locale";
import {
  TwoFactorRequest,
  TwoFactorResponse,
  useAuth,
  useHttpPost
} from "@difx/shared";
import { OTPBox } from "@difx/core-ui";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/es/form";
import { AxiosError, AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { API_ENDPOINT } from "@difx/shared";

export function TwoFactorForm({sessionId}) {
  const [hasFieldError, setHasFieldError] = useState(true);
  const formRef = useRef<FormInstance>(null);
  const [otpValue, setOtpValue] = useState('')

  const { updateSession } = useAuth();

  const router = useRouter();

  const onSuccess = (response: AxiosResponse<TwoFactorResponse>) => {
    const { data } = response.data;
    const { permission, user } = data
    updateSession(user, permission)
    localStorage.removeItem("extraAuthRequired")
    router.push("/home");
  };

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

  const onError = (error: AxiosError) => {
    formRef.current?.setFieldsValue({ code: null });
  };

  const { mutate: twoFactor, isLoading } = useHttpPost<TwoFactorRequest, TwoFactorResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.TWO_FACTOR });

  const onSubmit = async (formData: TwoFactorRequest) => {
    formData.code = otpValue
    formData.session_id = sessionId
    twoFactor(formData);
  };

  const handleChange = (otp) => {
    setOtpValue(otp)
    otp.length === 6 ? setHasFieldError(false) : setHasFieldError(true)
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

export default TwoFactorForm;
