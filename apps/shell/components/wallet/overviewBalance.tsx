import React from "react";

export function OverviewBalance({overviewHeading, overviewCurrency, overviewAmount}) {
    return (
        <div className="total-balance overview-pl">
            <div className="total-balance-heading">
                <p>{overviewHeading}</p>
            </div>
            <h4>{overviewAmount}</h4>
            <h6>≈ ${overviewCurrency}</h6>
        </div>
    );
}

export default OverviewBalance;
