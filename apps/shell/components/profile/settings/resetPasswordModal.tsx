import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { Button, Form, Input, Modal, Space } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import {
    EyeFilled,
    EyeInvisibleFilled
  } from '@ant-design/icons';


export function ResetPasswordModal({resetPasswordModal, setResetPasswordModal}) {

    const closeModal = () => {
        setResetPasswordModal(false);
    };
    const [form] = Form.useForm();

  return (
        <Modal title={t("profile.reset_password")} footer={null} visible={resetPasswordModal} onCancel={closeModal} maskClosable={false}>
            <Form
                form={form}
                layout="vertical"
                className="commonModalForm"
            >
                <Form.Item
                    label={t("signin.password")}
                    rules={[
                        {
                          required: true,
                          message: t("error.inpit_pass"),
                        },
                      ]}
                >
                    <Input.Password placeholder={`${t("common.enter")} ${t("profile.new_password")}`} 
                    iconRender={(visible) => (visible ? <EyeFilled/> : <EyeInvisibleFilled/>)} />
                </Form.Item>
                <Form.Item
                    label={t("profile.confirm_password")}
                    className="mb-0"
                    rules={[
                        {
                          required: true,
                          message: t("error.inpit_pass"),
                        },
                      ]}
                >
                    <Input.Password placeholder={`${t("common.enter")} ${t("profile.confirm_password")}`} 
                    iconRender={(visible) => (visible ? <EyeFilled/> : <EyeInvisibleFilled/>)} />
                </Form.Item>
                <div className="commonModalBtn">
                    <Space>
                        <Button onClick={closeModal}>{t("profile.cancel")}</Button>
                        <Button type="primary">{t("common.confirm")}</Button>
                    </Space>
                </div>
            </Form>
        </Modal>
  );
}

export default ResetPasswordModal;
