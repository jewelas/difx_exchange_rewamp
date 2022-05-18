import styled from "styled-components"

const Wrapper = styled.div`
  .otpContainer{
    margin: 10px 0px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
  }

  .otpbox{
    width: 100% !important;
    min-height: 48px;
    height: 64px;
    border: none;
    background: ${({theme}) => theme.background.primary} !important;
    border: 2px;
    font-size: ${({theme}) => theme.typography.xlarge};
    color: ${({theme}) => theme.fontColor.primary};
  }
`

export default Wrapper;