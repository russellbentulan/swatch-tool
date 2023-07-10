import Document, { Html, Head, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";

import { AppStateProvider } from "@/contexts/AppContext";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <AppStateProvider>
        <Html lang="en">
          <Head />
          <body>
            <NextScript />
          </body>
        </Html>
      </AppStateProvider>
    );
  }
}
