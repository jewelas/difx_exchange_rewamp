import { CountrySelect, getCountryInfo, Typography } from "@difx/core-ui";
import t from "@difx/locale";
import {
  ForgotRequest,
  ForgotResponse,
  useForgot,
  useGetCountry,
} from "@difx/shared";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/es/form";
import { AxiosError, AxiosResponse } from "axios";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { useCallback, useEffect, useRef, useState } from "react";
import { showNotification } from "../../utils/pageUtils";

/* eslint-disable-next-line */
export interface ForgotFormProps {}

export function ForgotForm(props: ForgotFormProps) {
  const { data: countryCode } = useGetCountry();

  const [type, setType] = useState<"email" | "phone">("email");
  const [dialCode, setDialCode] = useState(null);
  const [hasFieldError, setHasFieldError] = useState(true);
  const formRef = useRef<FormInstance>(null);

  useEffect(() => {
    if (countryCode) {
      const code = countryCode.split(";")[1];
      /* eslint-disable-next-line */
      const countryInfo: any = getCountryInfo(code);
      if (countryInfo) {
        setDialCode(countryInfo.dial_code);
        formRef.current?.setFieldsValue({ dial_code: countryInfo?.dial_code });
      }
    }
  }, [countryCode]);

  useEffect(() => {
    onFormChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const onChangeDialCode = (item: { key: string; value: string }) => {
    formRef.current?.setFieldsValue({ dial_code: item.value });

    /* eslint-disable-next-line */
    setDialCode(item.value);
  };

  const onSuccess = useCallback((response: AxiosResponse<ForgotResponse>) => {
    const { data } = response;

    const { statusText } = data;
    showNotification("success", "Success", statusText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const onError = useCallback((error: AxiosError) => {
    const { response } = error;
    const { statusText } = response.data;

    showNotification("error", "Error", statusText);
  }, []);

  const { mutate: forgot, isLoading } = useForgot({ onSuccess, onError });

  const onSubmit = async (formData: ForgotRequest) => {
    if (type === "phone") {
      formData.email = "";
      formData.phonenumber = (
        formData.dial_code + formData.phonenumber
      ).replace("+", "");
    }

    forgot(formData);
  };

  const onChangeLoginType = (type: "email" | "phone") => {
    setType(type);
  };

  return (
    <Form
      ref={formRef}
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

        <Button
          disabled={isLoading || hasFieldError}
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

export default ForgotForm;
