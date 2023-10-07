import { TMetaResponse } from "./metaResponse";

export type TMppResponse = TMetaResponse & {
    data: {
        title: string;
        total_data: number;
    };
}