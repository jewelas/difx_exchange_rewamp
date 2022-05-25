import {
  CountrySelect,
  getCountryInfo,
  Icon,
  PasswordField,
  Typography
} from "@difx/core-ui";
import t from "@difx/locale";
import {
  SignUpRequest,
  SignUpResponse,
  useHttpGet,
  useHttpPost,
  CaptchaType,
  useRecaptcha,
  configAtom
} from "@difx/shared";
import { Button, Checkbox, Form, Input, Tabs, notification } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import clsx from "clsx";
import { isEmpty } from "lodash";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { FormStyled } from "../../pages/register/styled";
import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import VerifyOTP from "./VerifyOTP";
import { useAtom } from "jotai";
import Link from "next/link";

/* eslint-disable-next-line */
export interface RegisterFormComponentProps {}

export function RegisterFormComponent(props: RegisterFormComponentProps) {
  const { data: countryCode } = useHttpGet<null, object>(QUERY_KEY.COUNTRIES, API_ENDPOINT.GET_COUNTRY, null);
  const { TabPane } = Tabs;

  const [config] = useAtom(configAtom)
  
  const [form] = Form.useForm(null);
  
  const [ getCaptcha ] = useRecaptcha()
  
  const [showReferral, setShowReferral] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false)
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [hasFieldError, setHasFieldError] = useState(true);
  const [isValidPass, setIsValidPass] = useState(false);
  const [dialCode, setDialCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [userType, setUserType] = useState<"IND" | "BUS">("IND");
  const [isLoading, setIsLoading] = useState(false);

  const verificationToken = useRef()

  useEffect(() => {
    if (countryCode) {
      const code: string = countryCode["isocode"]
      /* eslint-disable-next-line */
      const countryInfo: any = getCountryInfo(code);
      if (countryInfo) {
        setCountry(countryInfo.name);
        setDialCode(countryInfo.dial_code);
        form.setFieldsValue({ dial_code: countryInfo?.dial_code });
      }
    }
  }, [countryCode]);

  const onChangeCountry = (item: { key: string; value: string }) => {
    /* eslint-disable-next-line */
    const countryInfo: any = getCountryInfo(item.key);
    setDialCode(countryInfo?.dial_code);
    setCountry(item.value);
    form.setFieldsValue({ dial_code: countryInfo?.dial_code });
  };

  /* eslint-disable-next-line */
  const onChangeTermCheckbox = (value: any) => {
    setAcceptTerm(value.target.checked);
    onFormChange();
  };

  const onFormChange = () => {
    const fieldsError = form.getFieldsError();
    const errors = fieldsError.find((e) => !isEmpty(e.errors));
    if (errors && !isEmpty(errors.errors)) {
      setHasFieldError(true);
    } else {
      setHasFieldError(false);
    }
  };

  const onSuccess = useCallback((response: AxiosResponse) => {
    const { data } = response;
    notification.info({
      message: "Verify Email",
      description: data.message,
    })
    verificationToken.current = data.data.token
    setVerifyEmail(true)
  }, []);

  const onError = useCallback((error: AxiosError) => {
    setIsLoading(false)
    console.log(error)
  }, []);

  const { mutate: signUp } = useHttpPost<SignUpRequest, SignUpResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.SIGNUP_VERIFICATION });

  const onSubmit = async (formData: SignUpRequest) => {
    setIsLoading(true)
    const captcha: string | CaptchaType = await getCaptcha()
    if(formData.phonenumber){
      formData.phonenumber = (formData.dial_code + formData.phonenumber).replace(
        "+",
        ""
      );
    } 
    formData.type = userType;
    formData.captcha = captcha;
    formData.captcha_type = config.captcha;
    formData.country = country;
    formData.device = "web";
    formData.device_token = "dfx_web";
    formData.password = form.getFieldValue('password')
    delete formData.dial_code
    signUp(formData);
  };

  const onChangePass = (isValidate: boolean, value: string) => {
    form.setFieldsValue({ password: value });
    setIsValidPass(isValidate);
  };

  const onChangeDialCode = (item: { key: string; value: string }) => {
    form.setFieldsValue({ dial_code: item.value });

    /* eslint-disable-next-line */
    const countryInfo: any = getCountryInfo(item.key);
    setCountry(countryInfo?.name);
    setDialCode(item.value);
  };

  if(verifyEmail){
    return <VerifyOTP 
      userEmail={form.getFieldValue('email')}
      userPhoneNumber={form.getFieldValue('phonenumber')}
      verificationToken={verificationToken.current}
    />
  }

  return (
    <FormStyled>
      <Form
        form={form}
        onFinish={onSubmit}
        onFieldsChange={onFormChange}
        autoComplete="off"
      >
        <Typography level={"H2"}>
          {t("register.register_your_account")}
        </Typography>
        <Typography level={"H6"}>{t("register.resident_country")}</Typography>
        <div className="country-select-group">
          <CountrySelect
            value={country}
            onChange={onChangeCountry}
            size="medium"
          />
        </div>
        <div className="account-type-group">
          <Button
            onClick={() => setUserType("IND")}
            className={clsx("with-icon", userType === "IND" && "active", "custom-btn")}
          >
            <Icon.UserIcon />
            <div>{t("register.individual")}</div>
          </Button>
          <Button
            onClick={() => setUserType("BUS")}
            className={clsx("with-icon", userType === "BUS" && "active", "custom-btn")}
          >
            <Icon.BankIcon />
            <div>{t("register.corporate")}</div>
          </Button>
        </div>
        <div className="input-group">
          <Tabs defaultActiveKey="emailSignUp">

            <TabPane tab="Email" key="emailSignUp">
              <div className="input-item">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: t("error.email_not_valid"),
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </div>
            </TabPane>

            {
              userType === "IND" ? 
                <TabPane tab="Phone Number" key="phoneSignUp">
                  <div className="input-item dial">
                    <div className="dropdown-dial">
                      <Form.Item name="dial_code" rules={[]}>
                        <CountrySelect
                          value={dialCode}
                          width={124}
                          type="dial_code"
                          onChange={onChangeDialCode}
                          size="large"
                        />
                      </Form.Item>
                    </div>
                    <Form.Item
                      name="phonenumber"
                      rules={[
                        {
                          required: true,
                          message: t("error.input_phone"),
                        },
                      ]}
                    >
                      <Input type="number" placeholder="Phone Number" />
                    </Form.Item>
                  </div>
                </TabPane>
              :
                null
            }


          </Tabs>

          <div data-tip data-for="password-validate" className="input-item">
            <PasswordField onChange={onChangePass} />
          </div>
          
          <div
            onClick={() => {
              setShowReferral(!showReferral);
            }}
            className="referral-group"
          >
            <Typography level="H6">{t("register.referral_code")}</Typography>
            <div className="icon">
              {showReferral ? (
                <Icon.MenuUpIcon useDarkMode />
              ) : (
                <Icon.MenuDownIcon useDarkMode />
              )}
            </div>
          </div>
          {showReferral && (
            <div
              className="input-item"
              style={{ marginTop: 10, marginBottom: 0 }}
            >
              <Form.Item name="code">
                <Input placeholder="Referral" />
              </Form.Item>
            </div>
          )}
        </div>

        <div className="term-group">
          <Checkbox checked={acceptTerm} onChange={onChangeTermCheckbox}>
            <Typography level="text">
              {t("register.term1")}{" "}
              <a target="_blank" href="/term">
                {t("register.term2")}
              </a>
            </Typography>
          </Checkbox>
        </div>

        <Button
          disabled={isLoading || hasFieldError || !acceptTerm || !isValidPass || !dialCode || !country}
          htmlType="submit"
          className="sign-up-btn"
          type="primary"
        >
          Sign Up
        </Button>
        <div className="muted-link">
          <Typography level="B1">
            <Link href="/login">{t("common.have_acc")}</Link>
          </Typography>
        </div>
      </Form>
    </FormStyled>
  );
}

export default RegisterFormComponent;
