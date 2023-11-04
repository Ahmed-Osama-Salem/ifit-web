/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { cookies } from 'next/headers';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

async function auth(req: any, res: any) {
  const providers = [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ];

  return NextAuth(req, res, {
    providers,
    callbacks: {
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token;

          // console.log(token);

          await axios
            .post('http://localhost:8000/auth/exists', {
              email: token.email,
              name: token.name,
              image: token.picture,
              provider: account.provider,
            })
            .then((data) => {
              // console.log(data.data, 'from backend');
              // setCookie('_user', data.data.data.user, { req, res });
              const { name, email, image } = data.data.data.user;
              const cookieStore = { name, email, image };
              cookies().set('_user', JSON.stringify(cookieStore));
              // res.setHeader()

              return data;
            })
            .catch((err) => {
              // console.log(err);
              return err;
            });
        }
        return token;
      },
    },
  });
}

export { auth as GET, auth as POST };
