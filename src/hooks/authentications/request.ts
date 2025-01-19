import { DELETE_USER, LOGIN, REGISTER, USERS } from "../../utils/constant/endpoints/authentications";
import { api } from "../../config/api/apiConfig";
import { TLoginPayload, TLoginResponse } from "../../types/authentications";
import { TCreateUserPayload, TCreateUserResponse, TGetUsersResponse } from "@/src/types/admin/users";

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

  export const usersGetRequest = async (
    page: number,
    limit: number,
    search: string,
  ): Promise<TGetUsersResponse> => {
      const { data } = await api.get(
        `${USERS}?page=${page}&limit=${limit}&search=${search}`
      );
      // console.log(data);
      
      return data;
    };


     export const deleteUserRequest = async (
        id: string
      ): Promise<any> => {
        const { data } = await api({
          method: "delete",
          url: `${DELETE_USER}/${id}`,
          headers: {
            "Content-Type": "application/json",
          },
        })
        return data;
      };