/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { getCurrentDateByDateString } from "@difx/utils";
import { Button, DatePicker, Tabs } from 'antd';
import isEmpty from "lodash/isEmpty";
import moment, { Moment } from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import AppLayout from "../index.page";
import TableWrapper from "./../../components/staking-history/TableWrapper";
import { PageStyled } from "./styled";

/* eslint-disable-next-line */
export interface StakingHistoryPageProps {
}

export function StakingHistoryPage(props: StakingHistoryPageProps) {
  const { TabPane } = Tabs;
  const router = useRouter();

  return (
    <AppLayout>
      <PageStyled>
        <div className="head">
          <div className="left"><Typography fontWeight={600} fontSize={30} lineHeight={38}>{t("staking.staking-history")}</Typography></div>
          <div className="right">
            <Button onClick={() => { router.push('/staking') }} className="first">{t("staking.view-staking")}</Button>
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
          <TableWrapper />
        </div>
      </PageStyled>
    </AppLayout>
  );
}

export default StakingHistoryPage;
