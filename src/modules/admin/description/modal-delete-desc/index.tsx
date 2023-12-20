import { Button } from "@/src/components/button/button";
import { TextField } from "@/src/components/text";
import { validationSchemaLogin } from "@/src/config/validation/authentications/login/login";
import {
  useDeleteDescription,
  usePostCreateDescription,
} from "@/src/hooks/description/hook";
import {
  modalCreateDescriptionOpenState,
  modalDeleteDescriptionOpenState,
} from "@/src/recoil/atoms/descriptions";
import { TCreateDescriptions } from "@/src/types/admin/descriptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { z } from "zod";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";
interface DeleteDescriptionModalProps {
  descriptionId: string; // Adjust the type according to your needs
}

export const DeleteDescriptionModal: FC<DeleteDescriptionModalProps> = ({
  descriptionId,
}) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useRecoilState(
    modalDeleteDescriptionOpenState
  );
  const queryClient = useQueryClient();
  const { mutate } = useDeleteDescription();

  const handleSubmitDelete = async () => {
    await mutate(descriptionId, {
      onSuccess: () => {
        setIsModalDeleteOpen(false);
        queryClient.invalidateQueries(["descriptions-get"]);
        toast.success("Delete Description Success!", {
          autoClose: 2000,
        });
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4 w-[500px]">
      <div className="w-full pb-3 flex flex-col gap-y-2 justify-center items-center text-center">
        <CiTrash size={50} color="red" />
        <p className="font-bold">Peringatan</p>
        <p>
          Description akan di <span className="font-bold">Hapus</span>
        </p>
      </div>
      <form>
        <div className="flex gap-4 pt-5 w-full justify-center">
          <Button
            type="button"
            className="bg-white border-2 font-semibold py-2 border-cream-base px-12 text-black rounded-md"
            onClick={handleSubmitDelete}
          >
            Ya, Hapus
          </Button>
          <Button
            type="button"
            className="bg-cream-base font-semibold py-2 px-12 text-black rounded-md"
            onClick={() => setIsModalDeleteOpen(false)}
          >
            Tidak
          </Button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
