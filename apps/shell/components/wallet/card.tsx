import { useHttpGet } from "@difx/shared";
import { Col, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { AccountCardWrapper } from "./styled";
import { API_ENDPOINT, QUERY_KEY } from '@difx/constants';

export function AccountCards() {
    // const { data: walletOverviewData, isLoading } = useHttpGet<null, null>(QUERY_KEY.WALLET_OVERVIEW, API_ENDPOINT.GET_WALLET_OVERVIEW, null);

    // const [walletOverview, setWalletOverview] = useState([])

    // useEffect(() => {
    //     setWalletOverview(walletOverviewData)
    //   }, [walletOverviewData]);

    //   console.log("nitin", walletOverview)
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
                        <h6>0.00 BTC</h6>
                        <span>≈ $0.00</span>
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
                        <h6>0.00 BTC</h6>
                        <span>≈ $0.00</span>
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
                        <h6>0.00 BTC</h6>
                        <span>≈ $0.00</span>
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
                        <h3>Spot Account</h3>
                    </div>
                    <div className="wallet-card-content">
                        <h6>0.00 BTC</h6>
                        <span>≈ $0.00</span>
                    </div>
                </div>
            </Col>
        </Row>
    </AccountCardWrapper>
  );
}

export default AccountCards;
