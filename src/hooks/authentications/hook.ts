import { TLoginPayload, TLoginResponse } from "../../types/authentications";
import { TMetaErrorResponse } from "../../utils/constant/types";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { deleteUserRequest, loginRequest, postCreateUser, usersGetRequest } from "./request";
import { TCreateUserPayload, TCreateUserResponse, TGetUsersResponse } from "@/src/types/admin/users";

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginPayload,
  null
> => {
  return useMutation({
    mutationKey: ['login-tap'],
    mutationFn: (params) => loginRequest(params),
  });
};

export const usePostCreateUser = (): UseMutationResult<
TCreateUserResponse,
TMetaErrorResponse,
TCreateUserPayload,
unknown
> => {
return useMutation({
  mutationKey: ['post-create-user'],
  mutationFn: async (payload) => await postCreateUser(payload),
});
};

export const useGetUsers = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<
TGetUsersResponse
> => useQuery({
  queryKey: ['get-users', page, limit, search],
  queryFn: async () => await usersGetRequest(page, limit, search),
});

export const useDeleteUser = (): any => {
  return useMutation({
    mutationKey: ['delete-user'],
    mutationFn: async (id: string) =>
      await deleteUserRequest(id),
  });
};