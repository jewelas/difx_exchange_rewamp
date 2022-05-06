import React from "react";
import { Avatar, Card, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { CoinText } from "./styled";

export function GridView() {
  return (
    <Row gutter={16}>
        <Col span={6}>
            <Card>
                <Row justify="space-between" align="middle">
                    <Col>
                    <CoinText>
                        <Avatar size={34} src="https://joeschmoe.io/api/v1/random"/>
                        <Text>BTC <Text type="secondary">/ USDT</Text></Text>
                    </CoinText>
                    </Col>
                    <Col>
                        Chart
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text type="secondary">
                            Last Price
                        </Text>
                        <Text>$34534.28</Text>
                    </Col>
                    <Col>
                        <Text type="secondary">
                            Last Price
                        </Text>
                        <Text type="success">$34534.28</Text>
                    </Col>
                    <Col>
                        <Text type="secondary">
                            Last Price
                        </Text>
                        <Text>$34534.28 <Text type="secondary">BTC</Text></Text>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
  );
}

export default GridView;
