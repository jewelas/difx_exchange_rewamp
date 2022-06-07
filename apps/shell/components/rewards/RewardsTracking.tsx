import React, { useState } from "react";
import { Card, Steps } from "antd";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";

const { Step } = Steps;

export function RewardsTracking() {
  const [current, setCurrent] = useState(0);
  const onChange = (value: number) => {
    setCurrent(value);
  };
  return (
    <div className="main-container">
      <div className="sub-container">
        <Card style={{ width: 350 }} className="main-card">
          <Steps current={current} onChange={onChange} direction="vertical">
            <Step
              status="finish"
              icon={<Icon.SuccessTrackingTickIcon />}
              title="SIGN UP"
              description={
                <div>
                  {t("rewards.register_earn")}
                  <span className="step-desc">$10</span>
                </div>
              }
            />
            <Step
              icon={<Icon.SuccessTrackingTickIcon />}
              title="KYC"
              description={
                <div>
                  {t("rewards.verify_your_kyc_and_earn")}
                  <span className="step-desc">$20</span>
                </div>
              }
            />
            <Step
              icon={<Icon.BitCoinIcon />}
              title="DEPOSIT"
              description={
                <div>
                  {t("rewards.deposit_and_earn")}
                  <span className="step-desc">$50</span>
                </div>
              }
            />
            <Step
              icon={<Icon.BitCoinIcon />}
              title="TRADE"
              description={
                <div>
                  {t("rewards.trade_and_earn")}
                  <span className="step-desc">$10</span>
                </div>
              }
            />
          </Steps>
        </Card>
      </div>
    </div>
  );
}

export default RewardsTracking;
