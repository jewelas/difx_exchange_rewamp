import { useState } from "react";
import OtpInput from 'react-otp-input';
import Wrapper from "./style"

export interface OTPBoxInterface {
  value: string,
  numInputs: number,
  handleChange: any,
}

export function OTPBox({value, numInputs, handleChange} : OTPBoxInterface) {

  return(
    <Wrapper>
      <OtpInput
        value={value.substring(0,6)}
        onChange={handleChange}
        numInputs={numInputs}
        containerStyle="otpContainer"
        inputStyle="otpbox"
      />
    </Wrapper>
  )
}