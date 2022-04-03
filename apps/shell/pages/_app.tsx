import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'jotai';
import './styles.css';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
          <title>DIFX | Cryptocurrency Spot Exchange</title>
          <meta name="keywords" content="Blockchain Crypto Exchange, Trading platform, Cryptocurrency Exchange, Bitcoin Trading, Ethereum trading, blockchain wallet, buy cryptocurrency, spot exchange, spot trading"/>
          <meta property="og:url" content="https://difx.com"/>
          <meta property="og:description" content="DIFX is the fastest &amp; the most-secure cryptocurrency exchange &amp; has been named 'Best New Trading Platform - 2021'. Available on desktop, Android &amp; iOS devices."/>
          <meta property="og:title" content="DIFX | Cryptocurrency Spot Exchange"/>
          <meta name="description" content="DIFX is the fastest &amp; the most-secure cryptocurrency exchange &amp; has been named 'Best New Trading Platform - 2021'. Available on desktop, Android &amp; iOS devices."/>
          {/* TODO og:image */}
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
