/* eslint-disable react-hooks/exhaustive-deps */
import { CountrySelect, getCountryInfo, Typography } from "@difx/core-ui";
import t from "@difx/locale";
import {
  ForgotRequest,
  ForgotResponse,
  useHttpGet,
  useHttpPost,
  useRecaptcha,
  CaptchaType,
  configAtom, useCurrency
} from "@difx/shared";
import { Button, Form, Input, notification } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { useCallback, useEffect, useState } from "react";
import { API_ENDPOINT, QUERY_KEY, } from "@difx/constants";
import { useAtom } from "jotai";

/* eslint-disable-next-line */
export interface ForgotFormProps {
  setTab: any,
  setEmail: any,
  setPhoneNumber: any,
}

export function ForgotForm({setTab, setEmail, setPhoneNumber}: ForgotFormProps) {
  const { data: countryCode } = useHttpGet<null, string>(QUERY_KEY.COUNTRIES, API_ENDPOINT.GET_COUNTRY, null);

  const [config] = useAtom(configAtom)
  const [ getCaptcha ] = useRecaptcha()

  const [type, setType] = useState<"email" | "phone">("email");
  const [dialCode, setDialCode] = useState(null);
  const [hasFieldError, setHasFieldError] = useState(true);
  const [isLoading , setIsLoading ] = useState(false)
  const [form] = Form.useForm(null);

  useEffect(() => {
    if (countryCode) {
      const code: string = countryCode["isocode"];
      /* eslint-disable-next-line */
      const countryInfo: any = getCountryInfo(code);
      if (countryInfo) {
        setDialCode(countryInfo.dial_code);
        form.setFieldsValue({ dial_code: countryInfo?.dial_code });
      }
    }
  }, [countryCode]);

  useEffect(() => {
    const fieldsValue = form.getFieldsValue();
    const emptyField = Object.entries(fieldsValue).find(([key, value]) => !value);
    setHasFieldError(!isEmpty(emptyField));
  }, [type]);

  const onChangeDialCode = (item: { key: string; value: string }) => {
    form.setFieldsValue({ dial_code: item.value });

    /* eslint-disable-next-line */
    setDialCode(item.value);
  };

  const onSuccess = useCallback((response: AxiosResponse) => {
    const { data } = response;
    notification.info({
      message: "Verify OTP",
      description: data.message,
    })
    if(type === "email"){
      setEmail(form.getFieldValue('email'))
    }else{
      setPhoneNumber(form.getFieldValue('phonenumber'))
    }
    
    setTab("verify")
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
    console.log(error)
    setIsLoading(false)
  }, []);

  const { mutate: forgot } = useHttpPost<ForgotRequest, ForgotResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.FORGOT });

  const onSubmit = async (formData: ForgotRequest) => {
    setIsLoading(true)
    const captcha: string | CaptchaType = await getCaptcha()
    if (type === "phone") {
      formData.phonenumber = (
        formData.dial_code + formData.phonenumber
      ).replace("+", "");
      delete formData.email
      delete formData.dial_code
    }

    formData.captcha = captcha
    formData.captcha_type = config.captcha
    forgot(formData);
  }

  const onChangeLoginType = (type: "email" | "phone") => {
    setType(type);
  };

  return (
    <>
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
              <Typography 
                level="B1"
                className={clsx(type === "email" && "active")}
              >
                {t("signin.email")}
              </Typography>
            </div>
            <div className="splitter" />
            <div
              onClick={() => {
                onChangeLoginType("phone");
              }}
              className={clsx("tab", type === "phone" && "active")}
            >
              <Typography 
                level="B1"
                className={clsx(type === "phone" && "active")}
              >
                {t("signin.phone_number")}
              </Typography>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="guide">
            <Typography level="B1">
              {t("forgot.enter_val", {
                value: type === "email" ? "email" : "phone number",
              })}
            </Typography>
          </div>
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
                    size="large"
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

          <Button
            disabled={isLoading || hasFieldError || (type==='phone' && !dialCode)}
            htmlType="submit"
            className="sign-in-btn"
            type="primary"
          >
            {t("common.submit")}
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ForgotForm;
