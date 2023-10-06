import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { EmployeeDataState } from "../../recoil/atoms/dashboard";
import { TEmployeeResponse, TuseEmployeeData } from "../../types/userData";
import { useRecoilState } from "recoil";
import { employeeGetRequest } from "./request";

export const useGetEmployee = (): UseQueryResult<TEmployeeResponse> =>
    useQuery({
      queryKey: ['employee-get'],
      queryFn: async () => await employeeGetRequest(),
    });

export const useEmployeeData = (): TuseEmployeeData => {
    const [get, set] = useRecoilState(EmployeeDataState);
    return {
      getEmployeeData: get,
      setEmployeeData: (val) => set(val),
    };
  };