import styled from "styled-components";

interface IconStyledProps {
  useDarkMode?: boolean;
  fill?: string;
  pathIndex?: number;
  useDarkModeFor?: 'svg' | 'path';
  stroke?: string;
  displayStroke?: boolean;
}

const IconStyled = styled.div<IconStyledProps>`
  &.allPath {
    display: flex;
    svg {
      fill: ${p => p.useDarkMode && p.useDarkModeFor === 'svg' ? ({ theme }) => theme.fontColor.primary || "#262626" : ''};
      path {
        fill: ${(p) => {
                if (p.useDarkModeFor === 'svg') return '';
                return !p.useDarkMode
                  ? p.fill
                  : ({ theme }) => theme.fontColor.primary || "#262626"
              }
          }
      }
      line, path {
        stroke: ${p => {
          if(!p.displayStroke) return '';
          else if(p.stroke) return p.stroke;
          else return ({ theme }) => theme.fontColor.primary || "#262626";
        }}
      }
    }
  }
  &.pathAtIndex {
    svg {
      path:nth-child(${(p) => p.pathIndex}) {
        fill: ${(p) =>
    !p.useDarkMode
      ? p.fill
      : ({ theme }) => theme.fontColor.primary || "#262626"};
      }
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout({
  fill,
  children,
  useDarkMode,
  pathIndex,
  useDarkModeFor,
  stroke,
  displayStroke
}: {
  fill?: string;
  children: React.ReactChild;
  useDarkMode?: boolean;
  pathIndex?: number;
  useDarkModeFor?: 'svg' | 'path',
  stroke?: string;
  displayStroke?: boolean;
}) {
  return (
    <IconStyled
      className={!pathIndex ? "allPath" : "pathAtIndex"}
      pathIndex={pathIndex}
      useDarkMode={useDarkMode}
      fill={fill}
      useDarkModeFor={useDarkModeFor}
      stroke={stroke}
      displayStroke={displayStroke}
    >
      {children}
    </IconStyled>
  );
}

export default Layout;
