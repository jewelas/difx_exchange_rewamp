/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { LoginSignUpButton, Typography } from "@difx/core-ui";
import { isLoggedInAtom } from "@difx/shared";
import { CSVLink } from "react-csv";
import { useState } from "react";
import { useAtomValue } from "jotai/utils";
import t from "@difx/locale";
import { Button, Tabs } from 'antd';
import { useRouter } from "next/router";
import AppLayout from "../index.page";
import TableSubscriptionWrapper from "../../components/staking-history/TableSubscriptionWrapper";
import TableInterestWrapper from "../../components/staking-history/TableInterestWrapper";
import { PageStyled } from "./styled";

/* eslint-disable-next-line */
export interface StakingHistoryPageProps {
}

export function StakingHistoryPage(props: StakingHistoryPageProps) {
  const { TabPane } = Tabs;
  const router = useRouter();

  const [headerDataForExporting, setHeaderForExporting] = useState<any[]>([]);
  const [bodyDataForExporting, setBodyForExporting] = useState([]);

  const isLoggedIn = useAtomValue(isLoggedInAtom);

  const [tab, setTab] = useState("subscription");

  return (
    <AppLayout>
      <PageStyled>
        <div className="head">
          <div className="left"><Typography fontWeight={600} fontSize={30} lineHeight={38}>{t("staking.staking-history")}</Typography></div>
          <div className="right">
            <Button onClick={() => { router.push('/staking') }} className="first">{t("staking.view-staking")}</Button>
            <CSVLink filename={`${tab}-${new Date().toLocaleString()}`} data={bodyDataForExporting} headers={headerDataForExporting}>
              <Button>{t("staking.export")}</Button>
            </CSVLink>
          </div>
        </div>
        <div className="content">
          <div className="tab-groups">
            <Tabs defaultActiveKey="subscription" onChange={(e: any) => { setTab(e) }}>
              <TabPane tab="Subscription" key="subscription" />
              <TabPane tab="Interest" key="interest" />
            </Tabs>
          </div>
          {
            isLoggedIn ? (tab === 'subscription' ?
              <TableSubscriptionWrapper setHeaderForExporting={setHeaderForExporting} setBodyForExporting={setBodyForExporting}/> :
              <TableInterestWrapper setHeaderForExporting={setHeaderForExporting} setBodyForExporting={setBodyForExporting}/>
            )
              :
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LoginSignUpButton />
              </div>
          }
        </div>
      </PageStyled>
    </AppLayout>
  );
}

export default StakingHistoryPage;
