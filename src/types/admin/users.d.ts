import { TMetaResponse, TMetaResponseSingle } from "@/src/utils/constant/types"



export type TCreateUserResponse = {
    status : number
    message : string
}

export type TCreateUserPayload = {
    full_name : string
    email: string
    username: string
    password: string
    confirm_password: string
}

export interface User {
    id: number
    full_name: string
    email: string
    username: any
    role_id: number
    createdAt: string
    updatedAt: string
  }

export type TGetUsers = {
            users: User[];
            page_size: number;
            total_data: number;
            current_page: number;
            max_page: number;
    }


export type TGetUsersResponse = TMetaResponseSingle<TGetUsers>