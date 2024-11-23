/* eslint-disable react-hooks/exhaustive-deps */
import { AppProps } from "next/app";

import { ReactElement, ReactNode } from "react";

import Head from "next/head";
import { NextPage } from "next";
import { PagesTopLoader } from "nextjs-toploader/pages";

import "./globals.css";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout): ReactNode => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Web3 Nextjs</title>
      </Head>
      <PagesTopLoader />
      <Component {...pageProps} />
    </>
  );
};

export default App;
