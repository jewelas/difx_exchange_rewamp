import styled from "styled-components"

const Wrapper = styled.div`
  .otpContainer{
    margin: 10px 5px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
  }

  .otpbox{
    width: ${({theme}) => theme.otpBoxSize} !important;
    height: ${({theme}) => theme.otpBoxSize} !important;
    min-width: 50px !important;
    min-height: 50px !important;
    border: none;
    background: ${({theme}) => theme.background.primary} !important;
    border: 2px;
    font-size: ${({theme}) => theme.typography.xlarge};
  }
`

export default Wrapper;