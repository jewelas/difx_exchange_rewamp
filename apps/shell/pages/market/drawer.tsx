import React, { useEffect } from "react";
import { Row, Space, Avatar, Typography, Col, Button, Anchor } from "antd";
import Text from "antd/lib/typography/Text";
import { Icon } from "@difx/core-ui";
import { CoinDrawerInfo } from "./styled";
// import { IconButton } from "@difx/core-ui";

const { Title, Paragraph } = Typography;

export function MarketDrawer() {

    // useEffect(() => {
    //     console.log(pair)
    // }, [pair])
  return (
    <>
        <Row>
            <Space>
                <Avatar size={41} icon={<Icon.CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/>
                <Title level={5} style={{marginBottom:0}}>BTC</Title>
                <Text type="secondary">Bitcoin</Text>
            </Space>
        </Row>
        <CoinDrawerInfo>
            <Row align="middle" justify="space-between">
                <Col>
                    <Text type="secondary">Market Cap</Text>
                </Col>
                <Col>
                    <Text strong>$767.27B</Text>
                </Col>
            </Row>
            <Row align="middle" justify="space-between">
                <Col>
                    <Text type="secondary">Favoriting rate</Text>
                </Col>
                <Text strong>72.18%</Text>
            </Row>
            <Row align="middle" justify="space-between">
                <Col>
                    <Text type="secondary">All - time high</Text>
                </Col>
                <Text strong>$69,0445 (11-10-2021)</Text>
            </Row>
            <Row align="middle" justify="space-between">
                <Col>
                    <Text type="secondary">ALL - time low</Text>
                </Col>
                <Text strong>$67.81 (07-062013)</Text>
            </Row>
            <Row align="middle" justify="space-between">
                <Col>
                    <Text type="secondary">Launch date</Text>
                </Col>
                <Text strong>10-30-2008</Text>
            </Row>
            <Row align="middle" justify="space-between">
                <Col>
                    <Text type="secondary">Blockchain</Text>
                </Col>
                <Text strong>BTC</Text>
            </Row>
        </CoinDrawerInfo>
        <Title level={5}>About BTC</Title>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            adipng. Lorem ipsum dolor sit amet, consectetur adipiscing elitadipng. 
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
