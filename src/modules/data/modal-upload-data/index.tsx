import { Button } from "@/src/components/button/button";
import { UploadDragbleField } from "@/src/components/input-dragable";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { FC, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRecoilState } from "recoil";
import { modalUploadDataOpenState } from "@/src/recoil/atoms/data";

export const ModalUploadData: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useRecoilState(
    modalUploadDataOpenState
  );

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const validationSchema = z.object({
    files: z
      .any()
      .refine(
        (files: File) => files !== undefined && files !== null,
        "File tidak boleh kosong"
      )
      .refine(
        (files: File) => files !== undefined && files?.size <= MAX_FILE_SIZE,
        "Ukuran maksimum adalah 5mb."
      )
      .refine(
        (files: File) =>
          files !== undefined && ACCEPTED_MEDIA_TYPES.includes(files?.type),
        "Hanya menerima file dengan tipe Excel (XLSX)"
      ),
  });

  type TValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
  });

  return (
    <form action="">
      <div className="flex flex-col items-center justify-center pb-4 px-4  w-[500px]">
        <div className="w-full">
          <h1 className="font-bold text-xl">Upload Data</h1>
          <UploadDragbleField
            control={control}
            name="files"
            className="border-dashed border-2 border-neutral-300 mt-7"
            variant={"sm"}
          />
          {errors.files?.message && (
            <p className="text-[14px] text-red-500 mt-[8px] pt-2 font-semibold">
              *{String(errors.files?.message)}
            </p>
          )}
          <p className="text-neutral-base text-[14px] font-medium my-[24px]">
            <span className="font-semibold">Note</span> : Pastikan berkas sudah
            sesuai dengan ketentuan
          </p>
          <Button
            type={"submit"}
            className={`mx-auto py-6 lg:py-0 w-full h-[27px] md:w-[160px] md:h-[48px] text-[16px] font-medium  text-white flex gap-x-2 rounded justify-center items-center hover:opacity-50 ${
              isLoading
                ? "bg-neutral-300 cursor-not-allowed"
                : "bg-primary-500 cursor-pointer"
            }`}
          >
            {isLoading ? "sedang mengirim..." : "Unggah Data"}
          </Button>
          <ToastContainer />
        </div>
        <div className="flex gap-x-4 w-full justify-center">
          <Button
            type="submit"
            className="w-full bg-cream-base py-2 hover:bg-slate-200 border-2 border-slate-400 rounded-md"
          >
            Tambah
          </Button>
          <Button
            type="button"
            className="w-full bg-cream-base py-2 hover:bg-slate-200 border-2 border-slate-400 rounded-md"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Kembali
          </Button>
        </div>
      </div>
    </form>
  );
};
