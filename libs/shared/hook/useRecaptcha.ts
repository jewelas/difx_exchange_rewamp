import { useEffect, useState } from "react";
import { useAtom } from "jotai"
import { configAtom,CaptchaType } from "..";

export const useRecaptcha = () => {
  const [captchaType, setCaptchaType] = useState<string>()

  const [config] = useAtom(configAtom)

  // @ts-ignore:next-line
  useEffect(()=>{
    if(config != undefined || null){
      // @ts-ignore:next-line
      const captcha = config.captcha
      setCaptchaType(captcha)
      const geetestCaptchaScript = document.createElement('script');
      const googleCaptchaScript = document.createElement('script');
  
      if(captcha === "GEETEST"){
        geetestCaptchaScript.src = process.env['NX_GEETEST_CAPTCHA_URL'];
        geetestCaptchaScript.id = 'geetestCaptcha';
        document.body.appendChild(geetestCaptchaScript);
  
        return () => {
          geetestCaptchaScript.remove();
        }
      }else{
        googleCaptchaScript.src = process.env['NX_GOOGLE_CAPTCHA_URL'];
        googleCaptchaScript.id = 'googleCaptcha';
        document.body.appendChild(googleCaptchaScript);
  
        return () => {
          googleCaptchaScript.remove();
          document.querySelector('.grecaptcha-badge').remove()
        }
      }
    }

  },[config])

  const getCaptcha = (): Promise<string | CaptchaType> => {
    return new Promise((resolve,reject)=>{
      try{
        if(captchaType === "GOOGLE"){
          // @ts-ignore:next-line
          grecaptcha.ready(function() {
            // @ts-ignore:next-line
            grecaptcha.execute(process.env["NX_GOOGLE_CAPTCHA_ID"]).then((token: string)=>{
                resolve(token)
            });
          });
        }else{
          // @ts-ignore:next-line
          initGeetest4({ 
            product: 'bind',
            captchaId: process.env["NX_GEETEST_CAPTCHA_ID"],
            language: 'en',
            timeout: 3000 
          },function (captchaObj: any) { 
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