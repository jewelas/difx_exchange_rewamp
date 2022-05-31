import React, { useState } from "react";
import { Layout, Row, Tabs } from 'antd';
import WalletLayout from "../index.page";
import WalletStepper from "../../../components/wallet/stepper";
import { WalletTabsWrapper } from "../styled";
import SendToCryptoAddress from "../../../components/wallet/withdraw/sendToCryptoAddress";
import SendToDIFXUID from "../../../components/wallet/withdraw/sendToDIFXUID";
import SubToSubAccount from "../../../components/wallet/withdraw/subToSubAccount";
// import { useWithdrawTabs } from "@difx/shared";

const { TabPane } = Tabs;

export function WithdrawPage() {
  const [tab, setTab] = useState('send_to_crypto_address');
  

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <WalletStepper />
            <WalletTabsWrapper style={{marginTop:3}}>
                <Row>
                    <Tabs defaultActiveKey="send_to_crypto_address" size={"large"} onChange={(e) => { setTab(e) }} tabBarGutter={50}>
                        <TabPane tab="Send to crypto address" key="send_to_crypto_address" />
                        <TabPane tab="Send to DIFX UID" key="send_to_difx_uid" />
                        {/* <TabPane tab="Send to sub account" key="send_to_sub_account" /> */}
                    </Tabs>
                </Row>
            </WalletTabsWrapper>
            <div>
                    {tab === 'send_to_crypto_address' &&
                    <>
                        <SendToCryptoAddress />
                    </>
                    }
                    {tab === 'send_to_difx_uid' &&
                    <>
                        <SendToDIFXUID />
                    </>
                    }
                    {tab === 'send_to_sub_account' &&
                    <>
                        <SubToSubAccount />
                    </>
                    }
                </div>
        </Layout>
    </WalletLayout>
  );
}

export default WithdrawPage;
