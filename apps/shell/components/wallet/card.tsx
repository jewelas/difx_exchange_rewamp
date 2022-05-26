import { Col, Row } from "antd";
import React from "react";
import { AccountCardWrapper } from "./styled";

export function AccountCards({
    spotBalanceUSD,
    spotBalanceBTC,
    futureBalanceUSD,
    futureBalanceBTC,
    rewardsBalanceUSD,
    rewardsBalanceBTC,
    earnBalaceUSD,
    earnBalaceBTC 
}) {
  return (
    <AccountCardWrapper>
        <Row gutter={[16, 16]}>
            <Col xs={24} xl={6} sm={12}>
                <div className="wallet-card">
                    <div className="wallet-card-bg">
                        <img src={"/imgs/btc_card_bg.svg"} alt="" />
                    </div>
                    <div className="wallet-card-icon">
                        <img src={"/imgs/bitcoin-duotone.svg"} alt="" />
                        <h3>Spot Account</h3>
                    </div>
                    <div className="wallet-card-content">
                        <h6>{spotBalanceBTC} BTC</h6>
                        <span>≈ ${spotBalanceUSD}</span>
                    </div>
                </div>
            </Col>
            <Col xs={24} xl={6} sm={12}>
                <div className="wallet-card">
                    <div className="wallet-card-bg">
                        <img src={"/imgs/wallet_card_bg.svg"} alt="" />
                    </div>
                    <div className="wallet-card-icon">
                        <img src={"/imgs/wallet-duotone.svg"} alt="" />
                        <h3>Future Account</h3>
                    </div>
                    <div className="wallet-card-content">
                        <h6>{futureBalanceBTC} BTC</h6>
                        <span>≈ ${futureBalanceUSD}</span>
                    </div>
                </div>
            </Col>
            <Col xs={24} xl={6} sm={12}>
                <div className="wallet-card">
                    <div className="wallet-card-bg">
                        <img src={"/imgs/dollor_card_bg.svg"} alt="" />
                    </div>
                    <div className="wallet-card-icon">
                        <img src={"/imgs/earn-duotone.svg"} alt="" />
                        <h3>Earn</h3>
                    </div>
                    <div className="wallet-card-content">
                        <h6>{earnBalaceBTC} BTC</h6>
                        <span>≈ ${earnBalaceUSD}</span>
                    </div>
                </div>
            </Col>
            <Col xs={24} xl={6} sm={12}>
                <div className="wallet-card rewards-balance">
                    <div className="wallet-card-bg">
                        <img src={"/imgs/reward-card-bg.svg"} alt="" />
                    </div>
                    <div className="wallet-card-icon">
                        <img src={"/imgs/gifts-duotone.svg"} alt="" />
                        <h3>Rewards</h3>
                    </div>
                    <div className="wallet-card-content">
                        <h6>{rewardsBalanceBTC} BTC</h6>
                        <span>≈ ${rewardsBalanceUSD}</span>
                    </div>
                </div>
            </Col>
        </Row>
    </AccountCardWrapper>
  );
}

export default AccountCards;
