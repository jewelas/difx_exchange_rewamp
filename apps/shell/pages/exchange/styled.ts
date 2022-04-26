import styled from "styled-components";

export const PageStyled = styled.div`
  background: ${({ theme }) => theme.scrollbar.background};
  margin-top: -5px;

  .react-grid-item {
    overflow: hidden;
  }

  // Class .temp will be removed when completed all components for Exchange page
  .temp {
    background: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.fontColor.primary};
  }
`;
