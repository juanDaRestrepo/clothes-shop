import { ThemeProvider } from "@emotion/react";
import { SWRConfig } from "swr";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { lightTheme } from "../themes/light-theme";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
