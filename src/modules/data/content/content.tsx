"use client";

import { Button } from "@/src/components/button/button";
import { UploadDragbleField } from "@/src/components/input-dragable";
import { Modal } from "@/src/components/modal";
import { modalUploadDataOpenState } from "@/src/recoil/atoms/data";
import { DependencyList, FC, useCallback, useEffect, useState } from "react";
import Pagination from "@/src/components/pagination";

import { useRecoilState } from "recoil";

import { ModalUploadData } from "../modal-upload-data";
import { ReusableTable } from "@/src/components/table";
import { useRouter, useSearchParams } from "next/navigation";
import { useEmployeeData, useGetEmployee } from "@/src/hooks/dashboard/hook";

export function useDebounce(
  effect: VoidFunction,
  dependencies: DependencyList,
  delay: number
): void {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export const DataContent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(
    modalUploadDataOpenState
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("_id");
  const [businessUnit, setBusinessUnit] = useState<string>("");
  const [regional, setRegional] = useState<string>("");
  const [group, setGroup] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [directorat, setDirectorat] = useState<string>("");
  const [division, setDivision] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [statusPlanFulfillment, setStatusPlanFulfillment] =
    useState<string>("");
  const [planFulfillment, setPlanFulfillment] = useState<string>("");
  const [detailPlanFulfillment, setDetailPlanFulfillment] =
    useState<string>("");

  const renderActions = (data: any, index: any) => {
    return (
      <td key={index} className="text-center">
        <div className="flex justify-center items-center py-2">
          {/* Add your delete and edit buttons here */}
          <button onClick={() => handleEdit(data)}>Edit</button>
          <button onClick={() => handleDelete(data)}>Delete</button>
        </div>
      </td>
    );
  };

  const columns = [
    { header: "Position Description", className: "w-[200px]" },
    {
      header: "NIK",
      hasSorting: true,
      className: "text-center",
      sort_by: "nik",
    },
    { header: "Name", hasSorting: true, sort_by: "name" },
    { header: "Status  ", hasSorting: true, sort_by: "created_at" },
    { header: "NIK Plan" },
    { header: "Name Plan" },
    { header: "Status Plan" },
    { header: "Plan Fulfillment" },
    { header: "Detail Plan Fulfillment" },
    { header: "Detail Plan Fulfillment" },
    { header: "Detail Plan Fulfillment" },
    { header: "Detail Plan Fulfillment" },
    { header: "Detail Plan Fulfillment" },
    { header: "Detail Plan Fulfillment" },
    { header: "Detail Plan Fulfillment" },
    {
      header: "Action",
      className: "text-center position-fixed",
      render: renderActions,
    },
  ];

  const handleEdit = (data: any) => {
    // Add your edit logic here
  };

  const handleDelete = (data: any) => {
    // Add your delete logic here
  };

  const handleSort = (header: string) => {
    if (sortColumn === header) {
      // If the same column is clicked, toggle the sorting order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If a different column is clicked, set it as the new sorting column and default to ascending order
      setSortColumn(header);
      setSortOrder("asc");
    }
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const allParams = searchParams.values();
  const searchQuery = searchParams.get("search") || "";
  const page = searchParams.get("page") || "1";

  const [option, setOption] = useState({
    limit: 10,
    page: parseInt(page),
    search: "",
    businessUnit: "",
    regional: "",
    group: "",
    location: "",
    directorat: "",
    division: "",
    status: "",
    position: "",
    statusPlanFulfillment: "",
  });

  const { data, refetch, isLoading } = useGetEmployee(
    option.page,
    option.limit,
    searchQuery,
    businessUnit,
    regional,
    group,
    location,
    directorat,
    division,
    status,
    position,
    statusPlanFulfillment,
    planFulfillment,
    detailPlanFulfillment
  );

  const [deb, setDeb] = useState(searchQuery);

  const listEmployeeData = data;
  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb }));
      router.push(`/data?page=1&search=${deb}`);
    },
    [deb],
    700
  );

  const { setEmployeeData, getEmployeeData } = useEmployeeData();

  useEffect(() => {
    setEmployeeData(data as any);
  }, [data, setEmployeeData]);

  const handlePageChange = async (page: number) => {
    setOption((prev) => ({ ...prev, page: page }));
    router.push(`/data?page=${page}&search=${deb}`);
  };

  return (
    <main>
      <section className="w-full flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-center my-4">
            DATA AWAL MPP VS MPE TAP GROUP TAHUN 2023
          </h1>
        </div>
        <div className="flex justify-end">
          <Button
            type="button"
            className="px-4 py-1 border-2 border-black rounded-md font-semibold bg-[#22AFFF]"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            INSERT
          </Button>
        </div>
        <div className="w-full mt-8 overflow-auto border-2 border-black flex scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-lg">
          <ReusableTable
            classBody="bg-[#fff]"
            classHead="bg-[#F5F8FF] text-neutral-400 border-b"
            columns={columns}
            MainTableSort={handleSort}
          >
            {listEmployeeData?.data?.employees?.map((data: any, index: any) => {
              return (
                <>
                  <tr key={index} className="border-b">
                    <td className="text-center">
                      <div className="flex justify-center items-center py-2">
                        {data.position_description}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.nik}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.name}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.status}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.nik_plan}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.nama_karyawan_plan_fulfillment}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.status_plan_fulfillment}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.plan_fulfillment}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.detail_plan_fulfillment}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2 gap-2">
                        <Button
                          type="button"
                          className="px-4 bg-blue-500 rounded-sm py-1 text-white hover:bg-blue-600"
                        >
                          Edit
                        </Button>
                        <Button
                          type="button"
                          className="px-3 bg-red-500 rounded-sm py-1 text-white hover:bg-red-600"
                        >
                          Hapus
                        </Button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </ReusableTable>
        </div>
        {Number(page) <= Number(getEmployeeData?.data?.max_page) && (
          <Pagination
            onPageChange={handlePageChange}
            totalPages={Number(getEmployeeData?.data?.max_page)}
            currentPage={Number(page)}
          />
        )}
      </section>
      <Modal
        lookup={isModalOpen}
        withClose={true}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalUploadData />
      </Modal>
    </main>
  );
};
