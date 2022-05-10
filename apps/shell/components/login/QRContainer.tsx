import React from 'react'
import { QRContainerStyled } from './QRContainer.style'
import { QRCodeSVG } from 'qrcode.react';

export default function QRContainer() {

  console.log(QRCodeSVG)

  return (
    <QRContainerStyled>
      <QRCodeSVG
       value="https://difx.com/"
      />
    </QRContainerStyled>
  )
}
