import { Icon } from "@difx/core-ui";
import { Button, Col, DatePicker, Layout, Row, Select, Space, Typography } from 'antd';
import { t } from "i18next";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";
import SpotOpenOrderTransaction from "../../../../components/orders/spot/openOrders";
import { WalletWrapper } from "../../../wallet/styled";
import OrderLayout from "../../index.page";

const { Content } = Layout;

export function SpotOpenOrdersPage() {

    const [pairs, setPairs] = useState([]);
    const [selectedPair, setSelectedPair] = useState(null);

    return (
        <OrderLayout>
            <Layout style={{ padding: '24px' }}>
                <Content>
                    <WalletWrapper>
                        <Typography.Title level={3}>{t("order.open_orders")}</Typography.Title>
                        <Row align="middle" justify="space-between">
                            <Col>
                                <Space>
                                    <div>
                                        <DatePicker.RangePicker />
                                    </div>
                                    <div>
                                        <Select defaultValue="" style={{ width: 150 }} size="small" onChange={(e: string) => { setSelectedPair(e) }} className="input-small">
                                            {
                                                pairs.map(e =>
                                                    <Select.Option on key={`select_${e}`} value={e}>{e}</Select.Option>
                                                )
                                            }
                                            <Select.Option key={`select_all`} value={''}>All</Select.Option>
                                        </Select>
                                    </div>
                                </Space>
                            </Col>
                            <Col>
                                <Button type="ghost" size="small" className="btn-icon"><Icon.CancelOrderIcon useDarkMode /> Cancel All</Button>
                            </Col>
                        </Row>
                    </WalletWrapper>
                    {/* Transaction here */}
                    <SpotOpenOrderTransaction pair={selectedPair} setPairs={isEmpty(pairs) ? setPairs : null} />
                </Content>
            </Layout>
        </OrderLayout>
    );
}

export default SpotOpenOrdersPage;
