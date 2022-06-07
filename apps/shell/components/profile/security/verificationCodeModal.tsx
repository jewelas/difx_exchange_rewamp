import { Icon, OTPBox } from "@difx/core-ui";
import t from "@difx/locale";
import { Button, Form, Input, Modal, Typography } from "antd";
import { FormInstance } from "antd/es/form";
import Paragraph from "antd/lib/typography/Paragraph";
import { isEmpty } from "lodash";
import React, { useRef, useState } from "react";
import { VerificationCodeWrapper } from "../styled";


export function VerificationCodeModal({userEmail, setVerificationCodeModal, verificationCodeModal }) {

    const [hasFieldError, setHasFieldError] = useState(true);
    const formRef = useRef<FormInstance>(null);
    const [otpValue, setOtpValue] = useState('')
    const [timer, setTimer] = useState(55)
    const [resend, setResend] = useState(false)

    const closeModal = () => {
        setVerificationCodeModal(false);
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
          email:userEmail
        }
        // resendMail(reqData)
      }
    
      const pasteCode = async() => {
        const text = await navigator.clipboard.readText();
        setOtpValue(text)
      }

  return (
        <Modal title="" footer={null} visible={verificationCodeModal} onCancel={closeModal} closable={false} maskClosable={false}>
            <VerificationCodeWrapper>
                <div>
                    <Typography.Title level={5} style={{marginBottom:0}}>{t("wallet.verification_code")}</Typography.Title>
                    <Paragraph type="secondary">Please enter the verification code sent to {userEmail}</Paragraph>
                </div>
                <div className="withdraw-code">
                    <Form
                        autoComplete="off"
                    >
                            <div className="content">
                                <OTPBox value={otpValue} numInputs={6} handleChange={handleChange}/>
                                <div className="botton-box">
                                    <div className="resend-box">
                                        {`00:${timer.toString().padStart(2,'0')}`}
                                        <span onClick={resendOTP} className={`${resend? 'active' : null}`}> {t("forgot.resend")}</span>
                                    </div> 
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

export default VerificationCodeModal;
