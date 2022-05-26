import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { useTransactionDetailsModal } from "@difx/shared";
import { Col, Modal, Row, Space, Typography } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import React, { useEffect } from "react";
import { TransactionDetailsWrapper } from "../styled";


export function TransactionDetailsModal() {
    const { modalVisible, setModalVisible } = useTransactionDetailsModal()

    const closeModal = () => {
        setModalVisible(false);
    };

  return (
        <Modal title="Transaction Detalis" footer={null} visible={modalVisible} onCancel={closeModal}>
            <TransactionDetailsWrapper>
                <div className="top-section">
                    <div>
                        <label><Text type="secondary">Amount</Text></label>
                        <Typography.Title level={5}>
                            12 DIFX
                        </Typography.Title>
                        <Text type="secondary">2022-03-22 /11:29</Text>
                    </div>
                    <div>
                        <Icon.CheckCircleIcon width={35} height={35} />
                    </div>
                </div>
                <div className="witdrawal-modal">
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">ID</Text>
                        </Col>
                        <Col>
                            <Text>2045</Text>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">Size</Text>
                        </Col>
                        <Col>
                            <Text>10.00 FTM</Text>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">Fee</Text>
                        </Col>
                        <Col>
                            <Text>0.99 FTM</Text>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">Type</Text>
                        </Col>
                        <Col>
                            <Text>Withdraw</Text>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">Network</Text>
                        </Col>
                        <Col>
                            <Text>FTM</Text>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">Address</Text>
                        </Col>
                        <Col>
                            <Text className="long-text">0x312ebdc921cccb33d9f202e8bb7b8d5721de151f</Text>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">Trasncation ID</Text>
                        </Col>
                        <Col>
                            <Text className="long-text">0x312ebdc921cccb33d9f202e8bb7b8d5721de151f</Text>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col>
                            <Text type="secondary">Status</Text>
                        </Col>
                        <Col>
                            <Text type="success">Completed</Text>
                        </Col>
                    </Row>
                </div>
            </TransactionDetailsWrapper>
        </Modal>
  );
}

export default TransactionDetailsModal;
