import React from "react";
import { Button, Col, Layout, Row } from 'antd';
import { Icon } from "@difx/core-ui";
import { t } from "i18next";
import TopBalance from "../../../components/wallet/balance";
import AccountCards from "../../../components/wallet/card";
import RecentTransactions from "../../../components/wallet/recentTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";

const { Content } = Layout;

export function OverviewPage() {
  return (
    <WalletLayout>
        <Layout style={{ padding: '24px 24px 0' }}>
            <div className="wallet-heading">
                <h3>{t("wallet.overview")}</h3>
                <p>{t("wallet.overview_para")}</p>
            </div>
            <Content>
            <TopBalance type="overview" heading="Overview Balance" amount="0.00" currency="0.00" overviewHeading={null} overviewAmount={null} overviewCurrency={null} bgImage={null} />
            <AccountCards />
            <WalletFilters overviewContent="overview" />
            <RecentTransactions />
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default OverviewPage;
