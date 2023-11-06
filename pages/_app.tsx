import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { lightTheme } from '../themes/light-theme';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
