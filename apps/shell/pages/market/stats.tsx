import React from "react";
import { Avatar, Card, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";

const { LogoIcon } = Icon;

export function Stats() {
  return (
    <Row gutter={16}>
        <Col span={6}>
            <Card title={t("market.top_gainer")} bordered={false}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} />
                        <Text>BTC</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>BTC</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>BTC</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>LINK</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>LINK</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>LINK</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>BTC</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>BTC</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>BTC</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>BTC</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>BTC</Text>
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
                        <Avatar icon={<LogoIcon width={20} height={20} />} size={34} src="https://joeschmoe.io/api/v1/random" />
                        <Text>BTC</Text>
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

export default Stats;
