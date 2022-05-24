import React from "react";
import { Icon } from "@difx/core-ui";

export function TotalBalance({heading, amount, currency}) {
    return (
        <div className="total-balance">
            <div className="total-balance-heading">
                <p>{heading} (BTC)</p>
                <Icon.EyeVisibleIcon />
            </div>
            <h4>{amount}</h4>
            <h6>≈ ${currency}</h6>
        </div>
    );
}

export default TotalBalance;
