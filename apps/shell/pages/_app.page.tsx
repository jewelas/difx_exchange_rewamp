import { AppProps } from "next/app";
import Head from "next/head";
import { ErrorBoundary } from 'react-error-boundary';
import { ConfigProvider } from "antd";
import ErrorFallback from "./ErrorFallback";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "jotai";

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={"/imgs/logo.svg"} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>DIFX | Cryptocurrency Spot Exchange</title>
        <meta
          name="keywords"
          content="Blockchain Crypto Exchange, Trading platform, Cryptocurrency Exchange, Bitcoin Trading, Ethereum trading, blockchain wallet, buy cryptocurrency, spot exchange, spot trading"
        />
        <meta property="og:url" content="https://difx.com" />
        <meta
          property="og:description"
          content="DIFX is the fastest &amp; the most-secure cryptocurrency exchange &amp; has been named 'Best New Trading Platform - 2021'. Available on desktop, Android &amp; iOS devices."
        />
        <meta
          property="og:title"
          content="DIFX | Cryptocurrency Spot Exchange"
        />
        <meta
          name="description"
          content="DIFX is the fastest &amp; the most-secure cryptocurrency exchange &amp; has been named 'Best New Trading Platform - 2021'. Available on desktop, Android &amp; iOS devices."
        />
        <meta name="og:image" content={"/imgs/logo.svg"} />
      </Head>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider>
          <QueryClientProvider client={queryClient}>
            <ConfigProvider>
              <Component {...pageProps} />
            </ConfigProvider>
          </QueryClientProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default CustomApp;
