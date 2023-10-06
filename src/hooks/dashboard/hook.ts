import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { EmployeeDataState } from "../../recoil/atoms/dashboard";
import { TEmployeeResponse, TuseEmployeeData } from "../../types/userData";
import { useRecoilState } from "recoil";
import { employeeGetRequest } from "./request";

export const useGetEmployee = (
  page: number,
  limit: number
): UseQueryResult<TEmployeeResponse> =>
    useQuery({
      queryKey: ['employee-get', page, limit],
      queryFn: async () => await employeeGetRequest(page, limit),
    });

export const useEmployeeData = (): TuseEmployeeData => {
    const [get, set] = useRecoilState(EmployeeDataState);
    return {
      getEmployeeData: get,
      setEmployeeData: (val) => set(val),
    };
  };