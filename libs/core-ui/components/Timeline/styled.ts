import styled from "styled-components";
import { ThemeInterface } from "./../../themes";

interface Props{
    color?: string
}
export const MainStyled = styled.div<Props>`
      display:flex;
      justify-content: space-between;
      position: relative;
      margin-top: 20px;
      margin-left: 56px;
      margin-right: 56px;
      .at{
          width: auto;
          &.first{
              margin-left:-58px;
          }
          &.last{
              margin-right:-58px;
              .dot{
                  margin-right:48px;
              }
          }
        .dot{
            margin:0 auto;
            width: 14px;
            height: 14px;
            background: ${p=>p.color || '#21C198'};
            border-radius: 100%;
        }
        .value{
            color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
        }
      }

      .line{
        position: absolute;
        width: 100%;
        height: 10px;
        border-bottom: dotted 1px ${p=>p.color || '#21C198'};
        margin-top: -2px;
      }
`;


