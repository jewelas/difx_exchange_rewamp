import React, { useCallback, useEffect, useState } from 'react'
import { QRContainerStyled } from './QRContainer.style'
import { QRCodeSVG } from 'qrcode.react';
import { 
  useHttpPost,
  useFingerprint,
  useAuth,
  API_ENDPOINT
 } from '@difx/shared';
import { socket } from "@difx/shared";
import { useRouter } from 'next/router';
// import { notification } from 'antd';
import t from "@difx/locale";
import { Loading, showSuccess } from "@difx/core-ui"

export default function QRContainer() {
  const [ qrToken, setQRToken ] = useState()
  const { getFingerprint } = useFingerprint()
  const {updateSession} = useAuth()
  const router = useRouter()
  
  const subscribeSocket = (eventName) => {
    socket.listen(eventName, (data: any)=>{
      if(data){
        const { user, permission } = data
        updateSession(user,permission)
        showSuccess(
          "Login Success",
          "Successfully Logged In"
        )
        router.push("/home")
      }
    })
  }

  const onSuccess = useCallback((response)=>{
    const { token } = response.data.data
    const decoded = window.atob(token)
    const eventName = decoded.split(":")[1]
    subscribeSocket(eventName)
    setQRToken(token)
  },[])

  const onError = useCallback((error)=>{
    console.log(error)
  },[])

  const { mutate: getQr, isLoading } = useHttpPost({onSuccess, onError, endpoint:API_ENDPOINT.GET_LOGIN_QR});

  const getNewQr = async() => {
    const fingerprint = await getFingerprint()
    const reqData = { 
      device_type: "web",
      device_id: fingerprint,
      identifier: fingerprint
    }
    getQr(reqData)
  }

  useEffect(()=>{
    getNewQr() 
    const rqUpdation = setInterval(()=>{
      getNewQr() 
    },15000)

    return () => {
      clearInterval(rqUpdation)
    }
  },[])

  return (
    <QRContainerStyled>
      <div className='top-box'>
        <div>
          <img src={"/imgs/qr-banner.png"} />
        </div>
        <div>
            <Loading isLoading={isLoading}>
              <QRCodeSVG
              value={qrToken}
              size={180}
              includeMargin={true}
              />
            </Loading>
        </div>
      </div>
      <div className='bottom-box'>
        <span>{t("signin.login_qr")}</span>
        <span>{t("signin.qr_login_step")}</span>
      </div>
    </QRContainerStyled>
  )
}
