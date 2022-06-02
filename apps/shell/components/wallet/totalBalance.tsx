import React from "react";
import { Icon } from "@difx/core-ui";

export function TotalBalance({heading, amount, currency, hideBalance, setHideBalance}) {
    

    return (
        <div className="total-balance">
            <div className="total-balance-heading">
                <p>{heading} (BTC)</p>
                <div className="hideBalanceBox" onClick={()=>setHideBalance(!hideBalance)} >
                {
                    hideBalance ?  <Icon.EyeHiddenIcon height={20}/> : <Icon.EyeVisibleIcon height={20}/> 
                }
                </div>
            </div>
            <h4>{ hideBalance ? "****" : amount }</h4>
            <h6>≈ ${hideBalance ? "****" : currency}</h6>
        </div>
    );
}

export default TotalBalance;
