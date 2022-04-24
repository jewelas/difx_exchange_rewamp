/* eslint-disable react-hooks/exhaustive-deps */
import {
  CountrySelect,
  getCountryInfo,
  PasswordField,
  Typography
} from "@difx/core-ui";
import t from "@difx/locale";
import {
  currentUserAtom, SignInRequest,
  SignInResponse,
  useGetCountry,
  useSignIn
} from "@difx/shared";
import { Button, Form, Input, Switch } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import clsx from "clsx";
import { useUpdateAtom } from "jotai/utils";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { showNotification } from "./../../utils/pageUtils";

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { data: countryCode } = useGetCountry();

  const setCurrentUser = useUpdateAtom(currentUserAtom);

  const [type, setType] = useState<"email" | "phone">("email");
  const [isCorporate, setIsCorporate] = useState(false);
  const [dialCode, setDialCode] = useState(null);
  const [hasFieldError, setHasFieldError] = useState(true);
  const [isValidPass, setIsValidPass] = useState(false);
  const [form] = Form.useForm(null);

  const router = useRouter();

  useEffect(() => {
    if (countryCode) {
      const code = countryCode.split(";")[1];
      /* eslint-disable-next-line */
      const countryInfo: any = getCountryInfo(code);
      if (countryInfo) {
        setDialCode(countryInfo.dial_code);
        form.setFieldsValue({ dial_code: countryInfo?.dial_code });
      }
    }
  }, [countryCode]);

  useEffect(()=>{
    const fieldsValue = form.getFieldsValue();
    const emptyField = Object.entries(fieldsValue).find(([key,value])=> !value);
    setHasFieldError(!isEmpty(emptyField));
  },[type]);

  const onChangePass = (isValidate: boolean, value: string) => {
    form.setFieldsValue({ password: value });
    setIsValidPass(isValidate);
  };

  const onChangeDialCode = (item: { key: string; value: string }) => {
    form.setFieldsValue({ dial_code: item.value });

    /* eslint-disable-next-line */
    setDialCode(item.value);
  };

  const onSuccess = useCallback((response: AxiosResponse<SignInResponse>) => {
    const { data } = response;

    const { statusCode, sessionId } = data;
    if (statusCode === "ENTER_TWOFA_CODE") {
      localStorage.setItem("twoFaToken", sessionId);

      const fieldsValue = form.getFieldsValue();
      localStorage.setItem("loginFormData", JSON.stringify(fieldsValue));

      router.push("/two-factor");
    } else {
      localStorage.setItem("currentUser", JSON.stringify(data));
      setCurrentUser(data);

      localStorage.removeItem("twoFaToken");
      localStorage.removeItem("loginFormData");

      showNotification("success", "Signin successfully", null);
      router.push("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    showNotification("error", "Login failed", statusText);
  }, []);

  const { mutate: signIn, isLoading } = useSignIn({ onSuccess, onError });

  const onSubmit = async (formData: SignInRequest) => {
    formData.usertype = isCorporate ? "BUS" : "IND";

    if (type === "phone") {
      formData.email = "";
      formData.phonenumber = (
        formData.dial_code + formData.phonenumber
      ).replace("+", "");
    }

    signIn(formData);
  };

  const onChangeLoginType = (type: "email" | "phone") => {
    setType(type);
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onFieldsChange={onFormChange}
      autoComplete="off"
    >
      <div className="left-right">
        <div className="left">
          <div
            onClick={() => {
              onChangeLoginType("email");
            }}
            className={clsx("tab", type === "email" && "active")}
          >
            <Typography level="B1">{t("signin.email")}</Typography>
          </div>
          <div className="splitter" />
          <div
            onClick={() => {
              onChangeLoginType("phone");
            }}
            className={clsx("tab", type === "phone" && "active")}
          >
            <Typography level="B1">{t("signin.phone_number")}</Typography>
          </div>
        </div>
        <div className="right">
          <div
            className="pointer"
            onClick={() => {
              setIsCorporate(!isCorporate);
            }}
          >
            <Typography level="B2">{t("signin.corporate")}</Typography>
          </div>
          <Switch
            size="small"
            checked={isCorporate}
            onChange={(checked) => {
              setIsCorporate(checked);
            }}
          />
        </div>
      </div>
      <div className="content">
        {type === "email" ? (
          <Form.Item
            className="email"
            name="email"
            rules={[
              {
                required: true,
                message: t("error.input_email"),
              },
              {
                type: "email",
                message: t("error.email_not_valid"),
              },
            ]}
          >
            <Input placeholder={t("signin.email")} />
          </Form.Item>
        ) : (
          <div className="dial-group">
            <div className="dropdown-dial">
              <Form.Item name="dial_code" rules={[]}>
                <CountrySelect
                  value={dialCode}
                  width={150}
                  type="dial_code"
                  onChange={onChangeDialCode}
                  size="medium"
                />
              </Form.Item>
            </div>
            <Form.Item
              className="email"
              name="phonenumber"
              rules={[
                {
                  required: true,
                  message: t("error.input_phone"),
                },
              ]}
            >
              <Input type="number" placeholder={t("signin.phone_number")} />
            </Form.Item>
          </div>
        )}

        <Form.Item name="password">
          <PasswordField onChange={onChangePass} />
        </Form.Item>
        <Button
          disabled={isLoading || hasFieldError || !isValidPass || !dialCode}
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

export default LoginForm;
