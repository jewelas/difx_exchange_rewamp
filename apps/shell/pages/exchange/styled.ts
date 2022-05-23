import styled from "styled-components";

export const PageStyled = styled.div`
  background: ${({ theme }) => theme.background.space};
  margin-top: -20px;
  /* padding: 0 10px; */

  .react-grid-item {
    overflow: hidden;
  }

  .ant-select-selector{
    height: 31px !important;
  }

  .base {
    background: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.fontColor.primary};
  }

  .ant-btn.ant-btn-default.ant-btn-background-ghost{
    border: none !important;
  }
`;
