import { DATA_KARYAWAN, DATA_MPP } from "../../utils/constant/endpoints/dashboard";
import { api } from "../../config/api/apiConfig";
import { TEmployeeResponse } from "../../types/userData";
import { TMppResponse } from "@/src/types/mpp";

export const employeeGetRequest = async (
  page: number,
  limit: number,
  search: string
): Promise<TEmployeeResponse> => {
    const { data } = await api.get(
      `${DATA_KARYAWAN}?page=${page}&limit=${limit}&search=${search}`
    );
    return data;
  };

  export const totalMppGetRequest = async (): Promise<TMppResponse> => {
      const { data } = await api.get(
        `${DATA_MPP}`
      );
      return data;
    };
  