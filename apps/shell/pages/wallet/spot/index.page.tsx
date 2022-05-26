import React from "react";
import { Layout, Modal } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import SpotTransactions from "../../../components/wallet/spotTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import ConvertSmallBalModal from "../../../components/wallet/spot/modal";
import { useConvertSmallBalModal } from "@difx/shared";
import { t } from "i18next";

const { Content } = Layout;

export function SpotPage() {
    const { modalVisible, setModalVisible } = useConvertSmallBalModal()

    const closeModal = () => {
        setModalVisible(false);
    };

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <Content>
            <TopBalance type="spot" heading="Spot Balance" amount="0.00" currency="0.00" overviewHeading="Overview PnL" overviewAmount="0.00" overviewCurrency="0.00" bgImage="btc_card_bg" />
            <WalletFilters overviewContent="spot" />
            <SpotTransactions />
            <Modal title={t("wallet.convert_small_bal")} visible={modalVisible} onCancel={closeModal} footer={null}>
                <ConvertSmallBalModal />
            </Modal>
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default SpotPage;
