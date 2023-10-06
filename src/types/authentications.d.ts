export type TLoginPayload = {
    email?: string;
    password?: string;
  };

  export type TLoginData = {
  data: {
    role: string;
    access_token: string;
  };
} & User;

export type TLoginResponse = TLoginData;