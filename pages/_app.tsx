import { AppProps } from "next/app";
import Head from "next/head";
import { AppShell, MantineProvider, Header, Title } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Swatch tool</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppShell
          header={
            <Header height={60} p="xs">
              <Title>Swatch Tool</Title>
            </Header>
          }
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
