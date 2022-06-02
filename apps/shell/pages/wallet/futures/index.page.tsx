import React from "react";
import { Layout } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import FutureTransactions from "../../../components/wallet/futureTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import { useBalance, useLocalStorage } from "@difx/shared";
import { STORE_KEY } from "@difx/constants"

const { Content } = Layout;

export function FuturesPage() {

  const { futureBalanceUSD, futureBalanceBTC, spotYesterdayPnlBTC, spotYesterdayPnlUSD} = useBalance()
  const {value: hideBalance, setValue: setHideBalance}  = useLocalStorage(STORE_KEY.HIDE_BALANCE,false)

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <Content>
            <TopBalance 
              type="futures" 
              heading="Future Balance" 
              amount={futureBalanceBTC} 
              currency={futureBalanceUSD} 
              overviewPnlHeading="Total Unrealized PnL" 
              overviewPnlAmount={spotYesterdayPnlBTC} 
              overviewPnlCurrency={spotYesterdayPnlUSD} 
              bgImage="wallet_card_bg"
              hideBalance={hideBalance}
              setHideBalance={setHideBalance} 
            />
            <WalletFilters overviewContent="futures"/>
            <FutureTransactions />
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default FuturesPage;
