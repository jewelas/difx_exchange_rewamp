import styled from "styled-components"

const Wrapper = styled.div`
  .otpContainer{
    margin: 10px 0px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
  }

  .otpbox{
    width: ${({theme}) => theme.otpBoxSize} !important;
    height: ${({theme}) => theme.otpBoxSize} !important;
    border: none;
    background: ${({theme}) => theme.background.primary} !important;
    border: 2px;
    font-size: ${({theme}) => theme.typography.xlarge};
  }
`

export default Wrapper;