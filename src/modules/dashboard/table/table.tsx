"use client"
  import React, { FC, useEffect, useState } from "react";
  import Link from "next/link";

//   import { formatTime } from "@cs-user/utils";
//   import { useGetUserData } from "hooks/dashboard/user/hooks";
  import { useRouter, useSearchParams } from "next/navigation";
import dataStatic from "./constant";
import { ReusableTable } from "@/src/components/table";
import { useEmployeeData, useGetEmployee } from "@/src/hooks/dashboard/hook";
import Pagination from "@/src/components/pagination";
// import { TUserDataItem } from "@/src/types/userData";
  
  export const TableSection: FC = () => {

    const columns = [
      { header: "Position Description", className: "w-[200px]" },
      { header: "NIK", hasSorting: true, className: "text-center", sort_by: "nik" },
      { header: "Name", hasSorting: true, sort_by: "name" },
      { header: "Status  ", hasSorting: true, sort_by: "created_at" },
      { header: "NIK Plan" },
      { header: "Name Plan" },
      { header: "Status Plan" },
    ];
  
    const [perPage, setPerPage] = useState<number>(20);
    const [search, setSearch] = useState<string>("");
    // const [userData, setUserData] = useState<TUserDataItem[]>([]);
    const [totalIndex, setTotalIndex] = useState<number>(0);
    const [nextActive, setNextActive] = useState<boolean>(true);
    const [prevActive, setPrevActive] = useState<boolean>(false);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [sortColumn, setSortColumn] = useState<string>("_id");
    const router = useRouter();

    const searchParams = useSearchParams();
    const page = searchParams.get('page') || '1';

    const {data, refetch} = useGetEmployee(Number(page), 10)

    console.log(data);
    
    const { setEmployeeData, getEmployeeData } = useEmployeeData();

    useEffect(() => {
      setEmployeeData(data as any);
     
    }, [data, setEmployeeData]);

    const handlePageChange = async (page: number) => {
      window.scrollTo(0, 0);
      const { data } = await refetch();
  
      router.replace(`/dashboard?page=${page}`);
    };


    // const { data: queryData } = useGetUserData(perPage, search, sortColumn, sortOrder, page);
  
    // useEffect(() => {
    //   if (queryData && queryData.data) {
    //     setUserData(queryData.data);
    //     setTotalIndex(queryData.meta.total);
    //   }
    // }, [queryData]);
  
    // console.log(userData);
  
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
  
    return (
      <div className="flex flex-col gap-5 justify-center items-center mt-8">
        <ReusableTable
          classBody="bg-[#fff]"
          classHead="bg-[#F5F8FF] text-neutral-400 border-b"
          columns={columns}
          MainTableSort={handleSort}
        >
          {getEmployeeData?.data?.employees?.map((data: any, index: any) => {

            
            return (
              <tr key={index} className="border-b">
                <td className="text-center">
                  <div className="flex justify-center items-center py-2">{data.position_description}</div>
                </td>
                <td>
                  <div className="flex justify-center items-center py-2">{data.nik}</div>
                </td>
                <td>
                  <div className="flex justify-center items-center py-2">{data.name}</div>
                </td>
                <td>
                  <div className="flex justify-center items-center py-2">{data.status}</div>
                </td>
                <td>
                  <div className="flex justify-center items-center py-2">{data.nik_plan}</div>
                </td>
                <td>
                  <div className="flex justify-center items-center py-2">{data.nama_karyawan_plan_fulfillment}</div>
                </td>
                <td>
                  <div className="flex justify-center items-center py-2">{data.status_plan_fullfillment}</div>
                </td>
              </tr>
            );
          })}
        </ReusableTable>
        <Pagination
            onPageChange={handlePageChange}
            totalPages={Number(getEmployeeData?.data?.max_page)}
            currentPage={Number(page)}
          />
      </div>
    );
  };
  