import styled from "styled-components";

export const PageStyled = styled.div`
  background: ${({ theme }) => theme.scrollbar.background};
  margin-top: -5px;
  padding:0 50px 0 124px;

  .react-grid-item {
    overflow: hidden;
  }

  .ant-select-selector{
    height: 31px !important;
  }

  // Class .temp will be removed when completed all components for Exchange page
  .temp {
    background: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.fontColor.primary};
  }
`;
