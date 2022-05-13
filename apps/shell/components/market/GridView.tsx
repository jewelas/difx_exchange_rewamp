import React from "react";
import { Avatar, Button, Card, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { CoinText, CoinPriceInfo, MarketCardBtns, CardStar, GridWrapper } from "../../pages/market/styled";
import { Icon } from "@difx/core-ui";
import { ASSETS_URL } from "@difx/constants";
import { useMarketModal } from "@difx/shared";


export function GridView({data}) {
    const {setMarketPair, modalVisible, setModalVisible} = useMarketModal()
  return (
    <GridWrapper>
        <Row gutter={[16, 16]}>
            
           {
             !data
               ?
               "asas"
               :
               data.map(item =>
                <Col span={6} key={item.symbol}>
                    <Card>
                        <CardStar><Icon.FavoriteIcon fill={item.favorite ? "#FFC107" : "#56595C"} variant="medium" /></CardStar>
                        <Row justify="space-between" align="middle">
                            <Col>
                            <CoinText>
                                <Avatar size={54} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                                <Text>{item.currency1}<Text type="secondary"> / {item.currency2}</Text></Text>
                            </CoinText>
                            </Col>
                            <Col>
                                Chart
                            </Col>
                        </Row>
                        <CoinPriceInfo>
                            <Row gutter={10}>
                                <Col span={8}>
                                    <Text type="secondary">
                                        Last Price
                                    </Text>
                                    <Text>${item.last}</Text>
                                </Col>
                                <Col span={8}>
                                    <Text type="secondary">
                                    24h Change
                                    </Text>
                                    <Text type={item.change > 0 ? "success" : "danger"}>{item.change.toFixed(2)}%</Text>
                                </Col>
                                <Col span={8}>
                                    <Text type="secondary">
                                    24h Volume
                                    </Text>
                                    <Text>{item.volume.toFixed(1)}</Text>
                                </Col>
                            </Row>
                        </CoinPriceInfo>
                        <MarketCardBtns>
                            <Row gutter={20}>
                                <Col span={12}>
                                    <Button type="primary" className="success" onClick={() => {
          setMarketPair(item.currency1)
          setModalVisible(!modalVisible)
        }}>Buy</Button>
                                </Col>
                                <Col span={12}>
                                    <Button type="primary" className="danger">Sell</Button>
                                </Col>
                            </Row>
                        </MarketCardBtns>
                    </Card>
                </Col>
               )
           }
        </Row>
    </GridWrapper>
  );
}

export default GridView;
