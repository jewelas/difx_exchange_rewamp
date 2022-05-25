import React from "react";
import { Layout } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import EarnTransactions from "../../../components/wallet/earnTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";

const { Content } = Layout;

export function FuturesPage() {
  return (
    <WalletLayout>
        <Layout style={{ padding: '24px 24px 0' }}>
            <Content>
            <TopBalance type="earn" heading="Earn Balance" amount="0.00" currency="0.0" overviewHeading="Total Interest Earned" overviewAmount="0.00" overviewCurrency="0.00" bgImage="dollor_card_bg" />
            <WalletFilters overviewContent="earn" />
            <EarnTransactions />
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default FuturesPage;
