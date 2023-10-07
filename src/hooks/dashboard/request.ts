import { DATA_KARYAWAN, DATA_KARYAWAN_TOTAL } from "../../utils/constant/endpoints/dashboard";
import { api } from "../../config/api/apiConfig";
import { TEmployeeResponse } from "../../types/userData";
import { TTotalDataResponse } from "@/src/types/mpp";

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

  export const totalDataGetRequest = async (): Promise<TTotalDataResponse> => {
      const { data } = await api.get(
        `${DATA_KARYAWAN_TOTAL}`
      );
      return data;
    };
  