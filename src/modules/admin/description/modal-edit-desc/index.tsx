import { Button } from "@/src/components/button/button";
import { TextField } from "@/src/components/text";
import { validationSchemaLogin } from "@/src/config/validation/authentications/login/login";
import {
  usePostCreateDescription,
  usePutEditDescription,
} from "@/src/hooks/description/hook";
import {
  modalCreateDescriptionOpenState,
  modalEditDescriptionOpenState,
} from "@/src/recoil/atoms/descriptions";
import {
  TCreateDescriptions,
  TDescriptions,
} from "@/src/types/admin/descriptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { z } from "zod";
import "react-toastify/dist/ReactToastify.css";

export interface EditDescriptionModalProps {
  descData: TDescriptions; // Adjust the type of descData as needed
}

export const EditDescriptionModal: FC<EditDescriptionModalProps> = ({
  descData,
}) => {
  const [isModalEditOpen, setIsModalEditOpen] = useRecoilState(
    modalEditDescriptionOpenState
  );

  const queryClient = useQueryClient();
  const { mutate } = usePutEditDescription(descData.id);

  const validationCreateDescription = z.object({
    title: z.any(),
    content: z.any(),
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
    defaultValues: {
      title: descData.title,
      content: descData.content,
    },
  });

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);

    try {
      mutate(formData as unknown as TCreateDescriptions, {
        onSuccess: () => {
          setIsModalEditOpen(false);
          queryClient.invalidateQueries(["descriptions-get"]);
          toast.success("Edit Description Success!", {
            autoClose: 2000,
          });
        },
      });
      setIsModalEditOpen(true);
    } catch (err) {
      // setPrivateStatus(false);
      console.log(err);
    }
  });

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="flex flex-col items-center justify-center pb-4 px-4  w-[500px]">
        <div className="w-full pb-3 flex flex-col gap-y-4 font">
          <TextField
            label="Description Title"
            name="title"
            placeholder={"Description Title"}
            required
            variant="md"
            control={control}
            status={errors.title ? "error" : "none"}
            // message={errors.title?.message}
          />
          <TextField
            label="Description Content"
            name="content"
            placeholder={"Description Content"}
            required
            variant="md"
            control={control}
            status={errors.content ? "error" : "none"}
            // message={errors.content?.message}
          />
        </div>
        <div className="w-full"></div>
        <div className="flex pt-5 gap-x-4 w-full justify-center">
          <Button
            type="submit"
            className="py-2.5 px-24    min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-cream-base text-black hover:border-version2-300 "
          >
            Edit
          </Button>
          <Button
            type="button"
            className="py-2.5 px-24 min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-white text-black  hover:border-version2-300 border-2 border-cream-base"
            onClick={() => setIsModalEditOpen(false)}
          >
            Kembali
          </Button>
        </div>
      </div>
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
    </form>
  );
};
