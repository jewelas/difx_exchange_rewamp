import React, { useCallback, useEffect, useState } from 'react'
import { QRContainerStyled } from './QRContainer.style'
import { QRCodeSVG } from 'qrcode.react';
import { 
  useHttpPost,
  useFingerprint,
  API_ENDPOINT
 } from '@difx/shared';

export default function QRContainer() {
  
  const [ qrToken, setQRToken ] = useState()
  const { getFingerprint } = useFingerprint()

  const onSuccess = useCallback((response)=>{
    const { token } = response.data.data
    setQRToken(token)
  },[])

  const onError = useCallback((error)=>{
    console.log(error)
  },[])

  const { mutate: getQr } = useHttpPost({onSuccess, onError, endpoint:API_ENDPOINT.GET_LOGIN_QR});

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
  },[])

  return (
    <QRContainerStyled>
      <QRCodeSVG
       value={qrToken}
      />
    </QRContainerStyled>
  )
}
