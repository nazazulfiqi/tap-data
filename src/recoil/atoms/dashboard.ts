import { TEmployeeResponse } from "@/src/types/userData";
import { atom } from "recoil";

export const EmployeeDataState = atom<TEmployeeResponse>({
    key: "EmployeeDataState",
    default: {
        status: 0,
        message: '',
        data: {
          mpp_total: 0,
        mpe_total: 0,
        mpe_plus_plan_total: 0,
          employees: [

          ],
          page_size: 0,
          total_data: 0,
          current_page: 1,
          max_page: 1,
        },
    }
})
 