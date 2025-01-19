"use client";

import { Button } from "@/src/components/button/button";

import { DependencyList, FC, useCallback, useEffect, useState } from "react";

import { ReusableTable } from "@/src/components/table";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useGetUsers } from "@/src/hooks/authentications/hook";
import Pagination from "@/src/components/pagination";
import TextFieldNormal from "@/src/components/textfield";
import { Modal } from "@/src/components/modal";
import { modalDeleteDataState } from "@/src/recoil/atoms/data";
import { useRecoilState } from "recoil";
import { DeleteDataModalUser } from "../modal-delete-user";

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

export const UsersAdminContent: FC = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("_id");
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [id, setId] = useState<string>("");

  const [modalDeleteOpen, setModalDeleteOpen] =
    useRecoilState(modalDeleteDataState);

  const columns = [
    { header: "Fullname", hasSorting: true, sort_by: "fullname" },
    { header: "Email" },
    { header: "Username" },
    { header: "Action" },
  ];

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
  });

  const { data, refetch, isLoading } = useGetUsers(
    option.page,
    option.limit,
    searchQuery
  );

  const [deb, setDeb] = useState(searchQuery);

  const listUsersData = data;
  useEffect(() => {
    setOption(option);
  }, [option]);

  //   console.log(data);
  console.log(listUsersData);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb }));
      router.push(`/admin/users?page=1&search=${deb}`);
    },
    [deb],
    700
  );

  const handlePageChange = async (page: number) => {
    setOption((prev) => ({ ...prev, page: page }));
    router.push(`/admin/users?page=${page}&search=${deb}`);
  };

  return (
    <main>
      <section className="w-full flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-center my-4">Users</h1>
        </div>
        <div className="flex justify-end">
          <Link
            href={"/admin/users/create"}
            className="px-4 py-1 border-2 border-black rounded-md font-semibold bg-[#22AFFF]"
          >
            CREATE
          </Link>
        </div>
        <div className="w-full">
          <TextFieldNormal
            name="SEARCH"
            prop="block"
            desc="Note: The user can search on Full Name"
            widthInput="w-full"
            value={deb}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDeb(e.target.value)
            }
          />
        </div>

        <div className="w-full mt-8 overflow-auto border-2 border-black flex scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-lg">
          <ReusableTable
            classBody="bg-[#fff]"
            classHead="bg-[#F5F8FF] text-neutral-400 border-b"
            columns={columns}
            MainTableSort={handleSort}
          >
            {listUsersData?.data?.users?.map((data, index) => {
              return (
                <>
                  <tr key={index} className="border-b">
                    <td className="text-center">
                      <div className="flex justify-center items-center py-2">
                        {data.full_name}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.email}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.username ? data.username : "-"}
                      </div>
                    </td>
                    <td className="text-center">
                      <div>
                        <Button
                          type="button"
                          className="px-3 bg-red-500 rounded-sm py-1 text-white hover:bg-red-600"
                          onClick={() => {
                            setModalDeleteOpen(true);
                            setId(String(data.id));
                          }}
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
        {Number(page) <= Number(listUsersData?.data?.max_page) && (
          <Pagination
            onPageChange={handlePageChange}
            totalPages={Number(listUsersData?.data?.max_page)}
            currentPage={Number(page)}
          />
        )}
      </section>
      <Modal
        lookup={modalDeleteOpen}
        withClose={true}
        onClose={() => setModalDeleteOpen(false)}
      >
        <DeleteDataModalUser id={id} />
      </Modal>
    </main>
  );
};
