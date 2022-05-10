import { Color, Icon, Typography } from "@difx/core-ui";
import { Button, Col, Row } from "antd";
import t from "@difx/locale";
import Link from "next/link";
import AppLayout from "../index.page";
import PageStyled from "./styled";
import LoginForm from "../../components/login/LoginForm";

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  return (
    <AppLayout>
      <PageStyled>
        <Row className="row-group">
          <Col className="col-group" xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level="H4">{t("signin.login_in_difx")}</Typography>
            <Typography level="B2">{t("signin.check_correct_url")}</Typography>
            <div className="link">
              <Icon.LockIcon />
              <div>
                <span style={{ color: `${({ theme }) => theme.color.success}` }}>https://</span>
                difx.com
              </div>
            </div>

            <LoginForm />

            <div className="left-right">
              <div className="left">
                <Typography level="B1">
                  {t("signin.new_account")}{" "}
                  <Link href="/register">{t("common.register")}</Link>
                </Typography>
              </div>
              <div className="right.forgot-pass">
                <Typography level="B1">
                  <Link href="/forgot">{t("common.forgot_password")}</Link>
                </Typography>
              </div>
            </div>
            <div className="or">
              <div>Or</div>
            </div>
            <Button
              htmlType="submit"
              className="sign-in-qrcode"
            >
              <Icon.QRCodeIcon />
              <span>{t("signin.login_qr")}</span>
            </Button>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default LoginPage;
