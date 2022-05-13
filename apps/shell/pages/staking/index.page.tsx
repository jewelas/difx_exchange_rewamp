import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import isEmpty from 'lodash/isEmpty';
import { Row, Col, Button, Checkbox, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Typography, Icon, Loading, NoData } from '@difx/core-ui';
import { QUERY_KEY, API_ENDPOINT } from '@difx/constants';
import { Staking, useHttpGet } from '@difx/shared'
import AppLayout from "../index.page";
import { PageStyled } from "./styled";
import Card from '../../components/staking/Card';
import ModalStacking from "../../components/staking/ModalStacking";

/* eslint-disable-next-line */
export interface StakingPageProps {
  isStaticWidgets?: boolean;
}

export function StakingPage({ isStaticWidgets = false }: StakingPageProps) {

  const router = useRouter();
  const { data: stakingData, isLoading } = useHttpGet<null, Array<Staking>>(QUERY_KEY.STAKING, API_ENDPOINT.GET_STAKING_LIST, null);
  const [stakingList, setStakingList] = useState<Array<Staking>>([]);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setStakingList(stakingData)
  }, [stakingData]);

  const onSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filteredData = stakingList.filter(e => e.coin.includes(value) || e.apy === value);
      setStakingList(filteredData);
    } else {
      setStakingList(stakingData)
    }
  }

  const onStake = () => {
    setIsShowModal(true);
  }

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
        <Row className="info">
          <Col span={21}>
            <div className="left">
              <div className="locked-staking">
                <Typography fontSize={25} lineHeight={22} fontWeight={500}>Locked Staking</Typography>
              </div>
            </div>
            <div className="right">
              <div className="show-available">
                <Checkbox onChange={() => { console.log('...') }}>Show available only</Checkbox>
              </div>
              <div className="input-group">
                <Input onChange={onSearch} placeholder="Search" prefix={<SearchOutlined />} />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="body">
          {
            isLoading
              ?
              <Col className="card-group" span={21}>
                <Loading type='component' />
                <Loading type='component' />
                <Loading type='component' />
              </Col>
              :
              <Col className="card-group" span={21}>
                {
                  !isEmpty(stakingList)
                    ?
                    stakingList.map(e =>
                      !isEmpty(e) && <Card onStake={onStake} key={`${e.coin}_${e.apy}`} data={e} />
                    )
                    :
                    <NoData />
                }
              </Col>
          }
        </Row>
        <ModalStacking title='Locking Stacking' visible={isShowModal} onCancel={() => { setIsShowModal(false) }} />
      </PageStyled>
    </AppLayout>
  );
}

export default StakingPage;
