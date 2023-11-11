import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { EmployeeDataState } from "../../recoil/atoms/dashboard";
import { TEmployeeResponse, TuseEmployeeData } from "../../types/userData";
import { useRecoilState } from "recoil";
import {
  businessUnitRequest,
  directoratDescriptionRequest,
  divisionDescriptionRequest,
  employeeGetRequest,
  groupRequest,
  locationDescriptionRequest,
  positionDescriptionRequest,
  regionalRequest,
  statusPlanFulfillmentRequest,
  statusRequest,
  totalDataGetRequest,
} from "./request";
import { TTotalDataResponse } from "@/src/types/mpp";
import { TDropdownDashboardResponse } from "@/src/types/dashboard";

export const useGetEmployee = (
  page: number,
  limit: number,
  search: string,
  businessUnit: string,
  regional: string,
  group: string,
  location: string,
  directorat: string,
  division: string,
  status: string,
  position: string,
  statusPlanFulfillment: string
): UseQueryResult<TEmployeeResponse> =>
  useQuery({
    queryKey: ["employee-get", page, limit, search, businessUnit, regional, group, location, directorat, division, status, position, statusPlanFulfillment],
    queryFn: async () =>
      await employeeGetRequest(page, limit, search, businessUnit, regional, group, location, directorat, division, status, position, statusPlanFulfillment),
  });

export const useEmployeeData = (): TuseEmployeeData => {
  const [get, set] = useRecoilState(EmployeeDataState);
  return {
    getEmployeeData: get,
    setEmployeeData: (val) => set(val),
  };
};

export const useGetTotalData = (): UseQueryResult<TTotalDataResponse> =>
  useQuery({
    queryKey: ["total-data-get"],
    queryFn: async () => await totalDataGetRequest(),
  });

export const useGetBusinessUnit =
  (): UseQueryResult<TDropdownDashboardResponse> =>
    useQuery({
      queryKey: ["business-unit"],
      queryFn: async () => await businessUnitRequest(),
    });

export const useGetRegional = (): UseQueryResult<TDropdownDashboardResponse> =>
  useQuery({
    queryKey: ["regional"],
    queryFn: async () => await regionalRequest(),
  });

  export const useGetGroup = (): UseQueryResult<TDropdownDashboardResponse> =>
  useQuery({
    queryKey: ['group'],
    queryFn: async () => await groupRequest(),
  });  

  export const useGetLocation = (): UseQueryResult<TDropdownDashboardResponse> =>
  useQuery({
    queryKey: ['location'],
    queryFn: async () => await locationDescriptionRequest(),
  });  

  export const useGetDirectorat = (): UseQueryResult<TDropdownDashboardResponse> =>
  useQuery({
    queryKey: ['directorat'],
    queryFn: async () => await directoratDescriptionRequest(),
  });
  
  export const useGetDivision = (): UseQueryResult<TDropdownDashboardResponse> =>
  useQuery({
    queryKey: ['division'],
    queryFn: async () => await divisionDescriptionRequest(),
  });

  export const useGetStatus = (): UseQueryResult<TDropdownDashboardResponse> =>
  useQuery({
    queryKey: ['status'],
    queryFn: async () => await statusRequest(),
  }); 

  export const useGetPosition = (): UseQueryResult<TDropdownDashboardResponse> =>
  useQuery({
    queryKey: ['position'],
    queryFn: async () => await positionDescriptionRequest(),
  }); 

  export const useGetStatusPlanFulfillment = (): UseQueryResult<TDropdownDashboardResponse> =>
  useQuery({
    queryKey: ['status-plan-fulfillment'],
    queryFn: async () => await statusPlanFulfillmentRequest(),
  }); 