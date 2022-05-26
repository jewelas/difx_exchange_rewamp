import { Steps } from "antd";
import React from "react";
import { StepperWrapper } from "./styled";

const { Step } = Steps;
/* eslint-disable @next/next/no-img-element */
export function WalletStepper() {
    return (
        <StepperWrapper>
            <div className="wallet-stepper-topright">
                <img src={"/imgs/stepper_bitcoin_bg.svg"} alt="" />
            </div>
            <div className="wallet-stepper-leftbottom">
                <img src={"/imgs/stepper_bitcoin_bg.svg"} alt="" />
            </div>
            <Steps current={4}>
                <Step title="Copy address" description="Choose the crypto and its network." icon={1}/>
                <Step title="Initiate a withdrawal" description="Choose the crypto and its network." icon={2} />
                <Step title="Network confirmation" description="Choose the crypto and its network." icon={3} />
                <Step title="Deposit Successful" description="Choose the crypto and its network." icon={4} />
            </Steps>
        </StepperWrapper>
    );
}

export default WalletStepper;
