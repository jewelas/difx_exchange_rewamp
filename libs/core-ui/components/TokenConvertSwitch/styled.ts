import styled from "styled-components";
import { ThemeInterface } from "../../themes";

export const TokenSwitchWrapper = styled.div`
    .ant-switch{
        margin-right: 10px;
    }
    .ant-switch.ant-switch-checked + .ant-typography{
        color: ${({ theme }: { theme: ThemeInterface }) => theme.color.primary} !important;
    }
`;


