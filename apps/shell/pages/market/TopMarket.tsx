import React from "react";
import { Avatar, Card, Col, Row, Space } from "antd";
import Text from "antd/lib/typography/Text";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { Market } from '@difx/shared';
import { ASSETS_URL } from "@difx/constants";


const { CoinPlaceholder } = Icon;

export function TopMarket({getTopGainer, getTopLooser, getTopVolume, getFutures}) {
  return (
    <Row gutter={16}>
        <Col span={6}>
            <Card title={t("market.top_gainer")} bordered={false}>
            {
            !getTopGainer
            ?
            "asas"
            :
            getTopGainer.slice(0, 3).map(item =>
                <Row justify="space-between" align="middle" key={item.symbol}>
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                            <Text>{item.currency1}</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="success">${item.last.toFixed(3)}</Text>
                    </Col>
                    <Col>
                    <Text type="success">{item.change.toFixed(3)}</Text>
                    </Col>
                </Row>
                )
            }
            </Card>
        </Col>
        <Col span={6}>
            <Card title={t("market.top_looser")} bordered={false}>
            {
            !getTopLooser
            ?
            "asas"
            :
            getTopLooser.slice(0, 3).map(item =>
                <Row justify="space-between" align="middle" key={item.symbol}>
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                            <Text>{item.currency1}</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type="danger">${item.last.toFixed(3)}</Text>
                    </Col>
                    <Col>
                    <Text type="danger">{item.change.toFixed(3)}</Text>
                    </Col>
                </Row>
                )
            }
            </Card>
        </Col>
        <Col span={6}>
            <Card title={t("market.top_volume")} bordered={false}>
            {
            !getTopVolume
            ?
            "asas"
            :
            getTopVolume.slice(0, 3).map(item =>
                <Row justify="space-between" align="middle" key={item.symbol}>
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                            <Text>{item.currency1}</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type={item.change > 0 ? "success" : "danger"}>${item.last.toFixed(3)}</Text>
                    </Col>
                    <Col>
                    <Text type={item.change > 0 ? "success" : "danger"}>{item.change.toFixed(3)}</Text>
                    </Col>
                </Row>
                )
            }
            </Card>
        </Col>
        <Col span={6}>
            <Card title={t("market.futures")} bordered={false}>
            {
            !getFutures
            ?
            "asas"
            :
            getFutures.slice(0, 3).map(item =>
                <Row justify="space-between" align="middle" key={item.symbol}>
                    <Col>
                        <Space>
                            <Avatar size={34} icon={<CoinPlaceholder width={34} height={34} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                            <Text>{item.currency1}</Text>
                        </Space>
                    </Col>
                    <Col>
                        <Text type={item.change > 0 ? "success" : "danger"}>${item.last.toFixed(3)}</Text>
                    </Col>
                    <Col>
                    <Text type={item.change > 0 ? "success" : "danger"}>{item.change.toFixed(3)}</Text>
                    </Col>
                </Row>
                )
            }
            </Card>
        </Col>
    </Row>
  );
}

export default TopMarket;
