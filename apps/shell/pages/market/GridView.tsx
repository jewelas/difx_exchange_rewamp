import React from "react";
import { Avatar, Button, Card, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { CoinText, CoinPriceInfo, MarketCardBtns, CardStar, GridWrapper } from "./styled";
import { Icon } from "@difx/core-ui";

export function GridView() {
  return (
    <GridWrapper>
        <Row gutter={[16, 16]}>
            <Col span={6}>
                <Card>
                    <CardStar><Icon.FavoriteIcon fill="#FFC107" variant="medium" /></CardStar>
                    <Row justify="space-between" align="middle">
                        <Col>
                        <CoinText>
                            <Avatar size={54} src="https://joeschmoe.io/api/v1/random"/>
                            <Text>BTC <Text type="secondary">/ USDT</Text></Text>
                        </CoinText>
                        </Col>
                        <Col>
                            Chart
                        </Col>
                    </Row>
                    <CoinPriceInfo>
                        <Row gutter={20}>
                            <Col span={8}>
                                <Text type="secondary">
                                    Last Price
                                </Text>
                                <Text>$34534.28</Text>
                            </Col>
                            <Col span={8}>

                                <Text type="secondary">
                                24h Change
                                </Text>
                                <Text type="success">-1.01%</Text>
                            </Col>
                            <Col span={8}>
                                <Text type="secondary">
                                24h Volume
                                </Text>
                                <Text>3,094.12 <span className="text-muted">BTC</span></Text>
                            </Col>
                        </Row>
                    </CoinPriceInfo>
                    <MarketCardBtns>
                        <Row gutter={20}>
                            <Col span={12}>
                                <Button type="primary" className="success ant-btn-lg">Buy</Button>
                            </Col>
                            <Col span={12}>
                                <Button type="primary" danger className="ant-btn-lg">Sell</Button>
                            </Col>
                        </Row>
                    </MarketCardBtns>
                </Card>
            </Col>
        </Row>
    </GridWrapper>
  );
}

export default GridView;
