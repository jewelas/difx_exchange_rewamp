/* eslint-disable react-hooks/exhaustive-deps */
import {
  CountrySelect,
  getCountryInfo,
  PasswordField,
  Typography
} from "@difx/core-ui";
import t from "@difx/locale";
import {
  SignInRequest,
  SignInResponse,
  useAuth,
  useHttpGet,
  useHttpPost,
  configAtom
} from "@difx/shared";
import { Button, Form, Input, Switch } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { API_ENDPOINT, QUERY_KEY } from "@difx/shared";
import { ExtraAuth } from "@difx/shared";
import { useAtom } from "jotai";


/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { data: countryCode } = useHttpGet<null, object>(QUERY_KEY.COUNTRIES, API_ENDPOINT.GET_COUNTRY, null);

  // const setCurrentUser = useUpdateAtom(currentUserAtom);
  const { updateSession } = useAuth();
  const [config] = useAtom(configAtom)

  const [type, setType] = useState<"email" | "phone">("email");
  const [isCorporate, setIsCorporate] = useState(false);
  const [dialCode, setDialCode] = useState(null);
  const [hasFieldError, setHasFieldError] = useState(true);
  const [isValidPass, setIsValidPass] = useState(false);
  const [form] = Form.useForm(null);

  const router = useRouter();

  useEffect(() => {
    if (countryCode) {
      const code: string = countryCode["isocode"]
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
    const { data } = response.data;
    const { permission, user } = data
    updateSession(user, permission)
    router.push("/home");
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
    const { statusText , data} = response.data;
    let authDetails: ExtraAuth 
    const fieldsValue = form.getFieldsValue();
    switch (statusText) {
      case "IP_VERIFICATION_REQUIRED":
        authDetails = {
          type: "IP_VERIFICATION",
          details: {
            email: fieldsValue.email
          }
        }
        localStorage.setItem("extraAuthRequired",JSON.stringify(authDetails))
        router.push("/verify-ip")
        break
      case "TFA_REQUIRED":
        authDetails = {
          type: "TFA",
          details: {
            session_id: data.session_id
          }
        }
        localStorage.setItem("extraAuthRequired",JSON.stringify(authDetails))
        router.push("/two-factor")
        break
      default:
        break
    }
  }, []);

  const { mutate: signIn, isLoading } = useHttpPost<SignInRequest, SignInResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.SIGNIN });

  const onSubmit = async (formData: SignInRequest) => {

    /* eslint-disable */
    formData.captcha = "shdvhsjvfdfdf",
    formData.captcha_type = config.captcha,
    formData.device_token = "DSfdsgfdsgfdgfdgf",
    formData.device = "web";
    /* eslint-enable */

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
