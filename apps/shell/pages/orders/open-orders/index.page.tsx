import React from "react";
import { Button, Col, DatePicker, Layout, Row, Select, Space, Typography } from 'antd';
import OrderLayout from "../index.page";
import { WalletWrapper } from "../../wallet/styled";
import { t } from "i18next";
import DepositTransactions from "../../../components/wallet/transaction-history/depositTransactions";

const { Content } = Layout;

export function OpenOrdersPage() {
  return (
    <OrderLayout>
        <Layout style={{ padding: '24px' }}>
        <Content>
                <WalletWrapper>
                    <Typography.Title level={3}>{t("order.open_orders")}</Typography.Title>
                    <Row>
                        <Col>
                            <Space>
                                <div>
                                    <DatePicker.RangePicker />
                                </div>
                                <div>
                                <Select defaultValue="coin" size="small" className="input-small">
                                    <Select.Option value="coin">Coin</Select.Option>
                                </Select>
                                </div>
                            </Space>
                        </Col>
                        <Col>
                            <Button type="ghost">Cancel All</Button>
                        </Col>
                    </Row>
                </WalletWrapper>
                <DepositTransactions />
            </Content>
        </Layout>
    </OrderLayout>
  );
}

export default OpenOrdersPage;
