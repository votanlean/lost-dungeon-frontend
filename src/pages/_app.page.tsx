import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import defaultTheme from 'themes/detaultTheme';
import Layout from 'components/layout';

function getLibrary(provider: any) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
