import React, { useMemo, useState } from "react";
import { Layout, Modal } from 'antd';
import TopBalance from "../../../components/wallet/balance";
import SpotTransactions from "../../../components/wallet/spotTransactions";
import WalletLayout from "../index.page";
import WalletFilters from "../../../components/wallet/filters";
import ConvertSmallBalModal from "../../../components/wallet/spot/modal";
import { useBalance, useConvertSmallBalModal, useLocalStorage } from "@difx/shared";
import { t } from "i18next";
import { STORE_KEY } from "@difx/constants"

const { Content } = Layout;

export function SpotPage() {

  const { userBalance, spotBalanceUSD, spotBalanceBTC, spotYesterdayPnlBTC, spotYesterdayPnlUSD } = useBalance()
  const { modalVisible, setModalVisible } = useConvertSmallBalModal()
  const [ search, setSearch ] = useState("")
  const { value: smallBalanceHidden, setValue: setSmallBalanceHidden} = useLocalStorage(STORE_KEY.HIDE_SMALL_BALANCES, false)
  const {value: hideBalance, setValue: setHideBalance}  = useLocalStorage(STORE_KEY.HIDE_BALANCE,false)

  const closeModal = () => {
      setModalVisible(false);
  };

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  const searchedList = useMemo(()=>{
    if(search.length > 0){
      const filteredValue = userBalance.filter(item => item.currency.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return filteredValue
    }else{
      return null
    }
  },[search])

  const smallBalanceFilter = (list) => {
    if(smallBalanceHidden){
      return list.filter(item => item.amount > 0)
    }else{
      return list
    }
  }
  

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
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
              hideBalance={hideBalance}
              setHideBalance={setHideBalance}
            />
            <WalletFilters 
              overviewContent="spot" 
              onSearch={onSearch} 
              smallBalanceHidden={smallBalanceHidden}
              setSmallBalanceHidden={setSmallBalanceHidden}

            />
            <SpotTransactions userBalance={smallBalanceFilter(searchedList ? searchedList : userBalance)}/>
            <Modal title={t("wallet.convert_small_bal")} visible={modalVisible} onCancel={closeModal} footer={null} maskClosable={false}>
                <ConvertSmallBalModal />
            </Modal>
            </Content>
        </Layout>
    </WalletLayout>
  );
}

export default SpotPage;
