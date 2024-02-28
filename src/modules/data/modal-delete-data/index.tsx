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
import { modalDeleteDataState } from "@/src/recoil/atoms/data";
import { useDeleteEmployee } from "@/src/hooks/data/hook";

export const DeleteDataModal: FC = ({}) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] =
    useRecoilState(modalDeleteDataState);
  const queryClient = useQueryClient();
  const { mutate } = useDeleteEmployee();

  const validationCreateDescription = z.object({
    year: z.string().min(1, { message: "Required" }),
    month: z.string().min(1, { message: "Required" }),
  });

  type TValidationSchema = z.infer<typeof validationCreateDescription>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TValidationSchema>({
    resolver: zodResolver(validationCreateDescription),
    mode: "all",
  });

  const onSubmit = handleSubmit((data) => {
    const date = `${data.year}-${data.month}`;

    console.log(date);

    // const formData = new FormData();
    // formData.append("title", data.title);
    // formData.append("content", data.content);

    try {
      mutate(date as unknown as any, {
        onSuccess: () => {
          setIsModalDeleteOpen(false);
          queryClient.invalidateQueries(["employee-get"]);
          toast.success("Delete Data Success!", {
            autoClose: 2000,
          });
        },
      });
      setIsModalDeleteOpen(true);
    } catch (err) {
      toast.error("Delete Data Failed!", {
        autoClose: 2000,
      });
      console.log(err);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4 w-[500px]">
      <div className="w-full pb-3 flex flex-col gap-y-2 justify-center items-center text-center">
        <CiTrash size={50} color="red" />
        <p className="font-bold">Peringatan</p>
        <p>
          Data akan di <span className="font-bold">Hapus</span>
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <TextField
          label="Year"
          name="year"
          placeholder={"ex. 2024"}
          required
          type="number"
          variant="md"
          control={control}
          status={errors.year ? "error" : "none"}
          message={errors.year?.message}
        />
        <TextField
          label="Month"
          name="month"
          placeholder={"ex. 02"}
          required
          type="number"
          variant="md"
          control={control}
          status={errors.month ? "error" : "none"}
          message={errors.month?.message}
        />
        <div className="flex gap-4 pt-5 w-full justify-center">
          <Button
            type="submit"
            className="bg-white border-2 font-semibold py-2 border-cream-base px-12 text-black rounded-md"
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
