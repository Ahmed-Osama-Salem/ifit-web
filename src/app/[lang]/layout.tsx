import '@/app/global.css';

import { Nunito } from 'next/font/google';
import { cookies } from 'next/headers';

import ReduxProvider from '@/apps/redux/Provider';
import MainLayout from '@/component/layouts/MainLayout';
import NextAuthProvider from '@/component/providers/NextAuthProvider';

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ['latin'] });
// const cairo = Cairo({ subsets: ['latin'] });

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

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { props } = await googleAuth();

  return (
    <html lang={params.lang} dir={params.lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={nunito.className}>
        <NextAuthProvider>
          <ReduxProvider>
            <MainLayout user={props.user} lang={params.lang}>
              {children}
            </MainLayout>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
