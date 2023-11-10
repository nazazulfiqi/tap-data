"use client";
import React, {
  DependencyList,
  FC,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dataStatic from "./constant";
import { ReusableTable } from "@/src/components/table";
import {
  useEmployeeData,
  useGetBusinessUnit,
  useGetEmployee,
  useGetGroup,
  useGetRegional,
} from "@/src/hooks/dashboard/hook";
import Pagination from "@/src/components/pagination";
import { LoadingSpinner } from "@/src/components/loading/spinner";
import { Button } from "@/src/components/button/button";
import TextFieldNormal from "@/src/components/textfield";
import SelectBox from "../../../components/selectbox";
import { MdChevronRight } from "react-icons/md";
import Dropdown from "@/src/components/dropdown";
import IconArrowDown from "@/src/components/icons/ic-arrow-down";

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

export const TableSection: FC = () => {
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
  ];

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("_id");
  const [businessUnit, setBusinessUnit] = useState<string>("");
  const [regional, setRegional] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const page = searchParams.get("page") || "1";

  const [option, setOption] = useState({
    limit: 10,
    page: parseInt(page),
    search: "",
    businessUnit: "",
    regional: "",
  });

  const { data, refetch, isLoading } = useGetEmployee(
    option.page,
    option.limit,
    searchQuery,
    businessUnit,
    regional
  );

  const [deb, setDeb] = useState(searchQuery);

  const listEmployeeData = data;
  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb }));
      router.push(`/dashboard?page=1&search=${deb}`);
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
    router.push(`/dashboard?page=${page}&search=${deb}`);
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

  const {
    data: dataBusinessUnit,
    refetch: refetchBusinessUnit,
    isLoading: isLoadingBusinessUnit,
  } = useGetBusinessUnit();

  const handleBusinessFilter = (selectedBusinessUnit: string) => {
    setBusinessUnit(selectedBusinessUnit);
    setOption((prev) => ({
      ...prev,
      page: 1,
      businessUnit: selectedBusinessUnit,
    }));
    // router.push(`/dashboard?business_unit_description=${selectedBusinessUnit}&page=${page}&search=${deb}`);
  };

  const {
    data: dataRegional,
    refetch: refetchRegional,
    isLoading: isLoadingRegional,
  } = useGetRegional();
  const handleRegionalFilter = (selectedRegional: string) => {
    setRegional(selectedRegional);
    setOption((prev) => ({ ...prev, page: 1, regional: selectedRegional }));
    // router.push(`/dashboard?business_unit_description=${selectedRegional}&regional=${selectedRegional}&page=${page}&search=${deb}`);
  };

  const {
    data: dataGroup,
    refetch: refetchGroup,
    isLoading: isLoadingGroup,
  } = useGetGroup();

  return (
    <Fragment>
      <section className="w-full mt-4 px-8">
        <main className="">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <TextFieldNormal
                name="KEYWORD"
                prop="block"
                desc="Note: The user can search on Regional, Division Description, Position Description, Status Plan Fulfillment"
                widthInput="w-full"
                value={deb}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDeb(e.target.value)
                }
              />
            </div>
            <div className="flex gap-x-4">
              <div className="w-full gap-y-2 flex flex-col">
                <label htmlFor="" className="font-medium text-sm">
                  BUSINESS UNIT
                </label>
                <Dropdown
                  placeholder={"Unit Bisnis"}
                  dataOptions={dataBusinessUnit?.data || []}
                  reverse={false}
                  textCentre={false}
                  icons={<IconArrowDown />}
                  shadow={false}
                  bold={false}
                  onChange={handleBusinessFilter}
                />
              </div>
              <div className="w-full gap-y-2 flex flex-col">
                <label htmlFor="" className="font-medium text-sm">
                  REGIONAL
                </label>
                <Dropdown
                  placeholder={"Regional"}
                  dataOptions={dataRegional?.data || []}
                  reverse={false}
                  textCentre={false}
                  icons={<IconArrowDown />}
                  shadow={false}
                  bold={false}
                  onChange={handleRegionalFilter}
                />
              </div>
              <div className="w-full gap-y-2 flex flex-col">
                <label htmlFor="" className="font-medium text-sm">
                  GROUP
                </label>
                <Dropdown
                  placeholder={"Group"}
                  dataOptions={dataGroup?.data || []}
                  reverse={false}
                  textCentre={false}
                  icons={<IconArrowDown />}
                  shadow={false}
                  bold={false}
                  onChange={handleRegionalFilter}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-full gap-y-2 flex flex-col">
                <label htmlFor="" className="font-medium text-sm">
                LOCATION DESCRIPTION
                </label>
                <Dropdown
                  placeholder={"Location Description"}
                  dataOptions={dataGroup?.data || []}
                  reverse={false}
                  textCentre={false}
                  icons={<IconArrowDown />}
                  shadow={false}
                  bold={false}
                  onChange={handleRegionalFilter}
                />
              </div>
              <Dropdown
                placeholder={"Unit Bisnis"}
                dataOptions={["Test"]}
                reverse={false}
                textCentre={true}
                icons={<IconArrowDown />}
                shadow={false}
                bold={false}
                // onChange={handleFacultyFilter}
              />
              <Dropdown
                placeholder={"Unit Bisnis"}
                dataOptions={["Test"]}
                reverse={false}
                textCentre={true}
                icons={<IconArrowDown />}
                shadow={false}
                bold={false}
                // onChange={handleFacultyFilter}
              />
            </div>
            <div className="flex space-x-4">
              <Dropdown
                placeholder={"Unit Bisnis"}
                dataOptions={["Test"]}
                reverse={false}
                textCentre={true}
                icons={<IconArrowDown />}
                shadow={false}
                bold={false}
                // onChange={handleFacultyFilter}
              />
              <Dropdown
                placeholder={"Unit Bisnis"}
                dataOptions={["Test"]}
                reverse={false}
                textCentre={true}
                icons={<IconArrowDown />}
                shadow={false}
                bold={false}
                // onChange={handleFacultyFilter}
              />
              <Dropdown
                placeholder={"Unit Bisnis"}
                dataOptions={["Test"]}
                reverse={false}
                textCentre={true}
                icons={<IconArrowDown />}
                shadow={false}
                bold={false}
                // onChange={handleFacultyFilter}
              />
            </div>
          </div>
          <div className="flex mt-5 gap-x-4 justify-end">
            <Button
              type="button"
              className="bg-[#D9D9D9] text-black px-6 border-2 border-black font-bold"
            >
              SEARCH
            </Button>
            <Button
              type="button"
              className="bg-[#D9D9D9] text-black px-6 border-2 border-black font-bold"
            >
              CLEAR
            </Button>
          </div>
        </main>
      </section>

      <div className="flex flex-col gap-5 justify-center items-center mt-8">
        <ReusableTable
          classBody="bg-[#fff]"
          classHead="bg-[#F5F8FF] text-neutral-400 border-b"
          columns={columns}
          MainTableSort={handleSort}
        >
          {listEmployeeData?.data?.employees?.map((data: any, index: any) => {
            return (
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
                    {data.status_plan_fullfillment}
                  </div>
                </td>
              </tr>
            );
          })}
        </ReusableTable>
        {Number(page) <= Number(getEmployeeData?.data?.max_page) && (
          <Pagination
            onPageChange={handlePageChange}
            totalPages={Number(getEmployeeData?.data?.max_page)}
            currentPage={Number(page)}
          />
        )}
      </div>
    </Fragment>
  );
};
