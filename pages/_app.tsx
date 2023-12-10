import { ThemeProvider } from "@emotion/react";
import { SWRConfig } from "swr";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { lightTheme } from "../themes/light-theme";
import { CssBaseline } from "@mui/material";
import { UiProvider, CartProvider } from "../context";
import { AuthProvider } from "../context/auth/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <AuthProvider>
        <CartProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UiProvider>
        </CartProvider>
      </AuthProvider>
    </SWRConfig>
  );
}

export default MyApp;
