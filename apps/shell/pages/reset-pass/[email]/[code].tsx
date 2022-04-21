import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import AppLayout from "../..";
import ResetPassForm from "../../../components/reset-pass/ResetPassForm";
import PageStyled from "./styled";

/* eslint-disable-next-line */
export interface ResetPassPageProps {}

export function ResetPassPage(props: ResetPassPageProps) {
  const router = useRouter();
  const { email, code } = router.query;

  return (
    <AppLayout>
      <PageStyled>
        <Row className="row-group">
          <Col className="col-group" xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level="H4">{t("resetPass.title")}</Typography>

            <ResetPassForm email={email as string} code={code as string} />

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

export default ResetPassPage;
