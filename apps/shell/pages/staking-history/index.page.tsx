/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@difx/core-ui";
import React from "react";
import t from "@difx/locale";
import { useRouter } from "next/router";
import { Button, Tabs, DatePicker } from 'antd';
import AppLayout from "../index.page";
import { PageStyled } from "./styled";

/* eslint-disable-next-line */
export interface StakingHistoryPageProps {
}

export function StakingHistoryPage(props: StakingHistoryPageProps) {

  const { TabPane } = Tabs;
  const { RangePicker } = DatePicker;
  const router = useRouter();

  return (
    <AppLayout>
      <PageStyled>
        <div className="head">
          <div className="left"><Typography fontWeight={600} fontSize={30} lineHeight={38}>{t("staking.staking-history")}</Typography></div>
          <div className="right">
            <Button onClick={()=>{router.push('/staking')}} className="first">{t("staking.view-staking")}</Button>
            <Button>{t("staking.export")}</Button>
          </div>
        </div>
        <div className="content">
          <div className="tab-groups">
            <Tabs defaultActiveKey="subscription" onChange={(e) => { /**todo */ }}>
              <TabPane tab="Subscription" key="subscription" />
              <TabPane tab="Interest" key="interest" />
            </Tabs>
          </div>
          <div className="filter">
            <div className="date">
              <div className="date-title">{t("staking.date")}</div>
              <RangePicker />
            </div>
            <Button className="first" type="primary">{t("staking.search")}</Button>
            <Button>{t("staking.reset")}</Button>
          </div>
          <div className="table-group">

          </div>
        </div>
      </PageStyled>
    </AppLayout>
  );
}

export default StakingHistoryPage;
