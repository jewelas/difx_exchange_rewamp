import { useRouter } from "next/router";
import React from "react";
import { Row, Col, Button, Checkbox, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Typography, Icon } from '@difx/core-ui'
import AppLayout from "..";
import { PageStyled } from "./styled";
import Card from './../../components/staking/Card';

/* eslint-disable-next-line */
export interface StakingPageProps {
  isStaticWidgets?: boolean;
}

export function StakingPage({ isStaticWidgets = false }: StakingPageProps) {

  const router = useRouter();

  return (
    <AppLayout>
      <PageStyled>
        <Row className="head">
          <Col span={21}>

            <Row>
              <Col className="left" span={16}>
                <Typography level="H2">Start Staking to Enjoy High Earnings</Typography>
                <Typography level="H6">
                  Dummy text Empowering users with a fully insured cross-assset trading platform that guides them in buying and selling digital assets securely
                </Typography>
                <div>
                  <Button type='primary'>Start Earning</Button>
                </div>
                <div className="nav">
                  <Button ghost>
                    <Icon.CompodingIcon fill="#fff" />
                    <span>Compounding</span>
                  </Button>
                  <Button ghost>
                    <Icon.RewardIcon fill="#fff" />
                    <span>Rewards</span>
                  </Button>
                  <Button ghost>
                    <Icon.ExpandIcon fill="#fff" />
                    <span>Flexible Interest</span>
                  </Button>
                </div>

              </Col>
              <Col className="right" span={8}>
                <div className="card">
                  <div className="top">
                    <Typography level="B1">My Earnings</Typography>
                  </div>
                  <div className="center">
                    <div className="values">
                      <Typography level="B2">Est. APY</Typography>
                      <Typography level="H5">14.10%</Typography>
                    </div>
                    <div className="values">
                      <Typography level="B2">Min. Locked Amt.</Typography>
                      <Typography level="H5">100 USDT</Typography>
                    </div>
                  </div>
                  <div className="bottom">
                    <Button className="l" type="primary" ghost>Order History</Button>
                    <Button className="r" type="primary">Earning</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="info">
          <Col span={21}>
            <div className="left">
              <div className="locked-staking">
                <Typography fontSize={25} lineHeight={22} fontWeight={500}>Locked Staking</Typography>
              </div>
            </div>
            <div className="right">
              <div className="show-available">
                <Checkbox onChange={() => {console.log('...')}}>Show available only</Checkbox>
              </div>
              <div className="input-group">
                <Input placeholder="Search" prefix={<SearchOutlined />} />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="body">
          <Col className="card-group" span={21}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default StakingPage;
