import t from "@difx/locale";
import { useWalletWithdrawModal, useWithdrawTabs } from "@difx/shared";
import { Modal, Typography } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import React from "react";
import { WithdrawModalWrapper } from "../styled";
import { RightOutlined } from '@ant-design/icons'
import { useRouter } from "next/router";


export function WithdrawModal() {
    const router = useRouter();
    const { modalVisible, setModalVisible } = useWalletWithdrawModal()
    const {tab, setTabsVisible} = useWithdrawTabs()

    const closeModal = () => {
        setModalVisible(false);
    };

    const withdrawTabs = () => {
        console.log("Click....")
        router.push("/wallet/withdraw");
        setTabsVisible(tab);
        setModalVisible(false);
    };

  return (
        <Modal title={t("wallet.withdraw")} footer={null} visible={modalVisible} onCancel={closeModal}>
            <WithdrawModalWrapper>
                <div>
                    <Typography.Title level={5}>Select withdraw option</Typography.Title>
                    <Paragraph>Please make sure you select the same deposit and withdrawal address, or your assets may be lost</Paragraph>
                </div>
                <div className="withdraw-options">
                    <div>
                        <div onClick={withdrawTabs}>
                            <img src="/imgs/bitcoin-duotone.svg" alt="" />
                            <div>
                                <Typography.Title level={4}>Send to crypto address</Typography.Title>
                                <Text type="secondary">Lorem ipsum Lorem ipsum</Text>
                            </div>
                        </div>
                        <RightOutlined />
                    </div>
                    <div>
                        <div>
                            <img src="/imgs/bitcoin-duotone.svg" alt="" />
                            <div>
                                <Typography.Title level={4}>Send to DIFX UID</Typography.Title>
                                <Text type="secondary">Lorem ipsum Lorem ipsum</Text>
                            </div>
                        </div>
                        <RightOutlined />
                    </div>
                    <div>
                        <div>
                            <img src="/imgs/bitcoin-duotone.svg" alt="" />
                            <div>
                                <Typography.Title level={4}>Send  to Sub Account</Typography.Title>
                                <Text type="secondary">Lorem ipsum Lorem ipsum</Text>
                            </div>
                        </div>
                        <RightOutlined />
                    </div>
                </div>
            </WithdrawModalWrapper>
        </Modal>
  );
}

export default WithdrawModal;
