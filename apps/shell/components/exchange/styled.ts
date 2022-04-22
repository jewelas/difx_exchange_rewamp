import styled from "styled-components";

export const ComponentStyled = styled.div`
  &.pair-metadata {
    display: flex;
    height: 100%;
    padding: 0 10px;
    justify-content: space-between;
    .left {
      margin-top: 22px;
      display: flex;
      svg {
        margin-top: 5px;
        margin-left: 12px;
        margin-right: -12px;
      }
    }
    .center {
      display: flex;
      .price {
        display: flex;
        flex-direction: column;
        margin-top: 14px;
        margin-left: 15px;
        margin-right: 15px;
      }
    }
    .right {
      svg {
        cursor: pointer;
        margin-top: 22px;
      }
    }
  }
`;
