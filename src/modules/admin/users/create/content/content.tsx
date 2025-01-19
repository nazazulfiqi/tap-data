import { Button } from "@/src/components/button/button";
import { TextField } from "@/src/components/text";
import { usePostCreateUser } from "@/src/hooks/authentications/hook";
import { TCreateUserPayload } from "@/src/types/admin/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export const CreateUserAdminContent: FC = () => {
  const queryClient = useQueryClient();
  const { mutate } = usePostCreateUser();

  const validationCreateUser = z.object({
    full_name: z.string().min(1, { message: "Required" }),
    email: z.string().min(1, { message: "Required" }),
    username: z.string().min(1, { message: "Required" }),
    password: z.string().min(1, { message: "Required" }),
  });

  type TValidationSchema = z.infer<typeof validationCreateUser>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TValidationSchema>({
    resolver: zodResolver(validationCreateUser),
    mode: "all",
  });

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("confirm_password", data.password);

    mutate(formData as unknown as TCreateUserPayload, {
      onSuccess: () => {
        toast.success("Create Users Success!", {
          autoClose: 2000,
        });
      },
      onError: (error) => {
        console.error(error);

        toast.error("Create Users Failed!", {
          autoClose: 2000,
        });
      },
    });
  });

  useEffect(() => {
    reset();
  }, []);

  return (
    <main>
      <section className="w-full flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-center my-4">CREATE USER</h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[500px] border rounded-md p-4 bg-cream-base">
            <form action="" onSubmit={onSubmit}>
              <div className="w-full pb-3 flex flex-col gap-y-1">
                <TextField
                  label="Full Name"
                  name="full_name"
                  placeholder={"Full Name"}
                  required
                  variant="md"
                  control={control}
                  status={errors.full_name ? "error" : "none"}
                  message={errors.full_name?.message}
                />
                <TextField
                  label="Email"
                  name="email"
                  placeholder={"Email"}
                  required
                  variant="md"
                  control={control}
                  status={errors.email ? "error" : "none"}
                  message={errors.email?.message}
                />
                <TextField
                  label="Username"
                  name="username"
                  placeholder={"Username"}
                  required
                  variant="md"
                  control={control}
                  status={errors.username ? "error" : "none"}
                  message={errors.username?.message}
                />
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  placeholder={"Password"}
                  required
                  variant="md"
                  control={control}
                  status={errors.password ? "error" : "none"}
                  message={errors.password?.message}
                />
              </div>

              <Button
                type="submit"
                className="py-2.5 px-24  w-full text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-cream-base text-black hover:border-version2-30 border-2 border-black "
              >
                Create
              </Button>
            </form>
          </div>
        </div>
        <div className=" mx-auto">
          <Link
            href={"/admin/users"}
            className="px-4 py-1 border-2 text-center border-black rounded-md font-semibold bg-black text-white"
          >
            Back
          </Link>
        </div>
        <ToastContainer
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
      </section>
    </main>
  );
};
