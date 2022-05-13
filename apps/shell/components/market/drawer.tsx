import React, { useEffect, useState } from "react";
import { Row, Space, Avatar, Typography, Col, Button, Anchor } from "antd";
import Text from "antd/lib/typography/Text";
import { Icon } from "@difx/core-ui";
import { CoinDrawerInfo } from "../../pages/market/styled";
import { Market, useHttpGet, useHttpGetByEvent, useMarketPair } from "@difx/shared";
import { QUERY_KEY, API_ENDPOINT, ASSETS_URL } from '@difx/constants';
// import { IconButton } from "@difx/core-ui";

const { Title, Paragraph } = Typography;

export function MarketDrawer({coin}:{coin:string}) {
   const {marketPair} = useMarketPair()
    const { data: coinInfo, isLoading } = useHttpGet<null, any>(QUERY_KEY.MARKET_PAIRS_INFO(marketPair), API_ENDPOINT.GET_SELECTED_MARKET_PAIRS(marketPair), null);
    // const [coinData, setCoinData] = useState([])
    // useEffect(() => {
    //     setCoinData(coinInfo.data)
    // }, [coinInfo])
    console.log("detail", coinInfo)
    if(isLoading){
        return(
        <>
        loading
        </>)
    }
  return (
    <>
        <Row>
            <Space>
                <Avatar size={41} icon={<Icon.CoinPlaceholder width={34} height={34} />} src={`${ASSETS_URL}${coinInfo.coin.toLowerCase()}.png`}/>
                <Title level={5} style={{marginBottom:0}}>{coinInfo.coin}</Title>
                {/* <Text type="secondary">Bitcoin</Text> */}
            </Space>
        </Row>
        <CoinDrawerInfo>
            <Row align="middle" justify="space-between">
                <Col>
                    <Text type="secondary">Market Cap</Text>
                </Col>
                <Col>
                    <Text strong>${coinInfo.coin}</Text>
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
                <Text strong>{coinInfo.launch_date}</Text>
            </Row>
            <Row align="middle" justify="space-between">
                <Col>
                    <Text type="secondary">Blockchain</Text>
                </Col>
                <Text strong>{coinInfo.chain}</Text>
            </Row>
        </CoinDrawerInfo>
        <Title level={5}>About BTC</Title>
        <Paragraph>
            {coinInfo.about}
        </Paragraph>
        <Button type="link" className="anchor-link">
          View More
        </Button>
        <Title level={5} style={{marginTop:10}}>Learn more</Title>
        <Space>
            <Col>
                {/* <IconButton type="link">
                    <Icon.CardViewIcon /> View asasas
                </IconButton> */}
                <Button type="link" className="anchor-link">
                    <Icon.CardViewIcon /> Offical website
                </Button>
            </Col>
            <Col>
                <Button type="link" className="anchor-link">
                    <Icon.CardViewIcon /> GitHub
                </Button>
            </Col>
        </Space>
        <Title level={5} style={{marginTop:10}}>Social media</Title>
        <Space>
            <Col>
                <Avatar size={35} icon={<Icon.CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
            </Col>
            <Col>
                <Avatar size={35} icon={<Icon.CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
            </Col>
        </Space>
        <Button type="primary" block style={{marginTop:30}}>
            Trade
        </Button>
    </>
  );
}

export default MarketDrawer;
