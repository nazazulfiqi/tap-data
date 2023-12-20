import { TMetaResponse, TMetaResponseSingle } from "@/src/utils/constant/types"

export type TDescriptions = {
    id: number
    title: string
    content: string
    createdAt: string
    updatedAt: string
    deletedAt: any
  }

  export type TCreateDescriptions = {
    title: string
    content: string
  }

  export type TDeleteDescriptionPayload = {
    id: string
  }

  export type TEditDescriptions = {
    title?: string
    content?: string
  }



export type TDescriptionsResponse = TMetaResponse<TDescriptions>
export type TSingleDescriptionsResponse = TMetaResponseSingle<TDescriptions>