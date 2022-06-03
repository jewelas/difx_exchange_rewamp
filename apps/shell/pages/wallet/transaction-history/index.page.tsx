import React, { useState } from "react";
import { Col, DatePicker, Layout, Row, Select, Space, Tabs, Typography} from 'antd';
import { t } from "i18next";
import WalletLayout from "../index.page";
import DepositTransactions from "../../../components/wallet/transaction-history/depositTransactions";
import { WalletWrapper, WalletTabsWrapper } from "../styled";
import WithdrawalsTransactions from "../../../components/wallet/transaction-history/withdrawalsTransactions";
import TransferTransactions from "../../../components/wallet/transaction-history/transferTransactions";
import ConvertTransactions from "../../../components/wallet/transaction-history/convertTransactions";
import { CoinSelector } from "@difx/core-ui";

const { Content } = Layout;
const { TabPane } = Tabs;

export function TransactionHistoryPage() {
    const [tab, setTab] = useState('deposits');
    const [selectedCoin, setSelectedCoin] = useState(null)
 
    const handleCoinSelect = (coin) => {
        const coinInfo = JSON.parse(coin || "null")
        setSelectedCoin(coin)
    }

    return (
        <WalletLayout>
            <Layout style={{ padding: '24px' }}>
                <Content>
                    <WalletWrapper>
                        <Typography.Title level={3}>{t("wallet.transaction_history")}</Typography.Title>
                    </WalletWrapper>
                    <WalletTabsWrapper>
                        <Row>
                            <Tabs defaultActiveKey="deposits" size={"large"} onChange={(e) => { setTab(e) }} tabBarGutter={50}>
                                <TabPane tab="Deposits" key="deposits" />
                                <TabPane tab="Withdrawals" key="withdrawals" />
                                <TabPane tab="Transfer" key="transfer" />
                                <TabPane tab="Convert History" key="convert" />
                            </Tabs>
                        </Row>
                    </WalletTabsWrapper>
                        <WalletWrapper>
                            {/* <Space>
                                <div>
                                    <DatePicker.RangePicker />
                                </div>
                                <div>
                                    <CoinSelector selectedCoin={selectedCoin} handleChange={handleCoinSelect}/>
                                </div>
                            </Space> */}
                        </WalletWrapper>
                        <div>
                            {tab === 'deposits' &&
                            <>
                                <DepositTransactions />
                            </>
                            }
                            {tab === 'withdrawals' &&
                            <>
                                <WithdrawalsTransactions />
                            </>
                            }
                            {tab === 'transfer' &&
                            <>
                                <TransferTransactions />
                            </>
                            }
                            {tab === 'convert' &&
                            <>
                                <ConvertTransactions />
                            </>
                            }
                        </div>
                    
                </Content>
            </Layout>
        </WalletLayout>
    );
}

export default TransactionHistoryPage;
