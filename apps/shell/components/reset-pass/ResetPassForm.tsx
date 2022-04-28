import { PasswordField } from "@difx/core-ui";
import t from "@difx/locale";
import {
  ResetPassRequest,
  ResetPassResponse,
  useHttpPost
} from "@difx/shared";
import { Button, Form, Input } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { showNotification } from "../../utils/pageUtils";
import { API_ENDPOINT } from "@difx/shared";

/* eslint-disable-next-line */
export interface ResetPassFormProps {
  email: string;
  code: string;
}

export function ResetPassForm({ email, code }: ResetPassFormProps) {
  const [hasFieldError, setHasFieldError] = useState(true);
  const [isValidPass, setIsValidPass] = useState(false);
  const [form] = Form.useForm(null);

  const router = useRouter();

  const onChangePass = (isValidate: boolean, value: string) => {
    form.setFieldsValue({ password: value });
    setIsValidPass(isValidate);
  };

  const onSuccess = useCallback(
    (response: AxiosResponse<ResetPassResponse>) => {
      const { data } = response;

      const { statusText } = data;
      showNotification("success", "Success", statusText);
      router.push("/login");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    []
  );

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
    const { response } = error;
    const { statusText } = response.data;

    showNotification("error", "Error", statusText);
  }, []);

  const { mutate: resetPass, isLoading } = useHttpPost<ResetPassRequest, ResetPassResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.RESET_PASS });

  const onSubmit = async (formData: ResetPassRequest) => {
    formData.email = email;
    formData.activationcode = code;
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
          name="rpassword"
          rules={[
            {
              required: true,
              message: t("error.re_input_pass"),
            },
          ]}
        >
          <Input.Password placeholder={t("forgot.confirm_pass")} />
        </Form.Item>
        <Button
          style={{ marginTop: 10 }}
          disabled={isLoading || hasFieldError || !isValidPass}
          htmlType="submit"
          className="sign-in-btn"
          type="primary"
        >
          {t("signin.login")}
        </Button>
      </div>
    </Form>
  );
}

export default ResetPassForm;
