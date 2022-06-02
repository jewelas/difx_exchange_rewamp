import React from "react";
import { Button, Col, Layout, Row, Space, Typography} from 'antd';
import WalletLayout from "../index.page";
import { TokenConvertSwitch } from "@difx/core-ui";
import { t } from "i18next";
import { FeeLevelWrapper, WhiteBG, ProfileWrapper } from "../styled";
import FeesTable from "../../../components/profile/feesTable";

export function FeesPage() {
  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <WhiteBG style={{paddingBottom: '50px'}}>
                <ProfileWrapper>
                    <Typography.Title level={3}>{t("profile.fee_settings")}</Typography.Title>
                    <FeeLevelWrapper>
                        <div className="bg-img">
                            <img
                                src="/imgs/fee-bg.png"
                                alt=""
                            />
                        </div>
                        <div className="fee-levels">
                            <div className="fee-level">
                                <div className="diamond-img">
                                    <img
                                        src="/imgs/diamond.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="vip-level">
                                    <h5>VIP LEVEL 5</h5>
                                    <span>DIFX Holdings  1000</span>
                                </div>
                            </div>
                            <div className="level-details">
                                <h6>Spot Trading fee</h6>
                                <Row gutter={20} justify={"space-between"}>
                                    <Col>
                                        <Typography.Title level={5}>Maker</Typography.Title>
                                        <span>0.256%</span>
                                    </Col>
                                    <Col>
                                        <Typography.Title level={5}>Taker</Typography.Title>
                                        <span>0.256%</span>
                                    </Col>
                                </Row>
                            </div>
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
                <FeesTable />
            </WhiteBG>
        </Layout>
    </WalletLayout>
  );
}

export default FeesPage;
