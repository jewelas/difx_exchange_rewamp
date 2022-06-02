import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Col, Row } from "antd";
import React from "react";
import AppLayout from "../index.page";
import RegisterFormComponent from "../../components/register/RegisterForm";
import { PageStyled } from "./styled";
import CoverImage from "./svg/CoverImage";

/* eslint-disable-next-line */
export interface RegisterPageProps {}

export function RegisterPage(props: RegisterPageProps) {
  return (
    <AppLayout>
      <PageStyled>
        <Row className="contentBox">
          <Col className="left-side" md={{ span: 16 }}>
            <div className="message">
              <Typography level={"H2"} >{t("register.message1")}</Typography>
              <Typography level={"H1"} className="active">
                {t("register.message2")}
              </Typography>
              <Typography level={"H5"} className="muted">
                {t("register.message3")}
              </Typography>
            </div>
            <div className="cover-group">
              <CoverImage />
            </div>
          </Col>
          <Col className="right-side" md={{ span: 8 }}>
            <RegisterFormComponent />
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default RegisterPage;
