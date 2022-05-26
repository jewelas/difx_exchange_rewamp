/* eslint-disable react-hooks/exhaustive-deps */
import { Icon, Typography } from '@difx/core-ui';
import { isLoggedInAtom } from '@difx/shared';
import { Button, Col, Row } from 'antd';
import { useAtomValue } from "jotai/utils";
import { useRouter } from "next/router";
import React from "react";
import StakingWrapper from './../../components/staking/StakingWrapper';
import AppLayout from "../index.page";
import { PageStyled } from "./styled";

/* eslint-disable-next-line */
export interface StakingPageProps {
}

export function StakingPage(props: StakingPageProps) {

  const isLoggedIn = useAtomValue(isLoggedInAtom);

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
                    <Button disabled={!isLoggedIn} onClick={() => { router.push('/staking-history') }} className="l" type="primary" ghost>Order History</Button>
                    <Button className="r" type="primary">Earning</Button>
                  </div>
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
            </Row>
          </Col>
        </Row>
        {
          isLoggedIn &&
          <StakingWrapper />
        }
      </PageStyled>
    </AppLayout>
  );
}

export default StakingPage;
