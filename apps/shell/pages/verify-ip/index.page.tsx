import { Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../index.page";
import PageStyled from "./styled";
import VerifyIpForm from "../../components/verify-ip/VerifyIpForm";

/* eslint-disable-next-line */
export interface VerifyIpProps {}

export function VeipfyIPPage(props: VerifyIpProps) {
  const [userEmail, setUserEmail] = useState()
  const [restricted, setRestricted] = useState(false)

  const router = useRouter()

  useEffect(()=>{
    const extraAuth = JSON.parse(localStorage?.getItem("extraAuthRequired"))
    if(!extraAuth || extraAuth.type != "IP_VERIFICATION"){
      setRestricted(true)
    }else{
      setUserEmail(extraAuth.details.email)
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
            <Typography level="H4">{t("verify_ip.header")}</Typography>
            <Typography level="B2">
              Enter the security code sent to {userEmail}
            </Typography>
            <div className="form">
              <VerifyIpForm userEmail={userEmail} />
            </div>
          </Col>
        </Row>
      </PageStyled>
    </AppLayout>
  );
}

export default VeipfyIPPage;
