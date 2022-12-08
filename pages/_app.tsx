import type { AppProps } from 'next/app';
import "reset.css.ts/meyer.css"
import '../styles/theme.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
