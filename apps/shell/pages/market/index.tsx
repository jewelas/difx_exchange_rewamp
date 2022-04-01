import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductProps {}

const StyledProduct = styled.div`
  color: pink;
`;

export function Market(props: ProductProps) {
  return (
    <StyledProduct>
      <h1>Welcome to Market!</h1>
    </StyledProduct>
  );
}

export default Market;
