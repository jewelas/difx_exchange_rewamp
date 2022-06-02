import React from "react";
import { Layout } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import EarnTransactions from "../../../components/wallet/earnTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import { useBalance, useLocalStorage } from "@difx/shared";
import { STORE_KEY } from "@difx/constants"

const { Content } = Layout;

export function FuturesPage() {

  const { earnBalaceBTC, earnBalaceUSD, spotYesterdayPnlBTC, spotYesterdayPnlUSD} = useBalance()
  const {value: hideBalance, setValue: setHideBalance}  = useLocalStorage(STORE_KEY.HIDE_BALANCE,false)

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <Content>
            <TopBalance 
              type="earn" 
              heading="Earn Balance" 
              amount={earnBalaceBTC}
              currency={earnBalaceUSD}
              overviewPnlHeading="Total Interest Earned" 
              overviewPnlAmount={spotYesterdayPnlBTC}
              overviewPnlCurrency={spotYesterdayPnlUSD}
              bgImage="dollor_card_bg" 
              hideBalance={hideBalance}
              setHideBalance={setHideBalance}
            />
            <WalletFilters overviewContent="earn" />
            <EarnTransactions />
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default FuturesPage;
