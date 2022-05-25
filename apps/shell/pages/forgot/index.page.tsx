import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Col, Row, Tabs } from "antd";
import Link from "next/link";
import AppLayout from "../index.page";
import {PageStyled} from "./styled";
import ForgotForm from "../../components/forgot/ForgotForm";
import ResetPassForm from "../../components/forgot/ResetPassForm";
import VerificationForm from "../../components/forgot/VerificationForm";
import { useRef, useState } from "react";

const { TabPane } = Tabs;

/* eslint-disable-next-line */
export interface ForgotPageProps {}

export function ForgotPage(props: ForgotPageProps) {

  const [tab, setTab] = useState('forgot')
  const [email, setEmail] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [token, setToken] = useState(null)

  return (
    <AppLayout>
      <PageStyled>
        <Row className="row-group">
          <Col className="col-group" xs={24} sm={20} md={16} lg={14} xl={10}>
            <Tabs defaultActiveKey="1" activeKey={tab} animated={true}>
              <TabPane key="forgot">
                <Typography level="H4">{t("forgot.forgot")}</Typography>
                <ForgotForm setTab={setTab} setEmail={setEmail} setPhoneNumber={setPhoneNumber} /> 
              </TabPane>
              <TabPane disabled key="verify">
                <Typography level="H4">{t("forgot.verify")}</Typography>
                <VerificationForm setTab={setTab} email={email} phoneNumber={phoneNumber} setToken={setToken}/> 
              </TabPane>
              <TabPane key="reset">
                <Typography level="H4">{t("forgot.reset")}</Typography>
                <ResetPassForm email={email} phoneNumber={phoneNumber} token={token} />
              </TabPane>
            </Tabs>
            {
              tab === "forgot" ?
                <div className="left-right">
                  <div className="left">
                    <Typography level="B1">
                      {t("signin.new_account")}{" "}
                      <Link href="/register">{t("common.register")}</Link>
                    </Typography>
                  </div>
                  <div className="right">
                    <Typography level="B1">
                      <Link href="/login">{t("common.have_acc")}</Link>
                    </Typography>
                  </div>
                </div>
              :
                null
              }
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default ForgotPage;
