import t from "@difx/locale";
import {
  VerifyIpRequest,
  VerifyIpResponse,
  useHttpPost
} from "@difx/shared";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/es/form";
import { AxiosError, AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { API_ENDPOINT } from "@difx/shared";
import { showNotification } from "./../../utils/pageUtils";

export function VerifyIpForm({ userEmail }) {
  const [hasFieldError, setHasFieldError] = useState(true);
  const formRef = useRef<FormInstance>(null);

  const router = useRouter();

  const onSuccess = (response: AxiosResponse<VerifyIpResponse>) => {
    const { data } = response;

    if (data.statusText === "SUCCESS"){
      showNotification("success", t("2fa.2fa"), t("2fa.verify_success"));
      localStorage.removeItem("extraAuthRequired")
      router.push("/login");
    }
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

  const { mutate: verifyIP, isLoading } = useHttpPost<VerifyIpRequest, VerifyIpResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.VERIFY_IP });

  const onSubmit = async (formData: VerifyIpRequest) => {
    formData.email = userEmail;
    verifyIP(formData);
  };

  return (
    <Form
      ref={formRef}
      onFinish={onSubmit}
      onFieldsChange={onFormChange}
      autoComplete="off"
    >
      <div className="content">
        <Form.Item
          className="email"
          name="code"
          rules={[
            {
              required: true,
              message: t("error.input_email_otp"),
            },
          ]}
        >
          <Input type="number" placeholder={t("verify_ip.enter_code")} />
        </Form.Item>
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
