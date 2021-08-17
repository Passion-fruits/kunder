import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header";
import PlayBar from "../components/playbar";
import "../styles/globals.css";
import { HEADER_HEIGHT } from "./../styles/index";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KUNDER</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
        <link
          href="http://allfont.net/allfont.css?fonts=agency-fb-bold"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <PlayBar/>
      <div style={{ paddingTop: `${HEADER_HEIGHT}px` }} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
