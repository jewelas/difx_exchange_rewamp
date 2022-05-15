import styled from "styled-components";
import { ThemeInterface } from "../../themes";

const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  background: ${({ theme }: { theme: ThemeInterface }) => theme.background.space};
  height:28px;
  padding:3px;
  .switch-item{
    border-radius: 3px;
    width: 160px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    color: ${({ theme }: { theme: ThemeInterface }) => theme.fontColor.primary};
    opacity: 0.8;
    &.active{
      opacity: 1;
      background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary};
      border: ${({ theme }: { theme: ThemeInterface }) => theme.border.secondary};
      &:hover{
        /* box-shadow: inset 0 0 100px 100px ${({ theme }: { theme: ThemeInterface }) => theme.color.rowHover}; */
      }
    }
    @keyframes trans-active {
      from {
        background: ${({ theme }: { theme: ThemeInterface }) => theme.background.space};
      }
      to {
        background: ${({ theme }: { theme: ThemeInterface }) => theme.background.secondary};
      }
    }
  }
`

export default Wrapper;