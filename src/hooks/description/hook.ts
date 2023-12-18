import { TCreateDescriptions,  TDescriptionsResponse, TSingleDescriptionsResponse } from "@/src/types/admin/descriptions";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { deleteDescriptionRequest, getDescriptionsRequest, postCreateDescription } from "./request";
import { TMetaErrorResponse } from "@/src/utils/constant/types";

export const useGetDescriptions = (): UseQueryResult<TDescriptionsResponse> =>
  useQuery({
    queryKey: ["descriptions-get"],
    queryFn: async () => await getDescriptionsRequest(),
  });

  export const usePostCreateDescription = (): UseMutationResult<
  TSingleDescriptionsResponse,
  TMetaErrorResponse,
  TCreateDescriptions,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-create-description'],
    mutationFn: async (payload) => await postCreateDescription(payload),
  });
};

export const useDeleteDescription = (): any => {
  return useMutation({
    mutationKey: ['delete-major'],
    mutationFn: async (id: string) =>
      await deleteDescriptionRequest(id),
  });
};