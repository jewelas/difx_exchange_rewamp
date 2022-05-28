import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../index.page";
import PageStyled from "./styled";
import VerifyOTPForm from "../../components/verify-otp/VerifyOTPForm";

/* eslint-disable-next-line */
export interface TwoFactorProps {}

export function TwoFactorPage(props: TwoFactorProps) {
  const [restricted, setRestricted] = useState(false)
  const [sessionDetails, setSessionDetails] = useState(null)

  const router = useRouter()

  useEffect(()=>{
    const extraAuth = JSON.parse(localStorage?.getItem("extraAuthRequired"))
    if(!extraAuth || extraAuth.type != "VERIFICATION_REQUIRED"){
      setRestricted(true)
    }else{
      setSessionDetails(extraAuth.details)
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
            <Typography level="H4">{t("verify_otp.header")}</Typography>
            <Typography level="B2">
              {t("verify_otp.enter_code")}{sessionDetails?.id}
            </Typography>
            <div className="form">
              <VerifyOTPForm sessionDetails={sessionDetails}/>
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default TwoFactorPage;
