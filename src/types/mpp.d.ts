import { TMetaResponse } from "./metaResponse";

// export type TMppResponse = TMetaResponse & {
//     data: {
//         title: string;
//         total_data: number;
//     };
// }

export type TTotalDataResponse = TMetaResponse & {
    status: number
    message: string
    data: Data
  }
  
  export type Data = {
    data: Daum[]
  }
  
  export type TTotalDataItem = {
    title: string
    total_data: number
  }