import t from "@difx/locale";
import {
  TwoFactorRequest,
  TwoFactorResponse,
  UpdateTokenRequest,
  UpdateTokenResponse,
  useTwoFactor,
  useUpdateToken,
  currentUserAtom,
} from "@difx/shared";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/es/form";
import { useUpdateAtom } from "jotai/utils";
import { REFRESH_TOKEN } from "./../../constants";
import { AxiosError, AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
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
      const request: UpdateTokenRequest = { token: currentUser.token };
      updateToken(request);
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

  const { mutate: twoFactor, isLoading } = useTwoFactor({ onSuccess, onError });

  const { mutate: updateToken } = useUpdateToken({
    onSuccess: (response: AxiosResponse<UpdateTokenResponse>) => {
      setTimeout(() => {
        updateToken({ token: response.data.token });
      }, REFRESH_TOKEN.EXPIRY_TIME);
    },
  });

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
