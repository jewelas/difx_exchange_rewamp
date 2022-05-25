import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../index.page";
import PageStyled from "./styled";
import TwoFactorForm from "../../components/two-factor/TwoFactorForm";

/* eslint-disable-next-line */
export interface TwoFactorProps {}

export function TwoFactorPage(props: TwoFactorProps) {
  const [restricted, setRestricted] = useState(false)
  const [sessionId, setSessionId] = useState()

  const router = useRouter()

  useEffect(()=>{
    const extraAuth = JSON.parse(localStorage?.getItem("extraAuthRequired"))
    if(!extraAuth || extraAuth.type != "TFA"){
      setRestricted(true)
    }else{
      setSessionId(extraAuth.details.session_id)
    }
  },[])

  if(restricted){
    router.push("/home")
    return null;
  }

  return (
    <AppLayout>
      <PageStyled>
        <Row className="row-group">
          <Col className="col-group" xs={24} sm={20} md={16} lg={14} xl={10}>
            <Typography level="H4">{t("2fa.2fa")}</Typography>
            <Typography level="B2">
              {t("2fa.enter_code")}
            </Typography>
            <div className="form">
              <TwoFactorForm sessionId={sessionId}/>
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default TwoFactorPage;
