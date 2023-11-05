import './global.css';

import { Nunito } from 'next/font/google';
import { cookies } from 'next/headers';

import ReduxProvider from '@/apps/redux/Provider';
import MainLayout from '@/component/layouts/MainLayout';
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

const googleAuth = async () => {
  const data = cookies().get('_user');

  if (!data) {
    return {
      props: {},
    };
  }
  return {
    props: { user: JSON.parse(data.value) },
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { props } = await googleAuth();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <NextAuthProvider>
          <ReduxProvider>
            <MainLayout user={props.user}>{children}</MainLayout>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
