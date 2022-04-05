import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {CountriesProvider} from 'context';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <CountriesProvider>
      <Component {...pageProps} />
    </CountriesProvider>
  );
}

export default MyApp;
