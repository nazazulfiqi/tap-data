"use client";

import { Button } from "@/src/components/button/button";
import { UploadDragbleField } from "@/src/components/input-dragable";
import { Modal } from "@/src/components/modal";
import { modalUploadDataOpenState } from "@/src/recoil/atoms/data";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { z } from "zod";
import { ModalUploadData } from "../modal-upload-data";

export const DataContent: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useRecoilState(
    modalUploadDataOpenState
  );

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
