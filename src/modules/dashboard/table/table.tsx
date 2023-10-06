"use client"
  import React, { FC, useEffect, useState } from "react";
  import Link from "next/link";

//   import { formatTime } from "@cs-user/utils";
//   import { useGetUserData } from "hooks/dashboard/user/hooks";
  import { useRouter } from "next/navigation";
import dataStatic from "./constant";
import { ReusableTable } from "@/src/components/table";
import { useEmployeeData, useGetEmployee } from "@/src/hooks/dashboard/hook";
// import { TUserDataItem } from "@/src/types/userData";
  
  export const TableSection: FC = () => {

    const {data} = useGetEmployee()

    console.log(data);
    
    const { setEmployeeData, getEmployeeData } = useEmployeeData();

    useEffect(() => {
      setEmployeeData(data as any);
     
    }, [data, setEmployeeData]);




    const columns = [
      { header: "Position Description", className: "w-[200px]" },
      { header: "NIK", hasSorting: true, className: "text-center", sort_by: "nik" },
      { header: "Name", hasSorting: true, sort_by: "name" },
      { header: "Status  ", hasSorting: true, sort_by: "created_at" },
      { header: "NIK Plan" },
      { header: "Name Plan" },
      { header: "Status Plan" },
    ];
  
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(20);
    const [search, setSearch] = useState<string>("");
    // const [userData, setUserData] = useState<TUserDataItem[]>([]);
    const [totalIndex, setTotalIndex] = useState<number>(0);
    const [nextActive, setNextActive] = useState<boolean>(true);
    const [prevActive, setPrevActive] = useState<boolean>(false);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [sortColumn, setSortColumn] = useState<string>("_id");
    const router = useRouter();
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
  
    const totalPages = Math.ceil(totalIndex / perPage);
  
    const handlePreviousPage = () => {
      if (page > 1) {
        setPage(page - 1);
        router.push(`/dashboard/user?page=${page - 1}`);
      }
    };
  
    const handleNextPage = () => {
      if (page < totalPages) {
        setPage(page + 1);
        router.push(`/dashboard/user?page=${page + 1}`);
      }
    };
  
    const HandleUsePage = (page: number) => {
      setPage(page);
      router.push(`/dashboard/user?page=${page}`);
    };
  
    const start = (page - 1) * perPage;
    return (
      <div className="flex flex-col gap-5 justify-center items-center">
        <ReusableTable
          classBody="bg-[#fff]"
          classHead="bg-[#F5F8FF] text-neutral-400 border-b"
          columns={columns}
          MainTableSort={handleSort}
        >
          {getEmployeeData?.data?.employees?.map((data: any, index: any) => {
            console.log(data);
            
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
        {/* <Paginations
          page={page}
          setPage={HandleUsePage}
          totalPages={totalPages}
          prevActive={prevActive}
          nextActive={nextActive}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        /> */}
      </div>
    );
  };
  