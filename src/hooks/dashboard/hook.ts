import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { EmployeeDataState } from "../../recoil/atoms/dashboard";
import { TEmployeeResponse, TuseEmployeeData } from "../../types/userData";
import { useRecoilState } from "recoil";
import { employeeGetRequest, totalDataGetRequest } from "./request";
import { TTotalDataResponse } from "@/src/types/mpp";

export const useGetEmployee = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TEmployeeResponse> =>
    useQuery({
      queryKey: ['employee-get', page, limit, search],
      queryFn: async () => await employeeGetRequest(page, limit, search),
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