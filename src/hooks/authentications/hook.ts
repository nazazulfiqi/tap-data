import { TLoginPayload, TLoginResponse } from "../../types/authentications";
import { TMetaErrorResponse } from "../../utils/constant/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { loginRequest } from "./request";

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