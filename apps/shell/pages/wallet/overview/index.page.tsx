import React, { useMemo, useState } from "react";
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
    earnBalaceBTC,
    userBalance
  } = useBalance()

  const [ search, setSearch ] = useState("")

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  const searchedList = useMemo(()=>{
    if(search.length > 0){
      // const filteredValue = userBalance.filter(item => item.currency === search)
      console.log(userBalance)
    }else{
      console.log("empty")
      return []
    }
  },[search])
  

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
            <WalletFilters overviewContent="overview" onSearch={onSearch} />
            {/* <RecentTransactions /> */}
            </Content>
            <TransactionDetailsModal />
        </Layout>
    </WalletLayout>
  );
}

export default OverviewPage;
