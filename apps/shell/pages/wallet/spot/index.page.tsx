import React from "react";
import { Layout, Modal } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import SpotTransactions from "../../../components/wallet/spotTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import ConvertSmallBalModal from "../../../components/wallet/spot/modal";
import { useBalance, useConvertSmallBalModal } from "@difx/shared";
import { t } from "i18next";

const { Content } = Layout;

export function SpotPage() {

  const { userBalance, spotBalanceUSD, spotBalanceBTC, spotYesterdayPnlBTC, spotYesterdayPnlUSD } = useBalance()
  const { modalVisible, setModalVisible } = useConvertSmallBalModal()

  const closeModal = () => {
      setModalVisible(false);
  };

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <Content>
            <TopBalance 
              type="spot" 
              heading="Spot Balance" 
              amount={spotBalanceBTC} 
              currency={spotBalanceUSD}
              yesterdayPnlHeading="Overview PnL" 
              yesterdayPnlAmount={spotYesterdayPnlBTC}  
              yesterdayPnlCurrency={spotYesterdayPnlUSD}  
              overviewPnlHeading="Overview PnL" 
              overviewPnlAmount={spotYesterdayPnlBTC}  
              overviewPnlCurrency={spotYesterdayPnlUSD}  
              bgImage="btc_card_bg" 
            />
            <WalletFilters overviewContent="spot" />
            <SpotTransactions userBalance={userBalance}/>
            <Modal title={t("wallet.convert_small_bal")} visible={modalVisible} onCancel={closeModal} footer={null}>
                <ConvertSmallBalModal />
            </Modal>
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default SpotPage;
