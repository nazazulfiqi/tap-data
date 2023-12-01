"use client";

import { Button } from "@/src/components/button/button";
import { UploadDragbleField } from "@/src/components/input-dragable";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { z } from "zod";

export const DataContent: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = ["application/pdf"];

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
        "Hanya menerima file dengan tipe .pdf"
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
    <main>
      <section className="w-full flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-center my-4">
            DATA AWAL MPP VS MPE TAP GROUP TAHUN 2023
          </h1>
        </div>
        <div>
          <form onSubmit={() => {}}>
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
              <span className="font-semibold">Note</span> : Pastikan berkas
              sudah sesuai dengan ketentuan
            </p>
            <Button
              type={"submit"}
              className={`mx-auto py-6 lg:py-0 w-full h-[27px] md:w-[160px] md:h-[48px] text-[16px] font-medium  text-white flex gap-x-2 rounded justify-center items-center hover:opacity-50 ${
                isLoading
                  ? "bg-neutral-300 cursor-not-allowed"
                  : "bg-primary-500 cursor-pointer"
              }`}
            >
              {isLoading ? "sedang mengirim..." : "Unggah Tugas"}
            </Button>
            <ToastContainer />
          </form>
        </div>
      </section>
    </main>
  );
};
