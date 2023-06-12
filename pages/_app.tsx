import type { AppProps } from 'next/app';
import 'reset.css.ts/meyer.css';
import '../components/stylesheets/styles.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
