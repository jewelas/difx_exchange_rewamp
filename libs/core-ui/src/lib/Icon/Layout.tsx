import styled from 'styled-components';


interface IconStyledProps {
    useDarkMode?: boolean;
    fill?: string;
  }

const IconStyled = styled.div<IconStyledProps>`
svg{
    path{
        fill: ${p => !p.useDarkMode ? p.fill : ({ theme }) => theme.textColor || '#262626'}
    }
}
`

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout({fill, children, useDarkMode}:{fill:string, children:any, useDarkMode?:boolean}) {

    return (
        <IconStyled useDarkMode={useDarkMode} fill={fill}>
            {children}
        </IconStyled>
    );
}

export default Layout;
