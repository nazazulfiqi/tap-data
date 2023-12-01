import { api } from "@/src/config/api/apiConfig";
import { TAddDataEmployee, TDataEmployeeDetailResponse } from "@/src/types/data";
import { ADD_DATA_KARYAWAN } from "@/src/utils/constant/endpoints/data";
import { useSession } from "next-auth/react";



export const postDataEmployee = async (
    payload: TAddDataEmployee,
    token: string,
  ): Promise<TDataEmployeeDetailResponse> => {
    
    const { data } = await api({
      method: "post",
      url: ADD_DATA_KARYAWAN,
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + token,
      },
      data: payload,
    })
    return data;
  };