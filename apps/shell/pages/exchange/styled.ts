import styled from 'styled-components';

export const PageStyled = styled.div`
    background: ${({theme})=>theme.borderColor};
    margin-top: -5px;

    // Class .temp will be removed when completed all components for Exchange page
    .temp{
        background: ${({theme})=>theme.backgroundColor2};
        color: ${({theme})=>theme.textColor};
    }
`;
