import type { AppProps } from 'next/app';
import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans-jp/700.css';
import 'reset.css.ts/meyer.css';
import '../styles/globalStyle.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
