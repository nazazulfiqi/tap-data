import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { TLoginData } from '../../../../types/authentications';
import { loginRequest } from '../../../../hooks/authentications/request';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/',
    signOut: '/auth/logout',
  },
  session: {
    maxAge: 2 * 60 * 60,
  },
  providers: [

    CredentialsProvider({
      id: 'login',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const data = await loginRequest({
            email: credentials?.email,
            password: credentials?.password,
          });

          return data;
        } catch (error: any) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.message);
          }

          throw new Error(
            typeof error.response.data === 'string'
              ? error.response.data
              : error.response.data?.message
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user}) {
 

      if (user) return true;
      return false;
    },
    
    async jwt({ token, user, account }) {
      const currentUser = user as unknown as TLoginData;
      if (account?.provider === 'google' && account) {
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
      } else if (account?.provider === 'login' && currentUser) {
        console.log('cruser', currentUser);
        console.log(user, account);

        token.access_token = currentUser.data.access_token;
        currentUser.name = user.name;
        currentUser.email = user.email;
      }

      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      const jwt_token = {
        access_token: token?.access_token,

      };
      session = {
        expires: token?.expires as string,
        user: {
          id: 'w',
          name: token.name,
          email: token.email,
          token: jwt_token,
        },
      };
      return session;
    },
  },
};
