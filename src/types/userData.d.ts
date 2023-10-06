

export type TEmployeeItem = {
  id: number;
  nik: string;
  name: string;
  hire_date: string;
  length_of_service: string;
  position_description: string;
  start_position: string;
  length_of_position: string;
  mgr_level_description: string;
  mpp: string;
  mpe: string;
  mpe_vs_mpp: string;
  status: string;
  group: string;
  departmen_description: string;
  division_description: string;
  directorat_description: string;
  location_description: string;
  regional: string;
  business_unit_description: string;
  plan_fulfillment: string;
  detail_plan_fulfillment: string;
  nik_plan: string;
  nama_karyawan_plan_fulfillment: string;
  mpe_plus_plan: string;
  status_plan_fullfillment: string;
  createdAt: string;
  updatedAt: string;
};

export type TEmployeeResponse = {
  status: number;
  message: string;
  data: {
    employees: TEmployeeItem[];
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

export type TuseEmployeeData = {
  getEmployeeData: TEmployeeResponse;
  setEmployeeData: (val: TEmployeeResponse) => void;
}