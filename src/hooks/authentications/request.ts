import { LOGIN, REGISTER } from "../../utils/constant/endpoints/authentications";
import { api } from "../../config/api/apiConfig";
import { TLoginPayload, TLoginResponse } from "../../types/authentications";
import { TCreateUserPayload, TCreateUserResponse } from "@/src/types/admin/users";

export const loginRequest = async (
    payload?: TLoginPayload
  ): Promise<TLoginResponse> => {
    const data = await api.post<TLoginResponse>(LOGIN, payload);
    // console.log('data', data);
    return data.data;
  };

  export const postCreateUser = async (
    payload: TCreateUserPayload,
  ): Promise<TCreateUserResponse> => {
    
    const { data } = await api({
      method: "post",
      url: REGISTER,
      headers: {
        "Content-Type": "application/json",
        
      },
      data: payload,
    })
    return data;
  };