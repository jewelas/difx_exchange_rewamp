import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'jotai';
import './stylesheet.scss';

const queryClient = new QueryClient();

const base64LogoImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MzQuMyA5OTguODIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojM2Q3ZWZmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfNSIgZGF0YS1uYW1lPSJMYXllciA1Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05MzQuMyw0OTkuMzJhNTM0LDUzNCwwLDAsMC0xMi43Ni0xMTYuNDNjLTEuNTktNy43LTMuMzQtMTUuMjEtNS4yOS0yMi40MmwtLjE4LS4zNmMtLjI2LTEtLjc1LTIuNjEtMS40NC00LjY4YTUxNC4yLDUxNC4yLDAsMCwwLTUyLjA4LTEyMi4yNSwyMzguODQsMjM4Ljg0LDAsMCwwLTEyLTIxLjE3LDQ3MS40NSw0NzEuNDUsMCwwLDAtMTM3LTEzNy4xNkM2NDIuMTIsMjcuNCw1NTcuODgsMCw0NjcuNjUsMFYuMTNDNDY0LC4wNSw0NjAuMzYsMCw0NTYuNjksMEgzMS41OWMtOC40MywwLTExLjMsMTEuMTMtNC4xMiwxNS4yNkw0OTksMjg2LjIxLDEyLDU2Ny42M0EyMy44MiwyMy44MiwwLDAsMCwwLDU4OC40NVY5OTguODJsLjMxLS4xOEg0NjAuNDZxMy42LDAsNy4xOS0uMTJ2LjEyYzExMS40NSwwLDIxMy43Ny00MS44MSwyOTQtMTExLjU3QTQ2Ni4zOSw0NjYuMzksMCwwLDAsNzk4LDg1Mi4zNGE0ODcuODgsNDg3Ljg4LDAsMCwwLDgxLjg4LTExOC43MUM5MTQuNTksNjYzLjc2LDkzNC4zLDU4NCw5MzQuMyw0OTkuMzJaTTUwNi4xOSw2OTYuNFY1MDIuMTNsMTY5LjY3LTk3LjI2VjU5OS4xNFptLTUuMzgtMzk4LjI2TDUxMiwzMDQuNjNsMTU4LjU0LDkxTDUwMC44Miw0OTIuOWwtMTQwLjMtODAuMzYtMjkuNy0xN1pNMzI1LjYxLDU5OS4yOFY0MDQuNjFMMzU2LDQyMmwxMzkuNDYsODBWNjk2LjY4WiIvPjwvZz48ZyBpZD0iTGF5ZXJfMi0yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTkxLjE5LDI4OS43NGE2LjU1LDYuNTUsMCwwLDAsNi40Ny02LjQ2VjI0MC4xOWE2LjQ0LDYuNDQsMCwwLDAtNi40Ny02LjQ2SDQ4LjExYTYuNDMsNi40MywwLDAsMC02LjQ2LDYuNDZ2NDMuMDlhNi40Myw2LjQzLDAsMCwwLDYuNDYsNi40NloiLz48L2c+PGcgaWQ9IkxheWVyXzQiIGRhdGEtbmFtZT0iTGF5ZXIgNCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTM4Ljc3LDI3NC42NlYzMzkuMWE3LDcsMCwwLDAsNyw3aDY0LjQ0YTcuMTQsNy4xNCwwLDAsMCw3LTdWMjc0LjY2YTcsNywwLDAsMC03LTdIMTQ1Ljc3QTcsNywwLDAsMCwxMzguNzcsMjc0LjY2WiIvPjwvZz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEyOS45NyIgeT0iMTg4Ljg1IiB3aWR0aD0iMzguNDIiIGhlaWdodD0iMzguNDIiIHJ4PSI0LjQ5Ii8+PC9nPjwvZz48L3N2Zz4='

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={base64LogoImage}/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
          <title>DIFX | Cryptocurrency Spot Exchange</title>
          <meta name="keywords" content="Blockchain Crypto Exchange, Trading platform, Cryptocurrency Exchange, Bitcoin Trading, Ethereum trading, blockchain wallet, buy cryptocurrency, spot exchange, spot trading"/>
          <meta property="og:url" content="https://difx.com"/>
          <meta property="og:description" content="DIFX is the fastest &amp; the most-secure cryptocurrency exchange &amp; has been named 'Best New Trading Platform - 2021'. Available on desktop, Android &amp; iOS devices."/>
          <meta property="og:title" content="DIFX | Cryptocurrency Spot Exchange"/>
          <meta name="description" content="DIFX is the fastest &amp; the most-secure cryptocurrency exchange &amp; has been named 'Best New Trading Platform - 2021'. Available on desktop, Android &amp; iOS devices."/>
          <meta name="og:image" content={base64LogoImage}/>
      </Head>
      <Provider>
        <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default CustomApp;
