import NextAuth from 'next-auth';
import { authOptions } from './option';

const handler = NextAuth(authOptions);

// export const refreshAccessToken = async (token: TLoginData) => {
//   try {
//     const data = await refreshTokenRequest({
//       refresh_token: token.token?.refresh_token as string,
//     });

//     return {
//       ...token,
//       access_token: data.data.access_token,
//       refresh_token: data.data.refresh_token ?? token.token?.refresh_token,
//     };
//   } catch (error: any) {
//     throw new Error(error.response.data.message);
//   }
// };

export { handler as GET, handler as POST };
