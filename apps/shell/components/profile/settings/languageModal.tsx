import t from "@difx/locale";
import { Button, Form, Modal, Select } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";


export function SelectLanguageModal({setLanguageModal, languageModal}) {

    const closeModal = () => {
        setLanguageModal(false);
    };
    const [form] = Form.useForm();

  return (
        <Modal title={t("profile.language")} footer={null} visible={languageModal} onCancel={closeModal} maskClosable={false}>
            <Form
                form={form}
                layout="vertical"
                className="commonModalForm"
            >
                <Paragraph type="secondary">{t("profile.select_language_para")}</Paragraph>
                <Form.Item label={t("profile.language")}>
                    <Select 
                        placeholder={`${t("common.enter")} ${t("profile.language")}`} className="coinselect">
                        <Select.Option key="eng" value="eng">English</Select.Option>
                    </Select>
                </Form.Item>
                <div className="commonModalBtn">
                    <Button type="primary">{t("common.save")}</Button>
                </div>
            </Form>
        </Modal>
  );
}

export default SelectLanguageModal;
