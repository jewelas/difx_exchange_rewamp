import styled from "styled-components";

interface IconStyledProps {
  useDarkMode?: boolean;
  fill?: string;
  pathIndex?: number;
}

const IconStyled = styled.div<IconStyledProps>`
  &.allPath {
    display: flex;
    svg {
      path {
        fill: ${(p) =>
          !p.useDarkMode
            ? p.fill
            : ({ theme }) => theme.fontColor.primary || "#262626"};
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
}: {
  fill: string;
  children: React.ReactChild;
  useDarkMode?: boolean;
  pathIndex?: number;
}) {
  return (
    <IconStyled
      className={!pathIndex ? "allPath" : "pathAtIndex"}
      pathIndex={pathIndex}
      useDarkMode={useDarkMode}
      fill={fill}
    >
      {children}
    </IconStyled>
  );
}

export default Layout;
