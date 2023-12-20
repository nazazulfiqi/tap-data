import { Button } from "@/src/components/button/button";
import { LoadingSpinner } from "@/src/components/loading/spinner";
import { ReusableTable } from "@/src/components/table";
import { useGetDescriptions } from "@/src/hooks/description/hook";
import { FC, useState } from "react";
import { CreateDescriptionModal } from "../modal-tambah-desc";
import { useRecoilState } from "recoil";
import {
  modalCreateDescriptionOpenState,
  modalDeleteDescriptionOpenState,
} from "@/src/recoil/atoms/descriptions";
import { Modal } from "@/src/components/modal";
import { DeleteDescriptionModal } from "../modal-delete-desc";

export const AdminDescriptionContent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(
    modalCreateDescriptionOpenState
  );
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useRecoilState(
    modalDeleteDescriptionOpenState
  );

  const [descriptionId, setDescriptionId] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("_id");

  const columns = [
    { header: "Title", className: "w-[200px]" },
    {
      header: "Content",
      hasSorting: true,
      className: "text-center",
      sort_by: "nik",
    },
    { header: "Actions" },
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

  const { data, isLoading } = useGetDescriptions();

  const descriptionsData = data?.data;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  console.log(descriptionId);

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
          {descriptionsData && descriptionsData.length > 0 ? (
            <ReusableTable
              classBody="bg-[#fff] "
              classHead="bg-[#F5F8FF] text-neutral-400 border-b"
              columns={columns}
              MainTableSort={handleSort}
            >
              {descriptionsData?.map((data) => {
                return (
                  <>
                    <tr key={data?.id} className="border-b">
                      <td className="text-center">
                        <div className="flex justify-center items-center py-2">
                          {data?.title}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center py-2">
                          {data?.content}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center py-2 gap-2 px-2">
                          <Button
                            type="button"
                            className="px-4 bg-blue-500 rounded-sm py-1 text-white hover:bg-blue-600"
                          >
                            Edit
                          </Button>
                          <Button
                            type="button"
                            className="px-3 bg-red-500 rounded-sm py-1 text-white hover:bg-red-600"
                            onClick={() => {
                              setIsModalDeleteOpen(true);
                              setDescriptionId(String(data?.id));
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
          ) : (
            <p className="text-center text-xl mt-4">Data Tidak Ada</p>
          )}
        </div>
      </section>
      <Modal
        lookup={isModalOpen}
        withClose={true}
        onClose={() => setIsModalOpen(false)}
      >
        <CreateDescriptionModal />
      </Modal>
      <Modal
        lookup={isModalDeleteOpen}
        withClose={true}
        onClose={() => setIsModalDeleteOpen(false)}
      >
        <DeleteDescriptionModal descriptionId={descriptionId} />
      </Modal>
    </main>
  );
};
