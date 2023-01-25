import { defaultLayout, LayoutProvider } from "../contexts/LayoutContext";
import Layout from "../components/layout/Layout";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "../styles/layout/layout.scss";
import "../styles/common/common.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.style.fontSize = `${defaultLayout.fontSize}px`;
  }, []);

  return (
    <>
      <Head>
        <title>SAKAI</title>
      </Head>
      <LayoutProvider>
        {(Component as any).getLayout ? (
          (Component as any).getLayout(<Component {...pageProps} />)
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </LayoutProvider>
    </>
  );
}
