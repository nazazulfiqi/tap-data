


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