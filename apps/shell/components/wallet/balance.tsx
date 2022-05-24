import React from "react";
import { Button, Divider, Space } from "antd";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { TopBalanceWrapper } from "./styled";
import TotalBalance from "./totalBalance";
import OverviewBalance from "./overviewBalance";

export interface TopBalanceInterface{
    type: string,
    heading: string,
    amount: string,
    currency: string,
    overviewHeading: string,
    overviewAmount: string,
    overviewCurrency: string,
    bgImage: string
}

export function TopBalance({
    type, heading, amount, currency,
    overviewHeading, overviewAmount, overviewCurrency, 
    }: TopBalanceInterface) {
    return (
        <TopBalanceWrapper>
            <div className="total-balance-wrapper">
                <div className="bg-img-abs-right">
                    <img src={`/imgs/as.svg`} alt="" />
                </div>
                <Space split={<Divider type="vertical" />} size={20}>
                    <TotalBalance heading={heading} amount={amount} currency={currency} />
                    {type === "spot" ? 
                    <div className="total-balance yesterday-pl">
                        <div className="total-balance-heading">
                            <p>{t("wallet.yesterday_pl")} (BTC)</p>
                        </div>
                        <h4>0.00</h4>
                        <h6>≈ $0.00</h6>
                    </div>
                    :
                    null
                    }
                    {type === "overview" ? null :
                        <OverviewBalance overviewHeading={overviewHeading} overviewAmount={overviewAmount} overviewCurrency={overviewCurrency} />
                    }
                </Space>
                {type == "overview" ? 
                    <Space className="wallet-btn-group">
                        <Button type="primary">{t("wallet.deposit")}</Button>
                        <Button type="ghost">{t("wallet.withdraw")}</Button>
                        <Button type="ghost">{t("wallet.transfer")}</Button>
                    </Space>
                :
                null
                }
                {type === "spot" ?
                    <Space className="wallet-btn-group">
                        <Button type="primary">{t("wallet.deposit")}</Button>
                        <Button type="ghost">{t("wallet.withdraw")}</Button>
                        <Button type="ghost">{t("wallet.transfer")}</Button>
                        <Button type="link" icon={<Icon.EyeVisibleIcon width={16}/>} className="anchor-link"> {t("wallet.pl_analysis")}</Button>
                    </Space>
                :
                null
                }
                {type === "earn" ?
                    <Space className="wallet-btn-group">
                        <Button type="primary">{t("wallet.stake_now")}</Button>
                        <Button type="ghost">{t("wallet.history")}</Button>
                    </Space>
                :
                null
                }
                {type === "futures" ?
                    <Space className="wallet-btn-group">
                        <Button type="primary">{t("wallet.transfer")}</Button>
                        <Button type="ghost">{t("wallet.history")}</Button>
                    </Space>
                :
                null
                }
            </div>
        </TopBalanceWrapper>
    );
}

export default TopBalance;
