import { Icon, Typography } from "@difx/core-ui";
import { Button, Col, Row } from "antd";
import t from "@difx/locale";
import AppLayout from "../index.page";
import PageStyled from "./styled";
import LoginForm from "./../../components/login/LoginForm";
import QRContainer from "./../../components/login/QRContainer";
import { useState } from "react";

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const [QRLogin, setQRLogin] = useState<boolean>(false)

  return (
    <AppLayout>
      <PageStyled>
        <Row className="row-group box-container">
          <Col className="col-group" xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level="H4">{t("signin.login_in_difx")}</Typography>
            <Typography className="subtext" level="B2">{t("signin.check_correct_url")}</Typography>
            <div className="link">
              <Icon.LockIcon />
              <div>
                <span className="text-highlight">https://</span>
                difx.com
              </div>
            </div>

            
            {
              QRLogin === true ?
                <QRContainer /> 
              : 
                <LoginForm />
            }

            <div className="or">
              <div>Or</div>
            </div>
            {
              !QRLogin ? 
                <Button
                  htmlType="submit"
                  className="sign-in-qrcode"
                  onClick={()=>setQRLogin(!QRLogin)}
                >
                  <Icon.QRCodeIcon />
                  <span>{t("signin.login_qr")}</span>
                </Button>
              : 
                <Button
                    htmlType="submit"
                    className="sign-in-account"
                    onClick={()=>setQRLogin(!QRLogin)}
                  >
                    <span>{t("signin.login_account")}</span>
                  </Button>
            }
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default LoginPage;
