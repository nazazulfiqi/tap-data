import { TAddDataEmployee, TDataEmployeeDetailResponse } from "@/src/types/data";
import { TMetaErrorResponse } from "@/src/utils/constant/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { deleteDataEmployeeRequest, postDataEmployee } from "./request";
import { useSession } from "next-auth/react";


export const usePostDataEmployee = (): UseMutationResult<
  TDataEmployeeDetailResponse,
  TMetaErrorResponse,
  TAddDataEmployee,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-data-employee'],
    mutationFn: async (payload) => await postDataEmployee(payload),
  });
};

export const useDeleteEmployee = (): any => {
  return useMutation({
    mutationKey: ['delete-data-employee'],
    mutationFn: async (date: string) =>
      await deleteDataEmployeeRequest(date),
  });
};

