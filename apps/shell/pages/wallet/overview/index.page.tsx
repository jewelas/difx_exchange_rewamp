import React from "react";
import { Layout} from 'antd';
import { t } from "i18next";
import TopBalance from "../../../components/wallet/balance";
import AccountCards from "../../../components/wallet/card";
import RecentTransactions from "../../../components/wallet/recentTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import { useBalance } from "@difx/shared";
import TransactionDetailsModal from "../../../components/wallet/transaction-details/modal";

const { Content } = Layout;

export function OverviewPage() {

  const { 
    overviewBalanceUSD,
    overviewBalanceBTC,
    spotBalanceUSD,
    spotBalanceBTC,
    futureBalanceUSD,
    futureBalanceBTC,
    rewardsBalanceUSD,
    rewardsBalanceBTC,
    earnBalaceUSD,
    earnBalaceBTC 
  } = useBalance()
  

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <div className="wallet-heading">
                <h3>{t("wallet.overview")}</h3>
                <p>{t("wallet.overview_para")}</p>
            </div>
            <Content>
            <TopBalance 
              type="overview" 
              heading="Overview Balance" 
              amount={overviewBalanceBTC}
              currency={overviewBalanceUSD}
            />
            <AccountCards 
              spotBalanceUSD={spotBalanceUSD}
              spotBalanceBTC={spotBalanceBTC}
              futureBalanceUSD={futureBalanceUSD}
              futureBalanceBTC={futureBalanceBTC}
              rewardsBalanceUSD={rewardsBalanceUSD}
              rewardsBalanceBTC={rewardsBalanceBTC}
              earnBalaceUSD={earnBalaceUSD}
              earnBalaceBTC= {earnBalaceBTC }
            />
            <WalletFilters overviewContent="overview" />
            <RecentTransactions />
            </Content>
            <TransactionDetailsModal />
        </Layout>
    </WalletLayout>
  );
}

export default OverviewPage;
