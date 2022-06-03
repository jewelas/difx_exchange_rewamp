import React, { useMemo, useState } from "react";
import { Layout } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import EarnTransactions from "../../../components/wallet/earnTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import { useBalance, useLocalStorage } from "@difx/shared";
import { STORE_KEY } from "@difx/constants"

const { Content } = Layout;

export function FuturesPage() {
  const {value: hideBalance, setValue: setHideBalance}  = useLocalStorage(STORE_KEY.HIDE_BALANCE,false)
  const { userBalance, earnBalaceBTC, earnBalaceUSD, spotYesterdayPnlBTC, spotYesterdayPnlUSD} = useBalance()
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
            <WalletFilters overviewContent="earn" onSearch={onSearch} />
            <EarnTransactions />
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default FuturesPage;
