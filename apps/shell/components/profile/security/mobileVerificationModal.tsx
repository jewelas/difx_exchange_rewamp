import { CountrySelect, getCountryInfo } from "@difx/core-ui";
import t from "@difx/locale";
import { useHttpGet } from "@difx/shared";
import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { API_ENDPOINT, QUERY_KEY, } from "@difx/constants";


export function MobileVerificationModal({setMobileVerificationModal, mobileVerificationModal}) {
    const { data: countryCode } = useHttpGet<null, string>(QUERY_KEY.COUNTRIES, API_ENDPOINT.GET_COUNTRY, null);
    const [dialCode, setDialCode] = useState(null);

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

    const onChangeDialCode = (item: { key: string; value: string }) => {
    form.setFieldsValue({ dial_code: item.value });

    /* eslint-disable-next-line */
    setDialCode(item.value);
    };

    const closeModal = () => {
        setMobileVerificationModal(false);
    };
    const [form] = Form.useForm();

  return (
        <Modal title={t("profile.mobile_verification")} footer={null} visible={mobileVerificationModal} onCancel={closeModal} maskClosable={false}>
            <Form
                form={form}
                layout="vertical"
                className="commonModalForm"
            >
                <label style={{marginBottom:10, display:"block"}}>Mobile</label>
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
                        className="email mb-0"
                        name="phonenumber"
                        rules={[
                        {
                            required: true,
                            message: t("error.input_phone"),
                        },
                        ]}
                    >
                        <Input type="number" placeholder={t("signin.phone_number")} />
                        <div className="commonModalBtn">
                            <Button type="primary">Confirm</Button>
                        </div>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
  );
}

export default MobileVerificationModal;
