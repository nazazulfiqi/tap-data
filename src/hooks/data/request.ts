import { api } from "@/src/config/api/apiConfig";
import { TAddDataEmployee, TDataEmployeeDetailResponse } from "@/src/types/data";
import { TEmployeeResponse } from "@/src/types/userData";
import { DATA_KARYAWAN } from "@/src/utils/constant/endpoints/dashboard";
import { ADD_DATA_KARYAWAN } from "@/src/utils/constant/endpoints/data";
import { useSession } from "next-auth/react";



export const employeeGetAllRequest = async (
  page: number,
  limit: number,
  search: string,
): Promise<TEmployeeResponse> => {
    const { data } = await api.get(
      `${DATA_KARYAWAN}?page=${page}&limit=${limit}&search=${search}`
    );
    // console.log(data);
    
    return data;
  };

export const postDataEmployee = async (
    payload: TAddDataEmployee,
  ): Promise<TDataEmployeeDetailResponse> => {
    
    const { data } = await api({
      method: "post",
      url: ADD_DATA_KARYAWAN,
      headers: {
        "Content-Type": "multipart/form-data",
        
      },
      data: payload,
    })
    return data;
  };