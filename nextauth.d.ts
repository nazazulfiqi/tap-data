// nextauth.d.ts
import { DefaultUser } from 'next-auth';

type Token = {
  access_token: string | unknown;
};

interface IUser extends DefaultUser {
  role_id?: number;
  token?: Token;

}
declare module 'next-auth' {
  type User = IUser;
  interface Session {
    user?: User;
  }
}
