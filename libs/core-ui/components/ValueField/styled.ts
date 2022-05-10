import styled from "styled-components";
import { ThemeInterface } from "./../../themes";

export const ComponentStyled = styled.div`
    .mtitle{
        .ant-typography{
            color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.secondary} !important; 
        }
    }
    .mvalue{
        margin-top: 2px;
        .ant-typography{
            color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary} !important; 
        }
    }
`;
