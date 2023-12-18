import { api } from "@/src/config/api/apiConfig";
import { TCreateDescriptions, TDescriptionsResponse, TSingleDescriptionsResponse } from "@/src/types/admin/descriptions";
import { DESCRIPTIONS } from "@/src/utils/constant/endpoints/descriptions";

export const getDescriptionsRequest = async (): Promise<TDescriptionsResponse> => {
    const { data } = await api.get(
      `${DESCRIPTIONS}`
    );
    return data;
  }

  export const postCreateDescription = async (
    payload: TCreateDescriptions,
  ): Promise<TSingleDescriptionsResponse> => {
    
    const { data } = await api({
      method: "post",
      url: DESCRIPTIONS,
      headers: {
        "Content-Type": "application/json",
        
      },
      data: payload,
    })
    return data;
  };

  export const deleteDescriptionRequest = async (
    id: string
  ): Promise<TSingleDescriptionsResponse> => {
    const { data } = await api({
      method: "delete",
      url: `${DESCRIPTIONS}/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
    return data;
  };