import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';

import store from '@/apps/redux/store';

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ['latin'] });

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <main className={nunito.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
