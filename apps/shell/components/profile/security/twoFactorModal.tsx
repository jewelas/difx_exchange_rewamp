import { Icon, OTPBox } from "@difx/core-ui";
import t from "@difx/locale";
import { Button, Form, Input, Modal } from "antd";
import { FormInstance } from "antd/es/form";
import Paragraph from "antd/lib/typography/Paragraph";
import { isEmpty } from "lodash";
import React, { useRef, useState } from "react";
import { VerificationCodeWrapper } from "../styled";


export function TwoFactorModal({setTwoFactorModal, twoFactorModal}) {
    const [form] = Form.useForm();
    const [hasFieldError, setHasFieldError] = useState(true);
    const formRef = useRef<FormInstance>(null);
    const [otpValue, setOtpValue] = useState('')
    const [timer, setTimer] = useState(55)
    const [resend, setResend] = useState(false)
    
    const closeModal = () => {
        setTwoFactorModal(false);
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
    const handleChange = (otp) => {
        setOtpValue(otp)
        otp.length === 6 ? setHasFieldError(false) : setHasFieldError(true)
    }

    const resendOTP = () => {
        const reqData: any = {
          email:"nitin@gmail.com"
        }
        // resendMail(reqData)
      }
    
      const pasteCode = async() => {
        const text = await navigator.clipboard.readText();
        setOtpValue(text)
      }

      const SuffixAmountInput = (
        <div className="suffix-amount">
          <Button
           ghost
           icon={<Icon.PasteIcon fill={`${({theme}) => theme.fontColor.muted}`} width={15} height={15} />}
            >
            </Button>
        </div>
      )
    

  return (
        <Modal title={t("profile.setup_two_factor")} footer={null} visible={twoFactorModal} onCancel={closeModal} maskClosable={false}>
            <VerificationCodeWrapper>
                <div className="withdraw-code">
                    <Form
                        autoComplete="off"
                        layout="vertical"
                    >
                            <Form.Item
                            label="Key"
                            >
                                <Input placeholder={t("profile.key")} type="text" suffix={SuffixAmountInput}/>
                            </Form.Item>
                            <Paragraph type="secondary">Enter two factor authentication code</Paragraph>
                            <div className="content">
                                <OTPBox value={otpValue} numInputs={6} handleChange={handleChange}/>
                                <div className="botton-box" style={{justifyContent:"flex-end"}}>
                                    <div className="paste-btn" onClick={()=>pasteCode()}>
                                        {t("forgot.paste")}
                                        <Icon.PasteIcon fill={`${({theme}) => theme.color.primary}`}/>
                                    </div>
                                </div>
                            </div>
                        
                        <div className="commonModalBtn">
                            <Button type="primary">Confirm</Button>
                        </div>
                    </Form>
                </div>
            </VerificationCodeWrapper>
        </Modal>
  );
}

export default TwoFactorModal;
