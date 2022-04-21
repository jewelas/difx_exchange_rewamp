import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "..";
import PageStyled from "./styled";
import TwoFactorForm from "./../../components/two-factor/TwoFactorForm";

/* eslint-disable-next-line */
export interface TwoFactorProps {}

export function TwoFactorPage(props: TwoFactorProps) {
  const [value, setValue] = useState("");
  const [init, setInit] = useState(false);
  const [twoFaToken, setTwoFaToken] = useState(null);

  useEffect(() => {
    const loginFormData = JSON.parse(localStorage.getItem("loginFormData"));
    if (loginFormData) {
      setValue(
        loginFormData["phonenumber"]
          ? `+${loginFormData["phonenumber"]}`
          : loginFormData["email"]
      );
    }

    setInit(true);
    setTwoFaToken(localStorage.getItem("twoFaToken"));
  }, []);

  const router = useRouter();

  if (init && !twoFaToken) {
    router.push("/login");
    return null;
  }

  return (
    <AppLayout>
      <PageStyled>
        <Row className="row-group">
          <Col className="col-group" xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level="H4">{t("2fa.2fa")}</Typography>
            <Typography level="B2">
              Enter the security code sent to {value}
            </Typography>
            <div className="form">
              <TwoFactorForm />
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default TwoFactorPage;
