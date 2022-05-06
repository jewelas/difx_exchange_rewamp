import React from "react";
import { Avatar, Card, Col, Row, Space } from "antd";
import Text from "antd/lib/typography/Text";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";

const { CoinPlaceholder } = Icon;

export function TopMarket() {
  return (
    <Row gutter={16}>
        <Col span={6}>
            <Card title={t("market.top_gainer")} bordered={false}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="success">+10</Text>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="success">+10</Text>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="success">+10</Text>
                    </Col>
                </Row>
            </Card>
        </Col>
        <Col span={6}>
            <Card title={t("market.top_looser")} bordered={false}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="danger">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="danger">-10</Text>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="danger">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="danger">-10</Text>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="danger">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="danger">-10</Text>
                    </Col>
                </Row>
            </Card>
        </Col>
        <Col span={6}>
            <Card title={t("market.top_volume")} bordered={false}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="success">+10</Text>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                        <Text type="success">+10</Text>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="success">+10</Text>
                    </Col>
                </Row>
            </Card>
        </Col>
        <Col span={6}>
            <Card title={t("market.futures")} bordered={false}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="success">+10</Text>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="success">+10</Text>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">$36414</Text>
                    </Col>
                    <Col>
                    <Text type="success">+10</Text>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
  );
}

export default TopMarket;
