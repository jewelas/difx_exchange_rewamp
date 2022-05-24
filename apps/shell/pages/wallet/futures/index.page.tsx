import React from "react";
import { Layout } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import FutureTransactions from "../../../components/wallet/futureTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";

const { Content } = Layout;

export function FuturesPage() {
  return (
    <WalletLayout>
        <Layout style={{ padding: '24px 24px 0' }}>
            <Content>
            <TopBalance type="futures" heading="Future Balance" amount="0.00" currency="0.00" overviewHeading="Total Unrealized PnL" overviewAmount="0.00" overviewCurrency="0.00" bgImage="wallet_card_bg" />
            <WalletFilters overviewContent="futures"/>
            <FutureTransactions />
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default FuturesPage;
