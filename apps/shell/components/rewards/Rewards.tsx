import { Row, Col } from "antd";
import t from "@difx/locale";
import RewardsTracking from "./RewardsTracking";
import RewardsCampaigns from "./RewardsCampaigns";
import LeaderBoard from "./LeaderBoard";
import FAQ from "./Faq";
import { RewardsContentStyled, PageStyled } from "./styled";

export function Rewards() {
  return (
    <PageStyled>
      <RewardsContentStyled>
        <div className="bg-image">
          <div className="reward-card">
            <Row justify="center" className="reward-title">
              <Col span={8}>
                <div className="reward-main-title">
                  <div>{t("rewards.register_and_earn")}</div>
                  <div className="point-description">
                    <b>$500</b> {t("rewards.worth_of_difx_point")}
                  </div>
                </div>

                <div className="reward-description-top">
                  {t("rewards.title_description")}
                </div>
              </Col>
              <Col span={8} className="card-grid">
                <RewardsTracking />
              </Col>
            </Row>
          </div>
        </div>

        <Row justify="center" className="rewards-campaigns-main">
          <Col span={16}>
            <RewardsCampaigns />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={16}>
            <LeaderBoard />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={16}>
            <FAQ />
          </Col>
        </Row>
      </RewardsContentStyled>
    </PageStyled>
  );
}

export default Rewards;
