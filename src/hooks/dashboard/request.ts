import { BUSINESS_UNIT, DATA_KARYAWAN, DATA_KARYAWAN_TOTAL, DIRECTORAT_DESCRIPTION, DIVISION_DESCRIPTION, GROUP, LOCATION_DESCRIPTION, POSITION_DESCRIPTION, REGIONAL, STATUS, STATUS_PLAN_FULFILLMENT } from "../../utils/constant/endpoints/dashboard";
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

export const locationDescriptionRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${LOCATION_DESCRIPTION}`
  );
  return data;
}

export const directoratDescriptionRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${DIRECTORAT_DESCRIPTION}`
  );
  return data;
}

export const divisionDescriptionRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${DIVISION_DESCRIPTION}`
  );
  return data;
}

export const statusRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${STATUS}`
  );
  return data;
}

export const positionDescriptionRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${POSITION_DESCRIPTION}`
  );
  return data;
}

export const statusPlanFulfillmentRequest = async (): Promise<TDropdownDashboardResponse> => {
  const { data } = await api.get(
    `${STATUS_PLAN_FULFILLMENT}`
  );
  return data;
}