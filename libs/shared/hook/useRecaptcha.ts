import { useEffect } from "react";
import { CaptchaType } from "@difx/shared";

export const useRecaptcha = () => {

  useEffect(()=>{
    const googleCaptchaScript = document.createElement('script');
    const geetestCaptchaScript = document.createElement('script');
    googleCaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NX_GOOGLE_CAPTCHA_ID}&trustedtypes=true`;
    geetestCaptchaScript.src = `https://static.geetest.com/v4/gt4.js`;
    googleCaptchaScript.id = 'googleCaptcha';
    geetestCaptchaScript.id = 'geetestCaptcha';
    document.body.appendChild(googleCaptchaScript);
    document.body.appendChild(geetestCaptchaScript);

    return () => {
      document.body.removeChild(googleCaptchaScript);
      document.body.removeChild(geetestCaptchaScript);
    }
  },[])

  const getCaptcha = (captchaType: string) => {
    return new Promise((resolve,reject)=>{
      try{
        if(captchaType === "GOOGLE"){
          // @ts-ignore:next-line
          grecaptcha.ready(function() {
            // @ts-ignore:next-line
            grecaptcha.execute(process.env.NX_GOOGLE_CAPTCHA_ID).then((token: string)=>{
                resolve(token)
            });
          });
        }else{
          // @ts-ignore:next-line
          initGeetest4({ 
            product: 'bind',
            captchaId: '647f5ed2ed8acb4be36784e01556bb71',
            language: 'en' 
          },function (captchaObj) { 
            captchaObj.onReady(()=>{
              captchaObj.showBox()
            }).onSuccess(()=>{
              const captchaData : CaptchaType = captchaObj.getValidate()
              resolve(captchaData)
            }).onError(()=>{
              reject("CAPTCHA FAILD")
            })
          });
        }
      }catch(err){
        reject("CAPTCHA FAILD")
      }
    })
  }

  return [ getCaptcha ]
  
}