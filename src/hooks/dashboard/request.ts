import { BUSINESS_UNIT, DATA_KARYAWAN, DATA_KARYAWAN_TOTAL } from "../../utils/constant/endpoints/dashboard";
import { api } from "../../config/api/apiConfig";
import { TEmployeeResponse } from "../../types/userData";
import { TTotalDataResponse } from "@/src/types/mpp";
import { TBusinessResponse } from "@/src/types/dashboard";

export const employeeGetRequest = async (
  page: number,
  limit: number,
  search: string,
  businessUnit: string
): Promise<TEmployeeResponse> => {
    const { data } = await api.get(
      `${DATA_KARYAWAN}?business_unit_description=${businessUnit}&page=${page}&limit=${limit}&search=${search}`
    );
    console.log(data);
    
    return data;
  };

  export const totalDataGetRequest = async (): Promise<TTotalDataResponse> => {
      const { data } = await api.get(
        `${DATA_KARYAWAN_TOTAL}`
      );
      return data;
    };
  

export const businessUnitRequest = async (): Promise<TBusinessResponse> => {
    const { data } = await api.get(
      `${BUSINESS_UNIT}`
    );
    return data;
}