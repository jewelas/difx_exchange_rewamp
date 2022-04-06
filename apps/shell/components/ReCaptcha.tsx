import React from 'react';
import { ReCaptcha as GoogleReCaptcha, ReCAPTCHA } from 'react-recaptcha-google';

export interface ReCaptchaProps {
    _ref:React.MutableRefObject<ReCAPTCHA>;
    onChange: (token:string)=>void;
}

const ReCaptcha = ({_ref, onChange}: ReCaptchaProps)=>{
    return(
        <GoogleReCaptcha
        ref={_ref}
        size="invisible"
        sitekey="6Le1Qk4fAAAAAM6bANuFLAgCSYEjARrib_kNBTLT"
        verifyCallback={(token:string)=>{console.log('tokeee', token)}}
        onChange={onChange}
      />
    )
}

export default ReCaptcha;