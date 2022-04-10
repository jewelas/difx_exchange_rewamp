import styled from 'styled-components';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout({fill, children, useDarkMode}:{fill:string, children:any, useDarkMode?:boolean}) {

    const IconStyled = styled.div`
        svg{
            path{
                fill: ${!useDarkMode ? fill : ({ theme }) => theme.textColor || '#262626'}
            }
        }
    `
    return (
        <IconStyled>
            {children}
        </IconStyled>
    );
}

export default Layout;
