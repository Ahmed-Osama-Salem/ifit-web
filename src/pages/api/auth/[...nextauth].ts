/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ];

  // export default NextAuth(authOptions);

  return NextAuth(req, res, {
    providers,
    callbacks: {
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token;

          console.log(token);
          // console.log(account);
          await axios
            .post('http://localhost:8000/auth/exists', { email: token.email })
            .then((data) => {
              console.log(data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        return token;
      },

      // async session({ session, token, user }) {
      //   // Send properties to the client, like an access_token from a provider.
      //   // session.accessToken = token.accessToken;
      //   console.log(session, 'see');

      //   return session;
      // },
    },
  });
}
