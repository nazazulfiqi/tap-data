import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { EmployeeDataState } from "../../recoil/atoms/dashboard";
import { TEmployeeResponse, TuseEmployeeData } from "../../types/userData";
import { useRecoilState } from "recoil";
import {
  businessUnitRequest,
  employeeGetRequest,
  groupRequest,
  regionalRequest,
  totalDataGetRequest,
} from "./request";
import { TTotalDataResponse } from "@/src/types/mpp";
import { TDropdownDashboardResponse } from "@/src/types/dashboard";

export const useGetEmployee = (
  page: number,
  limit: number,
  search: string,
  businessUnit: string,
  regional: string
): UseQueryResult<TEmployeeResponse> =>
  useQuery({
    queryKey: ["employee-get", page, limit, search, businessUnit, regional],
    queryFn: async () =>
      await employeeGetRequest(page, limit, search, businessUnit, regional),
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