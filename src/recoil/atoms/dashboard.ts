import { TEmployeeResponse } from "@/src/types/userData";
import { atom } from "recoil";

export const EmployeeDataState = atom<TEmployeeResponse>({
    key: "EmployeeDataState",
    default: {
        status: 0,
        message: '',
        data: {
         filter: [
         ],
        mpe_vs_mpp: 0,
        fulfill: 0,
        vacant: 0,
        closed: 0,
        over_mpp: 0,
        fptk_over_mpp: 0,
          employees: [

          ],
          page_size: 0,
          total_data: 0,
          current_page: 1,
          max_page: 1,
        },
    }
})
 