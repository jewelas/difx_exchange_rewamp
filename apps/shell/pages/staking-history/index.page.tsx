/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@difx/core-ui";
import { useAuth } from "@difx/shared";
import t from "@difx/locale";
import { Button, Tabs } from 'antd';
import { useRouter } from "next/router";
import AppLayout from "../index.page";
import TableWrapper from "./../../components/staking-history/TableWrapper";
import { PageStyled } from "./styled";

/* eslint-disable-next-line */
export interface StakingHistoryPageProps {
}

export function StakingHistoryPage(props: StakingHistoryPageProps) {
  const { TabPane } = Tabs;
  const router = useRouter();

  const { isLoggedIn } = useAuth();

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
          {
            isLoggedIn ? <TableWrapper />
              :
              <div style={{ display: 'flex', justifyContent: 'center' }}><Button htmlType="button" onClick={() => { router.push('/login') }}>Login in or Sign up</Button></div>
          }
        </div>
      </PageStyled>
    </AppLayout>
  );
}

export default StakingHistoryPage;
