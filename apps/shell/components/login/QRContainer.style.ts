import styled from "styled-components"

export const QRContainerStyled = styled.div`
  .top-box{
    margin: 40px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    img{
      height: 180px;
    }
    div{
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
    }
  }
  .bottom-box{
    span{
      margin: 2px 0px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({theme}) => theme.fontColor.primary};

      &:nth-child(1){
        color: ${({theme}) => theme.fontColor.link} !important;
      }
    }
  }
`