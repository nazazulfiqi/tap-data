export type TLoginPayload = {
    email?: string;
    password?: string;
  };

  export type TLoginData = {
  data: {
    access_token: string;
  };
} & User;

export type TLoginResponse = TLoginData;