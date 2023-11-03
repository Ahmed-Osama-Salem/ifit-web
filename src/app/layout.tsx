import './global.css';

import { Nunito } from 'next/font/google';

import ReduxProvider from '@/apps/redux/Provider';
import NextAuthProvider from '@/component/providers/NextAuthProvider';

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'I fit',
  description: 'ifit ..',
  icons: {
    icon: '/favicon_package/favicon.ico',
    apple: '/favicon_package/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NextAuthProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
