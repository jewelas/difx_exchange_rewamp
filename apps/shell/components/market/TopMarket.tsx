import React from "react";
import { Avatar, Card, Col, Row, Space } from "antd";
import Text from "antd/lib/typography/Text";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { ASSETS_URL } from "@difx/constants";
import { useRouter } from "next/router";
import { Loading } from "@difx/core-ui";

const { CoinPlaceholder } = Icon;

export function TopMarket({getTopGainer, getTopLooser, getTopVolume, getFutures}) {
    const router = useRouter();
    return (
        <>
        <Row gutter={[16, 16]}>
            <Col xs={24} xl={6} sm={12} style={{height: "180px"}}>
                <Loading isLoading={getTopGainer === null} >
                    <Card title={t("market.top_gainer")} bordered={false}>
                        {
                            getTopGainer && getTopGainer.length > 0 ?
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
                            :
                                "No Top Gainer Coins Available"
                        }
                    </Card>
                </Loading>
            </Col>
            <Col xs={24} xl={6} sm={12}>
                <Loading isLoading={getTopLooser === null}>
                    <Card title={t("market.top_looser")} bordered={false}>
                    {
                        getTopLooser && getTopLooser.length > 0 ?
                            getTopLooser.slice(0, 3).map(item =>
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
                            )
                        :
                            "No Top Looser Coins Available"
                    }
                    </Card>
                </Loading>
            </Col>
            <Col xs={24} xl={6} sm={12}>
                <Loading isLoading={getTopVolume === null}>
                    <Card title={t("market.top_volume")} bordered={false}>
                        {
                            getTopVolume && getTopVolume.length > 0  ?
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
                            :
                                "No Top Volume Coins Available"
                        }
                    </Card>
                </Loading>
            </Col>
            <Col xs={24} xl={6} sm={12}>
                <Loading isLoading={!getFutures}>
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
                </Loading>
            </Col>
        </Row>
        </>
    );
}

export default TopMarket;
