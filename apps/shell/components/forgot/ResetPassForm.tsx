import { PasswordField } from "@difx/core-ui";
import t from "@difx/locale";
import {
  ResetPassRequest,
  ResetPassResponse,
  useHttpPost
} from "@difx/shared";
import { Button, Form, Input, notification } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { API_ENDPOINT } from "@difx/constants";

/* eslint-disable-next-line */
export interface ResetPassFormProps {
  email: string;
  phoneNumber: string;
  token: string
}

export function ResetPassForm({ email, token ,phoneNumber }: ResetPassFormProps) {
  const [hasFieldError, setHasFieldError] = useState(true);
  const [isValidPass, setIsValidPass] = useState(false);
  const [form] = Form.useForm(null);

  const router = useRouter();

  const onChangePass = (isValidate: boolean, value: string) => {
    form.setFieldsValue({ password: value });
    setIsValidPass(isValidate);
  };

  const onSuccess = useCallback((response: AxiosResponse) => {
      const { data } = response;

      notification.info({
        message: "Reset Password",
        description: data.message,
      })

      router.push("/login");
  },[]);

  const onFormChange = () => {
    const fieldsError = form.getFieldsError();
    const errors = fieldsError.find((e) => !isEmpty(e.errors));
    if (errors && !isEmpty(errors.errors)) {
      setHasFieldError(true);
    } else {
      setHasFieldError(false);
    }
  };

  const onError = useCallback((error: AxiosError) => {
    console.log(error)
  }, []);

  const { mutate: resetPass, isLoading } = useHttpPost<ResetPassRequest, ResetPassResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.RESET_PASS });

  const onSubmit = async (formData: ResetPassRequest) => {
    email ? formData.email = email : formData.phoneNumber = phoneNumber;
    formData.token = token;

    resetPass(formData);
  };

  return (
    <Form
    form={form}
      onFinish={onSubmit}
      onFieldsChange={onFormChange}
      autoComplete="off"
    >
      <div className="content">
        <Form.Item name="password">
          <PasswordField
            onChange={onChangePass}
            placeholder={t("forgot.enter_new_pass")}
          />
        </Form.Item>
        <Form.Item
          className="email"
          name="repeat_password"
          rules={[
            {
              required: true,
              message: t("error.re_input_pass"),
            },
          ]}
        >
          <Input.Password className="confirm-pass" placeholder={t("forgot.confirm_pass")} />
        </Form.Item>
        <Button
          style={{ marginTop: 10 }}
          disabled={isLoading || hasFieldError || !isValidPass}
          htmlType="submit"
          className="sign-in-btn"
          type="primary"
        >
          {t("common.submit")}
        </Button>
      </div>
    </Form>
  );
}

export default ResetPassForm;
