import React from "react";
import { Button, Col, Image, Layout, Row, Space, Typography} from 'antd';
import RecentTransactions from "../../../components/wallet/recentTransactions";
import WalletLayout from "../index.page";
import TransactionDetailsModal from "../../../components/wallet/transaction-details/modal";
import { TokenConvertSwitch } from "@difx/core-ui";
import { t } from "i18next";
import { FeeLevelWrapper, ProfileWrapper } from "../styled";

const { Content } = Layout;

export function FeesPage() {

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <Content>
                <ProfileWrapper>
                    <Typography.Title level={3}>{t("profile.fee_settings")}</Typography.Title>
                    <FeeLevelWrapper>
                        <div className="bg-img">
                            <img
                                src="/imgs/fee-bg.png"
                                alt=""
                            />
                        </div>
                    </FeeLevelWrapper>
                </ProfileWrapper>
                <div className="toggle-card-wrapper">
                    <Row align="middle" justify="space-between">
                    <Col>
                        <div className="toggle-card">
                            <TokenConvertSwitch />
                        </div>
                    </Col>
                    <Col>
                        <Space>
                            <Button type="text" shape="round" size="small" className="round-light-primary-btn">{t("profile.trading_fees")}</Button>
                            <Button type="text" shape="round" size="small" className="round-light-primary-btn">{t("profile.transaction_fees")}</Button>
                        </Space>
                    </Col>
                    </Row>
                </div>
                <RecentTransactions />
            </Content>
            <TransactionDetailsModal />
        </Layout>
    </WalletLayout>
  );
}

export default FeesPage;
