import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Col, Row } from "antd";
import Link from "next/link";
import AppLayout from "..";
import ForgotForm from "./../../components/forgot/ForgotForm";
import PageStyled from "./styled";

/* eslint-disable-next-line */
export interface ForgotPageProps {}

export function ForgotPage(props: ForgotPageProps) {
  return (
    <AppLayout>
      <PageStyled>
        <Row className="row-group">
          <Col className="col-group" xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level="H4">{t("forgot.forgot")}</Typography>

            <ForgotForm />

            <div className="left-right">
              <div className="left">
                <Typography level="B1">
                  {t("signin.new_account")}{" "}
                  <Link href="/register">{t("common.register")}</Link>
                </Typography>
              </div>
              <div className="right.forgot-pass">
                <Typography level="B1">
                  <Link href="/login">{t("common.have_acc")}</Link>
                </Typography>
              </div>
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default ForgotPage;
