import React from "react";
import { Button, Col, DatePicker, Layout, Row, Select, Space, Typography } from 'antd';
import OrderLayout from "../../index.page";
import { WalletWrapper } from "../../../wallet/styled";
import { t } from "i18next";
import SpotTradeHistoryTransaction from "../../../../components/orders/spot/tradeHistory";
import { Icon } from "@difx/core-ui";

const { Content } = Layout;

export function FutureTradeHistoryPage() {
  return (
    <OrderLayout>
        <Layout style={{ padding: '24px' }}>
        <Content>
                <WalletWrapper>
                    <Typography.Title level={3}>{t("order.trade_history")}</Typography.Title>
                    <Row align="middle" justify="space-between">
                        <Col>
                            <Space>
                                <div>
                                    <DatePicker.RangePicker />
                                </div>
                            </Space>
                        </Col>
                        <Col>
                            <Button type="ghost" size="small" className="btn-icon"><Icon.ExpandIcon useDarkMode /> Export</Button>
                        </Col>
                    </Row>
                </WalletWrapper>
                {/* Transaction here */}
                <SpotTradeHistoryTransaction />
            </Content>
        </Layout>
    </OrderLayout>
  );
}

export default FutureTradeHistoryPage;
