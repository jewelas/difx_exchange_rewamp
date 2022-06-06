import React from "react";
import { Layout} from 'antd';
import { t } from "i18next";
import TopBalance from "../../../components/wallet/balance";
import AccountCards from "../../../components/wallet/card";
import RecentTransactions from "../../../components/wallet/recentTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import { useBalance, useLocalStorage } from "@difx/shared";
import TransactionDetailsModal from "../../../components/wallet/transaction-details/modal";
import { STORE_KEY } from "@difx/constants"

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

  const {value: hideBalance, setValue: setHideBalance}  = useLocalStorage(STORE_KEY.HIDE_BALANCE,false)
  

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
              hideBalance={hideBalance}
              setHideBalance={setHideBalance}
            />
            <AccountCards 
              spotBalanceUSD={spotBalanceUSD}
              spotBalanceBTC={spotBalanceBTC}
              futureBalanceUSD={futureBalanceUSD}
              futureBalanceBTC={futureBalanceBTC}
              rewardsBalanceUSD={rewardsBalanceUSD}
              rewardsBalanceBTC={rewardsBalanceBTC}
              earnBalaceUSD={earnBalaceUSD}
              earnBalaceBTC= {earnBalaceBTC}
              hideBalance={hideBalance}
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
