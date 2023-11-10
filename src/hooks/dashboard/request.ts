import { BUSINESS_UNIT, DATA_KARYAWAN, DATA_KARYAWAN_TOTAL, GROUP, REGIONAL } from "../../utils/constant/endpoints/dashboard";
import { api } from "../../config/api/apiConfig";
import { TEmployeeResponse } from "../../types/userData";
import { TTotalDataResponse } from "@/src/types/mpp";
import { TDropdownDashboardResponse } from "@/src/types/dashboard";

export const employeeGetRequest = async (
  page: number,
  limit: number,
  search: string,
  businessUnit: string,
  regional: string,
): Promise<TEmployeeResponse> => {
    const { data } = await api.get(
      `${DATA_KARYAWAN}?business_unit_description=${businessUnit}&regional=${regional}&page=${page}&limit=${limit}&search=${search}`
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
  

export const businessUnitRequest = async (): Promise<TDropdownDashboardResponse> => {
    const { data } = await api.get(
      `${BUSINESS_UNIT}`
    );
    return data;
}

export const regionalRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${REGIONAL}`
  );
  return data;
}
export const groupRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${GROUP}`
  );
  return data;
}

export const loctionDescriptionRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${GROUP}`
  );
  return data;
}