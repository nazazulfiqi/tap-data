import { TAddDataEmployee, TDataEmployeeDetailResponse } from "@/src/types/data";
import { TMetaErrorResponse } from "@/src/utils/constant/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { postDataEmployee } from "./request";
import { useSession } from "next-auth/react";

export const usePostDataEmployee = (): UseMutationResult<
  TDataEmployeeDetailResponse,
  TMetaErrorResponse,
  TAddDataEmployee,
  unknown
> => {
const {data: session} = useSession()
const token = session?.user?.token
  return useMutation({
    mutationKey: ['post-data-employee'],
    mutationFn: async (payload) => await postDataEmployee(payload, token as any),
  });
};