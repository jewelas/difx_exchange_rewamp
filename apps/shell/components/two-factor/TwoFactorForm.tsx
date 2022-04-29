import t from "@difx/locale";
import {
  currentUserAtom, TwoFactorRequest,
  TwoFactorResponse, useAuth, useHttpPost
} from "@difx/shared";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/es/form";
import { AxiosError, AxiosResponse } from "axios";
import { useUpdateAtom } from "jotai/utils";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { API_ENDPOINT } from "@difx/shared";
import { showNotification } from "./../../utils/pageUtils";

export function TwoFactorForm() {
  const [hasFieldError, setHasFieldError] = useState(true);
  const formRef = useRef<FormInstance>(null);

  const setCurrentUser = useUpdateAtom(currentUserAtom);

  const router = useRouter();

  const onSuccess = (response: AxiosResponse<TwoFactorResponse>) => {
    const { data } = response;

    localStorage.removeItem("twoFaToken");
    localStorage.removeItem("loginFormData");

    localStorage.setItem("currentUser", JSON.stringify(data));
    setCurrentUser(data);

    showNotification("success", t("2fa.2fa"), t("2fa.verify_success"));

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.token) {
      updateSessionToken(currentUser.token);
    }

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
    const { response } = error;
    const { statusText } = response.data;
    showNotification("error", t("2fa.2fa"), statusText);
  };

  const { mutate: twoFactor, isLoading } = useHttpPost<TwoFactorRequest, TwoFactorResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.TWO_FACTOR });

  const {updateSessionToken} = useAuth();

  const onSubmit = async (formData: TwoFactorRequest) => {
    const twoFaToken = localStorage.getItem("twoFaToken");
    if (twoFaToken) {
      formData.sessionId = twoFaToken;
    }
    formData.rememberMe = true;
    twoFactor(formData);
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
              message: t("error.input_2factor_code"),
            },
          ]}
        >
          <Input placeholder={t("2fa.enter_code")} />
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

export default TwoFactorForm;
