import { DATA_KARYAWAN } from "../../utils/constant/endpoints/dashboard";
import { api } from "../../config/api/apiConfig";
import { TEmployeeResponse } from "../../types/userData";

export const employeeGetRequest = async (
  page: number,
  limit: number
): Promise<TEmployeeResponse> => {
    const { data } = await api.get(
      `${DATA_KARYAWAN}?page=${page}&limit=${limit}`
    );
    return data;
  };
  