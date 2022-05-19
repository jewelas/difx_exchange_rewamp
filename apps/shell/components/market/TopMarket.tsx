import React from "react";
import { Avatar, Card, Col, Row, Space } from "antd";
import Text from "antd/lib/typography/Text";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { ASSETS_URL } from "@difx/constants";
import { useRouter } from "next/router";

const { CoinPlaceholder } = Icon;

export function TopMarket({getTopGainer, getTopLooser, getTopVolume, getFutures}) {
    const router = useRouter();
  return (
      <>
    <Row gutter={[16, 16]}>
        <Col xs={24} xl={6} sm={12}>
            <Card title={t("market.top_gainer")} bordered={false}>
            {
            getTopGainer == 0
            ?
            "No Top Gainer Coins Available"
            :
            getTopGainer.slice(0, 3).map(item =>
                item.change > 0 ?
                    <Row justify="space-between" align="middle" key={item.symbol} onClick={() => {router.push(`/exchange/${item.symbol}`)}} className="cursor-pointer">
                        <Col className="coin-width">
                            <Space>
                                <Avatar shape="square" size={26} icon={<CoinPlaceholder width={26} height={26} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                                <Text style={{marginLeft:0}}>{item.currency1}</Text>
                            </Space>
                        </Col>
                        <Col className="price-width">
                            <Text type="success">{item.last.toFixed(3)}</Text>
                        </Col>
                        <Col className="rate-width">
                        <Text type="success">+{item.change.toFixed(2)}%</Text>
                        </Col>
                    </Row>
                : null
                )
            }
            </Card>
        </Col>
        <Col xs={24} xl={6} sm={12}>
            <Card title={t("market.top_looser")} bordered={false}>
            {
            getTopLooser == 0
            ?
            "No Top Looser Coins Available"
            :
            getTopLooser.slice(0, 3).map(item =>
                item.change < 0 ? 
                <Row justify="space-between" align="middle" key={item.symbol} onClick={() => {router.push(`/exchange/${item.symbol}`)}} className="cursor-pointer">
                    <Col className="coin-width">
                        <Space>
                            <Avatar shape="square" size={26} icon={<CoinPlaceholder width={26} height={26} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                            <Text style={{marginLeft:0}}>{item.currency1}</Text>
                        </Space>
                    </Col>
                    <Col className="price-width">
                        <Text type="danger">{item.last.toFixed(3)}</Text>
                    </Col>
                    <Col className="rate-width">
                    <Text type="danger">{item.change.toFixed(2)}%</Text>
                    </Col>
                </Row>
                : null
                )
            }
            </Card>
        </Col>
        <Col xs={24} xl={6} sm={12}>
            <Card title={t("market.top_volume")} bordered={false}>
            {
            getTopVolume == 0 
            ?
            "No Top Volume Coins Available"
            :
            getTopVolume.slice(0, 3).map(item =>
                <Row justify="space-between" align="middle" key={item.symbol} onClick={() => {router.push(`/exchange/${item.symbol}`)}} className="cursor-pointer">
                    <Col className="coin-width">
                        <Space>
                            <Avatar shape="square" size={26} icon={<CoinPlaceholder width={26} height={26} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                            <Text style={{marginLeft:0}}>{item.currency1}</Text>
                        </Space>
                    </Col>
                    <Col className="price-width">
                        <Text type={item.change > 0 ? "success" : "danger"}>{item.last.toFixed(3)}</Text>
                    </Col>
                    <Col className="rate-width">
                    <Text type={item.change > 0 ? "success" : "danger"}>{item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%</Text>
                    </Col>
                </Row>
                )
            }
            </Card>
        </Col>
        <Col xs={24} xl={6} sm={12}>
            <Card title={t("market.futures")} bordered={false}>
            {
            !getFutures
            ?
            "No Top Future Coins Available"
            :
            getFutures.slice(0, 3).map(item =>
                <Row justify="space-between" align="middle" key={item.symbol}>
                    <Col className="coin-width">
                        <Space>
                            <Avatar shape="square" size={26} icon={<CoinPlaceholder width={26} height={26} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                            <Text style={{marginLeft:0}}>{item.currency1}</Text>
                        </Space>
                    </Col>
                    <Col className="price-width">
                        <Text type={item.change > 0 ? "success" : "danger"}>{item.last.toFixed(3)}</Text>
                    </Col>
                    <Col className="rate-width">
                    <Text type={item.change > 0 ? "success" : "danger"}>{item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%</Text>
                    </Col>
                </Row>
                )
            }
            </Card>
        </Col>
    </Row>
    </>
  );
}

export default TopMarket;
