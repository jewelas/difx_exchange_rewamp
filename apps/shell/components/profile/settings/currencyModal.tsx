import t from "@difx/locale";
import { Button, Form, Modal, Select } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";


export function SelectCurrencyModal({setCurrencyModal, currencyModal}) {

    const closeModal = () => {
        setCurrencyModal(false);
    };
    const [form] = Form.useForm();

  return (
        <Modal title={t("profile.currency")} footer={null} visible={currencyModal} onCancel={closeModal} maskClosable={false}>
            <Form
                form={form}
                layout="vertical"
                className="commonModalForm"
            >
                <Paragraph type="secondary">{t("profile.select_language_para")}</Paragraph>
                <Form.Item label={t("profile.currency")}>
                    <Select 
                        placeholder={`${t("common.enter")} ${t("profile.currency")}`} className="coinselect">
                        <Select.Option key="AED" value="AED">AED - د.إ</Select.Option>
                    </Select>
                </Form.Item>
                <div className="commonModalBtn">
                    <Button type="primary">{t("common.save")}</Button>
                </div>
            </Form>
        </Modal>
  );
}

export default SelectCurrencyModal;
