import t from "@difx/locale";
import { Button, Checkbox, Col, Form, Input, Modal, Row } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import React from "react";


export function NotificationTopicModal({notificationTopicModal, setNotificationTopicModal}) {

    const closeModal = () => {
        setNotificationTopicModal(false);
    };
    const [form] = Form.useForm();

  return (
        <Modal title={t("profile.select_notification_topics")} footer={null} visible={notificationTopicModal} onCancel={closeModal} maskClosable={false}>
            <Form
                form={form}
                layout="vertical"
                className="commonModalForm"
            >
                <Paragraph type="secondary">{t("profile.notification_topic_para")}</Paragraph>
                <Checkbox.Group style={{ width: '100%' }}>
                    <Row align="middle" justify="space-between">
                        <Text>
                            Activities
                        </Text>
                        <Checkbox value="activities" />
                    </Row>
                    <Row align="middle" justify="space-between">
                        <Text>
                        Price Alerts
                        </Text>
                        <Checkbox value="price_alerts" />
                    </Row>
                    <Row align="middle" justify="space-between">
                        <Text>
                        DIFX Exclusive News
                        </Text>
                        <Checkbox value="difx_exclusive_news" />
                    </Row>
                    <Row align="middle" justify="space-between">
                        <Text>
                        System Messages
                        </Text>
                        <Checkbox value="system_messages" />
                    </Row>
                </Checkbox.Group>
                <div className="commonModalBtn">
                    <Button type="primary">{t("common.save")}</Button>
                </div>
            </Form>
        </Modal>
  );
}

export default NotificationTopicModal;
