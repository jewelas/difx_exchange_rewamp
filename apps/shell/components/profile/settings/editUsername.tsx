import t from "@difx/locale";
import { Button, Form, Input, Modal } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";


export function EditUsernameModal({editUsernameModal, setEditUsernameModal}) {

    const closeModal = () => {
        setEditUsernameModal(false);
    };
    const [form] = Form.useForm();

  return (
        <Modal title={t("profile.edit_username")} footer={null} visible={editUsernameModal} onCancel={closeModal} maskClosable={false}>
            <Form
                form={form}
                layout="vertical"
                className="commonModalForm"
            >
                <Paragraph type="secondary">{t("profile.customized_nickname")}</Paragraph>
                    <Form.Item
                        label={t("profile.username")}
                        className="mb-0"
                    >
                        <Input placeholder={`${t("common.enter")} ${t("profile.username")}`} type="email" />
                        <div className="commonModalBtn">
                            <Button type="primary">{t("common.confirm")}</Button>
                        </div>
                    </Form.Item>
            </Form>
        </Modal>
  );
}

export default EditUsernameModal;
