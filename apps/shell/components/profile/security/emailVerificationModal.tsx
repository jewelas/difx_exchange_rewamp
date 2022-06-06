import t from "@difx/locale";
import { useEmailVerificationModal } from "@difx/shared";
import { Button, Form, Input, Modal } from "antd";
import React from "react";


export function EmailVerificationModal() {
    const { emailVerificationModal, setEmailVerificationModal } = useEmailVerificationModal()

    const closeModal = () => {
        setEmailVerificationModal(false);
    };
    const [form] = Form.useForm();

  return (
        <Modal title={t("profile.email_verification")} footer={null} visible={emailVerificationModal} onCancel={closeModal}>
            <Form
                form={form}
                layout="vertical"
                className="commonModalForm"
            >
                    <Form.Item
                        label="Email"
                        className="mb-0"
                    >
                        <Input placeholder={t("signin.email")} type="email" />
                        <div className="commonModalBtn">
                            <Button type="primary">Confirm</Button>
                        </div>
                    </Form.Item>
            </Form>
        </Modal>
  );
}

export default EmailVerificationModal;
