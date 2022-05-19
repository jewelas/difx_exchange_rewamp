import styled from "styled-components";

export const MainStyled = styled.div`
  padding: 20px;
  span[aria-live="polite"]{
    width:100%;
    height: 100%;
    .react-loading-skeleton{
      width:100%;
      height: 100%;
    }
  }
  .row-loading{
    display: flex;

    .col-loading{
      flex-grow: 2;
      margin: 0 10px;
    }
  }
`;
