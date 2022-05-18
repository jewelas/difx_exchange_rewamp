/* eslint-disable react-hooks/exhaustive-deps */
import { SearchOutlined } from '@ant-design/icons';
import { API_ENDPOINT, QUERY_KEY } from '@difx/constants';
import { Icon, Loading, NoData, Typography } from '@difx/core-ui';
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { Balance, Staking, useAuth, useHttpGet, useHttpGetByEvent, useSocketProps, useSocketByEvent, SocketEvent } from '@difx/shared';
import { Button, Checkbox, Col, Input, Row } from 'antd';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useState } from "react";
import Card from '../../components/staking/Card';
import ModalStacking from "../../components/staking/ModalStacking";
import AppLayout from "../index.page";
import { PageStyled } from "./styled";

/* eslint-disable-next-line */
export interface StakingPageProps {
}

export function StakingPage(props: StakingPageProps) {

  const router = useRouter();

  const getBalancesSuccess = (response: AxiosResponse<Array<Balance>>) => {
    if (response.data) {
      setBalances(response.data);
    }
  }

  const { data: stakingData, isLoading } = useHttpGet<null, Array<Staking>>(QUERY_KEY.STAKING, API_ENDPOINT.GET_STAKING_LIST, null);
  const { mutate: getBalances } = useHttpGetByEvent<any, Array<Balance>>({ onSuccess: getBalancesSuccess, endpoint: API_ENDPOINT.GET_BALANCE });

  const [stakingList, setStakingList] = useState<Array<Staking>>([]);
  const [currentStaking, setCurrentStaking] = useState(null);
  const [detailIndex, setDetailIndex] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [balances, setBalances] = useState<Array<Balance>>(null);

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) getBalances(null);
  }, [isLoggedIn]);

  const getBalanceSocketSuccess = (balanceSocketData: any) => {
    if (balanceSocketData) {
      const index = balances.findIndex(e => e.currency === balanceSocketData.currency);
      if (index !== -1) {
        balances[index].amount += balanceSocketData.change;
        setBalances(balances);
      }
    }
  }
  const param: useSocketProps = {
    event: SocketEvent.user_balances,
    onSuccess: getBalanceSocketSuccess
  };
  const { send } = useSocketByEvent(param);

  useEffect(() => {
    setStakingList(stakingData)
  }, [stakingData]);

  const onSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filteredData = stakingList.filter(e => e.coin.includes(value));
      setStakingList(filteredData);
    } else {
      setStakingList(stakingData)
    }
  }

  const onFilterAvailableStaking = (isChecked: boolean) => {
    if (isChecked) {
      const stakingListClone = [];
      for (const staking of stakingList) {
        const stakingClone = { ...staking };
        const st_conf_detail = [...stakingClone.st_conf_detail.filter(e => e.amount_cap >= e.min_amount)];
        stakingClone.st_conf_detail = st_conf_detail;
        stakingListClone.push(stakingClone);
      }
      setStakingList(stakingListClone);
    } else {
      setStakingList(stakingData);
    }

  }

  const onStake = (data: Staking, detailIndex) => {
    setCurrentStaking(data);
    setDetailIndex(detailIndex);
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
                    <Button onClick={()=>{router.push('/staking-history')}} className="l" type="primary" ghost>Order History</Button>
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
                <Checkbox onChange={(value) => { onFilterAvailableStaking(value.target.checked) }}>Show available only</Checkbox>
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
                      !isEmpty(e) && !isEmpty(e.st_conf_detail) &&
                      <Card key={`staking_card_${e.id}_${e.coin}`}
                        onStake={onStake}
                        data={e}
                      />
                    )
                    :
                    <NoData />
                }
              </Col>
          }
        </Row>
        <ModalStacking
          balance={(balances && currentStaking) ? balances.find(bal => bal.currency === currentStaking.coin) : null}
          data={currentStaking}
          configIndex={detailIndex}
          setConfigIndex={setDetailIndex}
          title='Locking Stacking'
          visible={isShowModal}
          onCancel={() => { setIsShowModal(false) }} 
          onSubmit={()=>{send()}}
          />
      </PageStyled>
    </AppLayout>
  );
}

export default StakingPage;
