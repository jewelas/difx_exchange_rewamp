import React from "react";
import { Layout } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import SpotTransactions from "../../../components/wallet/spotTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";

const { Content } = Layout;

export function SpotPage() {
  return (
    <WalletLayout>
        <Layout style={{ padding: '24px 24px 0' }}>
            <Content>
            <TopBalance type="spot" heading="Spot Balance" amount="0.00" currency="0.00" overviewHeading="Overview PnL" overviewAmount="0.00" overviewCurrency="0.00" bgImage="btc_card_bg" />
            <WalletFilters overviewContent="spot" />
            <SpotTransactions />
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default SpotPage;
