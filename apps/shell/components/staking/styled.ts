import styled from "styled-components";
import { Modal } from 'antd';
import { ThemeInterface } from "@difx/core-ui/themes";

export const ModalStyled = styled(Modal)`
  .estimated{
      text-align: center;
  }
  .es-content{
      .ant-typography{
        color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
      }
  }

`;


