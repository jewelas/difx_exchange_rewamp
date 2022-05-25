import React, { useEffect } from "react";
import { Layout } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import SpotTransactions from "../../../components/wallet/spotTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import { useBalance } from "@difx/shared";

const { Content } = Layout;

export function SpotPage() {

  const { userBalance, spotBalanceUSD, spotBalanceBTC, spotYesterdayPnlBTC, spotYesterdayPnlUSD } = useBalance()

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px 24px 0' }}>
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
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default SpotPage;
