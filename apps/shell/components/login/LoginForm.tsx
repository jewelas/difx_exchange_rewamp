/* eslint-disable react-hooks/exhaustive-deps */
import {
  CountrySelect,
  getCountryInfo,
  Typography
} from "@difx/core-ui";
import t from "@difx/locale";
import {
  SignInRequest,
  SignInResponse,
  CaptchaType,
  useAuth,
  useHttpGet,
  useHttpPost,
  previousPathAtom,
  useAPI,
  configAtom
} from "@difx/shared";
import { Button, Form, Input, Switch } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState, useRef } from "react";
import { API_ENDPOINT, QUERY_KEY } from "@difx/shared";
import { ExtraAuth } from "@difx/shared";
import { useAtom } from "jotai";
import { useRecaptcha } from "@difx/shared";
import Link from "next/link";
import {
  EyeFilled,
  EyeInvisibleFilled
} from '@ant-design/icons';

/* eslint-disable-next-line */
export interface LoginFormProps { }

export function LoginForm(props: LoginFormProps) {
  const { data: countryCode } = useHttpGet<null, object>(QUERY_KEY.COUNTRIES, API_ENDPOINT.GET_COUNTRY, null);

  const { updateSession } = useAuth();
  const [ config ] = useAtom(configAtom);
  const [previous, ] = useAtom(previousPathAtom)
  const { API }  = useAPI()

  const [getCaptcha] = useRecaptcha()

  const [type, setType] = useState<"email" | "phone">("email");
  const [isCorporate, setIsCorporate] = useState(false);
  const [dialCode, setDialCode] = useState(null);
  const [hasFieldError, setHasFieldError] = useState(true);
  const [isSubAccount, setIsSubAccount] = useState(false)
  const [form] = Form.useForm(null);
  const [isLoading , setIsLoading ] = useState(false)

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
  
  const onFormChange = () => {
    const fieldsValue = form.getFieldsValue();
    for (const [, value] of Object.entries(fieldsValue)) {
      if (!value) {
        setHasFieldError(true);
        return
      }
    }
    
    const fieldsError = form.getFieldsError();
    const errors = fieldsError.find((e) => !isEmpty(e.errors));
    if (errors && !isEmpty(errors.errors)) {
      setHasFieldError(true);
    } else {
      setHasFieldError(false);
    }
  };

  // const onSuccess = useCallback((response: AxiosResponse<SignInResponse>) => {
  //   const { data } = response.data;
  //   const { permission, user } = data
  //   updateSession(user, permission)
  //   router.push("/home");
  // }, []);
  
  // const onError = (error: AxiosError) => {
  //   setIsLoading(false)
  //   const { response } = error;
  //   const { statusText, data } = response.data;
  //   let authDetails: ExtraAuth
  //   const fieldsValue = form.getFieldsValue();
  //   switch (statusText) {
  //     case "IP_VERIFICATION_REQUIRED":
  //       authDetails = {
  //         type: "IP_VERIFICATION",
  //         details: {
  //           email: fieldsValue.email
  //         }
  //       }
  //       localStorage.setItem("extraAuthRequired", JSON.stringify(authDetails))
  //       router.push("/verify-ip")
  //       break
  //     case "TFA_REQUIRED":
  //       authDetails = {
  //         type: "TFA",
  //         details: {
  //           session_id: data.session_id
  //         }
  //       }
  //       localStorage.setItem("extraAuthRequired", JSON.stringify(authDetails))
  //       router.push("/two-factor")
  //       break
  //     default:
  //       break
  //   }
  // };

  // const { mutate: signIn } = useHttpPost<SignInRequest, SignInResponse>({ onSuccess, onError, endpoint: API_ENDPOINT.SIGNIN });

  const signIn = async(formData) => {
    try{
      const response = await API.post(API_ENDPOINT.SIGNIN, formData)
      // eslint-disable-next-line
      const { statusCode, data } = response?.data
      let authDetails: ExtraAuth
      const fieldsValue = form.getFieldsValue();
      switch (statusCode) {
        case 200: {
          const { permission, user } = data
          updateSession(user, permission)
          router.push(previous);
          break
        }
        case 410: {
          authDetails = {
            type: "IP_VERIFICATION",
            details: {
              email: fieldsValue.email
            }
          }
          localStorage.setItem("extraAuthRequired", JSON.stringify(authDetails))
          router.push("/verify-ip")
          break
        }
        case 411: {
          authDetails = {
            type: "TFA",
            details: {
              session_id: data.session_id
            }
          }
          localStorage.setItem("extraAuthRequired", JSON.stringify(authDetails))
          router.push("/two-factor")
          break
        }
        case 415: {
          authDetails = {
            type: "VERIFICATION_REQUIRED",
            details: {
              id: formData.email ? formData.email : formData.phonenumber ? formData.phonenumber : null,
              type: formData.email ? "email" : formData.phonenumber ? "phonenumber" : null
            }
          }
          localStorage.setItem("extraAuthRequired", JSON.stringify(authDetails))
          router.push("/verify-otp")
          break
        }
        default:
          break
      }
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  const onSubmit = async (formData: SignInRequest) => {
    setIsLoading(true)
    const captcha: string | CaptchaType = await getCaptcha()

    /* eslint-disable */
    formData.captcha = captcha,
      formData.captcha_type = config.captcha,
      formData.device_token = "sdasdasd",
      formData.device = "web";
    /* eslint-enable */

    if (type === "phone") {
      formData.phonenumber = (
        formData.dial_code + formData.phonenumber
      ).replace("+", "");
      delete formData.email 
      delete formData.dial_code
    }

    signIn(formData)
    
  };

  const onChangeLoginType = (type: "email" | "phone") => {
    setType(type);
  };

  const onToggleSubAccount = (e) => {
    e.preventDefault()
    setIsSubAccount(!isSubAccount) 
  }

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onFieldsChange={onFormChange}
      autoComplete="off"
    >
      {
        !isSubAccount ? 
          <>
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
                
                {
                  !isCorporate ?
                  <>
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
                  </>
                  :
                      null
                }
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
          </>
        :
          <>
          </>
      }
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

        <Form.Item name="password"
          rules={[
            {
              required: true,
              message: t("error.inpit_pass"),
            },
          ]}>
          <Input.Password
           placeholder={t("signin.password")}
           iconRender={(visible) => (visible ? <EyeFilled/> : <EyeInvisibleFilled/>)}
          />
        </Form.Item>
        <Button
          disabled={isLoading || hasFieldError || (type === 'phone' && !dialCode)}
          htmlType="submit"
          className="sign-in-btn"
          type="primary"
        >
          {t("signin.login")}
        </Button>

        <div className="left-right">
          <div className="left">
            {/* <button 
              className="sub-account-link"
              onClick={onToggleSubAccount}
            >
              {
                !isSubAccount ? 
                  <>{t("register.subAccount")}</>
                :
                  <>{t("register.mainAccount")}</>
              }
            </button> */}
          </div>
          <div className="forgot-pass">
            <Typography level="B1">
              <Link href="/forgot">{t("common.forgot_password")}</Link>
            </Typography>
          </div>
        </div>
        
        <div className="to-register-box">
            <Typography level="B1">
              {t("register.newAccount")}
              <Link href="/register">{t("register.title")}</Link>
            </Typography>
        </div>

      </div>
    </Form>
  );
}

export default LoginForm;
