import React from "react";

export function OverviewPNL({overviewHeading, overviewCurrency, overviewAmount, hideBalance}) {
    return (
        <div className="total-balance overview-pl">
            <div className="total-balance-heading">
                <p>{overviewHeading}</p>
            </div>
            <h4>{hideBalance ? "****" : overviewAmount}</h4>
            <h6>≈ ${hideBalance ? "****" : overviewCurrency}</h6>
        </div>
    );
}

export default OverviewPNL;
