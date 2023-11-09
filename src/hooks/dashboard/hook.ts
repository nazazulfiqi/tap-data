import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { EmployeeDataState } from "../../recoil/atoms/dashboard";
import { TEmployeeResponse, TuseEmployeeData } from "../../types/userData";
import { useRecoilState } from "recoil";
import { businessUnitRequest, employeeGetRequest, totalDataGetRequest } from "./request";
import { TTotalDataResponse } from "@/src/types/mpp";
import { TBusinessResponse } from "@/src/types/dashboard";

export const useGetEmployee = (
  page: number,
  limit: number,
  search: string,
  businessUnit: string
): UseQueryResult<TEmployeeResponse> =>
    useQuery({
      queryKey: ['employee-get', page, limit, search, businessUnit],
      queryFn: async () => await employeeGetRequest(page, limit, search, businessUnit),
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
        queryKey: ['total-data-get'],
        queryFn: async () => await totalDataGetRequest(),
      });

export const useGetBusinessUnit = (): UseQueryResult<TBusinessResponse> =>
      useQuery({
        queryKey: ['business-unit'],
        queryFn: async () => await businessUnitRequest(),
      });