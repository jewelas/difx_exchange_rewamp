import React from "react";
import { Typography, Row, Col } from "antd";
import t from "@difx/locale";

const { Title } = Typography;
export function RewardsCampaigns() {
  return (
    <div>
      <Title level={3} className="data-title">
        {t("rewards.campaigns")}
      </Title>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <div className="rewards-campaigns-card">
            <div className="campaigns-card">
              <span className="rewards-campaigns-card-point">500</span>
              <span className="rewards-campaigns-card-point-us">
                {t("rewards.usdt")}
              </span>
            </div>
            <div className="rewards-campaigns-card-point-desc">
              <div className="spin-and-win">{t("rewards.spin_and_win")} </div>
              <span className="spin-and-win">$500</span>
              {t("rewards.worth_of_difx_point")}
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="rewards-campaigns-card">
            <div className="campaigns-card">
              <span className="rewards-campaigns-card-point">500</span>
              <span className="rewards-campaigns-card-point-us">
                {t("rewards.usdt")}
              </span>
            </div>
            <div className="rewards-campaigns-card-point-desc">
              <div className="spin-and-win">{t("rewards.spin_and_win")} </div>
              <span className="spin-and-win">$500</span>
              {t("rewards.worth_of_difx_point")}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RewardsCampaigns;
