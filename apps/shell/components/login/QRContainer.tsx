import React, { useCallback, useEffect } from 'react'
import { QRContainerStyled } from './QRContainer.style'
import { QRCodeSVG } from 'qrcode.react';
import { 
  useHttpGetByEvent,
  API_ENDPOINT
 } from '@difx/shared';

export default function QRContainer() {

  const onSuccess = useCallback((response)=>{
    console.log(response)
  },[])

  const onError = useCallback((error)=>{
    console.log(error)
  },[])

  const { mutate: getQr } = useHttpGetByEvent({onSuccess, onError, endpoint:API_ENDPOINT.GET_LOGIN_QR});

  useEffect(()=>{
    getQr(null)
  },[])

  return (
    <QRContainerStyled>
      <QRCodeSVG
       value="https://difx.com/"
      />
    </QRContainerStyled>
  )
}
