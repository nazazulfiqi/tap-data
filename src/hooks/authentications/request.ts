import { LOGIN } from "../../utils/constant/endpoints/authentications";
import { api } from "../../config/api/apiConfig";
import { TLoginPayload, TLoginResponse } from "../../types/authentications";

export const loginRequest = async (
    payload?: TLoginPayload
  ): Promise<TLoginResponse> => {
    const data = await api.post<TLoginResponse>(LOGIN, payload);
    console.log('data', data);
    return data.data;
  };