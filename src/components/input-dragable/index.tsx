"use client";

import Image from "next/image";
import { ReactElement, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FieldValues, useController } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import IconFile from "./ic-file";
import { TUploadFieldProps } from "./types";

export const UploadDragbleField = <T extends FieldValues>(
  props: TUploadFieldProps<T>
): ReactElement => {
  const { field } = useController(props);
  const [type, setType] = useState("");
  const [getName, setName] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      field.onChange(acceptedFiles[0]);
      setType(acceptedFiles[0]?.type);
      setName(acceptedFiles[0]?.name);
    },
    [field, setType]
  );

  const { getRootProps, getInputProps } = useDropzone({ ...props, onDrop });
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "image/png",
  ];

  const ACCEPTED_VIDEO_TYPES = ["video/ogg", "video/webm", "video/mp4"];

  const handleRemoveFile = () => {
    setType("");
    setName("");
    field.onChange(null);
  };

  return (
    <div
      {...getRootProps(props)}
      className={`flex items-center min-h-[300px] bg-neutral-100 justify-center relative w-full p-2 border-2 rounded-lg border-neutral-300 ${props.className}`}
    >
      {type && getName && field.value && (
        <div
          onClick={handleRemoveFile}
          className="absolute right-4 top-4 shadow-md rounded-full bg-white cursor-pointer"
        >
          <AiOutlineCloseCircle color="#e63a3a" size={30} />
        </div>
      )}
      {field.value && ACCEPTED_IMAGE_TYPES.includes(type) ? (
        <Image
          src={URL.createObjectURL(field.value)}
          width={400}
          height={400}
          alt={"drag"}
        />
      ) : field.value && ACCEPTED_VIDEO_TYPES.includes(type) ? (
        <video
          width={400}
          controls
          height={400}
          src={URL.createObjectURL(field.value)}
        />
      ) : field.value !== null &&
        field.value !== undefined &&
        type === "application/pdf" ? (
        <span className="text-black break-all">{getName}</span>
      ) : field.value === null || field.value === undefined ? (
        <div className="flex flex-col items-center w-full px-4 py-6 bg-[#F5F5F5] dark:bg-transparent rounded-lg cursor-pointer">
          <IconFile />
          <span className="mt-2 text-xs md:text-sm lg:text-sm text-center text-black font-semibold dark:text-white">
            Seret, taruh dan <span className="text-blue-base">pilih file</span>{" "}
            untuk mengunggah
          </span>
          <span className="flex justify-center items-center text-xs md:text-sm lg:text-sm mt-2 rounded-lg border overflow-hidden">
            <p className="bg-neutral-300 font-semibold p-3">Pilih File</p>
            <p className="px-5">Belum memilih tugas</p>
          </span>
          <input
            {...getInputProps(props)}
            {...props}
            onChange={(event) => {
              field.onChange(event.target.files);
            }}
            className="hidden"
            type="file"
          />
        </div>
      ) : null}
    </div>
  );
};
