import styled from "styled-components"

export const QRContainerStyled = styled.div`
  svg{
    border-radius: ${({theme}) => theme.borderRadius.rounded};
    border: ${({theme}) => theme.border.secondary};
  }
  .top-box{
    margin: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    img{
      height: 180px;
    }
    div{
      display: flex;
      /* flex-grow: 1; */
      width: 180px;
      height: 180px !important;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .loader{
      height: 200px;
      width: 200px;
      background: #fff;
    }
  }
  .bottom-box{
    span{
      margin: 2px 0px;
      font-size: ${({theme}) => theme.typography.medium};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({theme}) => theme.fontColor.primary};
      font-weight: ${({theme}) => theme.fontWeight.medium} !important;;

      &:nth-child(1){
        color: ${({theme}) => theme.fontColor.link} !important;
      }
    }
  }
`