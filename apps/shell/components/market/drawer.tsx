import { API_ENDPOINT, ASSETS_URL, QUERY_KEY } from '@difx/constants';
import { Icon } from "@difx/core-ui";
import { useHttpGet, useMarketPair } from "@difx/shared";
import { getCurrentDateTimeByDateString } from '@difx/utils';
import { Avatar, Button, Col, Row, Space, Typography } from "antd";
import Text from "antd/lib/typography/Text";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from "react";
import { CoinDrawerInfo, DrawerWrapper } from "../../pages/market/styled";
// import { IconButton } from "@difx/core-ui";

const { Title, Paragraph } = Typography;

export function MarketDrawer(spotList) {
   const {marketPair} = useMarketPair()
   const [ellipsis, setEllipsis] = useState(true);
    const { data: coinInfo, isLoading, isError } = useHttpGet<null, any>(QUERY_KEY.MARKET_PAIRS_INFO(marketPair), API_ENDPOINT.GET_SELECTED_MARKET_PAIRS(marketPair), null);
    if(isLoading){
    return <> loading.. </>
    }
    if(!coinInfo){
        return <> No Coin Data Found </>
    }
    const router = useRouter();
  return (
    <>
        <DrawerWrapper>
            <Row>
                <Space>
                    <Avatar shape="square" size={41} icon={<Icon.CoinPlaceholder width={34} height={34} />} src={`${ASSETS_URL}${coinInfo.coin.toLowerCase()}.png`}/>
                    <Title level={5} style={{marginBottom:0}}>{coinInfo.coin}</Title>
                </Space>
            </Row>
            <CoinDrawerInfo>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Text type="secondary">Market Cap</Text>
                    </Col>
                    <Col>
                        <Text strong>${coinInfo.market_cap}</Text>
                    </Col>
                </Row>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Text type="secondary">All - time high</Text>
                    </Col>
                    <Text strong>${coinInfo.high}</Text>
                </Row>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Text type="secondary">ALL - time low</Text>
                    </Col>
                    <Text strong>${coinInfo.low}</Text>
                </Row>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Text type="secondary">Launch date</Text>
                    </Col>
                    <Text strong>
                        {getCurrentDateTimeByDateString(coinInfo.launch_date)}
                    </Text>
                </Row>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Text type="secondary">Blockchain</Text>
                    </Col>
                    <Text strong>{coinInfo.chain}</Text>
                </Row>
            </CoinDrawerInfo>
            <Title level={5}>About BTC</Title>
            <div dangerouslySetInnerHTML={{__html: coinInfo.about}} className="coin-about" />
            <Title level={5} style={{marginTop:10}}>Learn more</Title>
            <Space>
                <Col>
                    <a href={coinInfo.website} target="_blank" rel="noreferrer">
                        <Button type="link" className="anchor-link">
                            <Icon.CardViewIcon /> Offical website
                        </Button>
                    </a>
                </Col>
                <Col>
                    <a href={coinInfo.github} target="_blank" rel="noreferrer">
                        <Button type="link" className="anchor-link">
                            <Icon.CardViewIcon /> GitHub
                        </Button>
                    </a>
                </Col>
            </Space>
            <Title level={5} style={{marginTop:10}}>Social media</Title>
            <Space>
                <Col>
                    <a href={coinInfo.fb_link} target="_blank" rel="noreferrer"><Avatar size={35} icon={<Icon.CoinPlaceholder width={34} height={34} />} src={"/imgs/facebook.svg"}/></a>
                </Col>
                <Col>
                <a href={coinInfo.twitter_link} target="_blank" rel="noreferrer"><Avatar size={35} icon={<Icon.CoinPlaceholder width={34} height={34} />} src={"/imgs/twitter.svg"}/></a>
                </Col>
            </Space>
            <Button type="primary" block style={{marginTop:30}} onClick={() => {router.push(`/exchange/${coinInfo.coin}USDT`)}}>
                Trade
            </Button>
        </DrawerWrapper>
    </>
  );
}

export default MarketDrawer;
