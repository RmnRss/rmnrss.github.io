import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/site-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta lang="en" charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#fff" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
