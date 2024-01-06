import { TLoginPayload, TLoginResponse } from "../../types/authentications";
import { TMetaErrorResponse } from "../../utils/constant/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { loginRequest, postCreateUser } from "./request";
import { TCreateUserPayload, TCreateUserResponse } from "@/src/types/admin/users";

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
