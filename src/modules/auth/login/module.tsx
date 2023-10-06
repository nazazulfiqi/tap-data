"use client"

import { validationSchemaLogin } from "../../../config/validation/authentications/login/login";
import { Button } from "../../../components/button/button"
import Image from "next/image"
import { signIn, useSession } from 'next-auth/react';
import { FC, useState } from "react"
import { redirect, useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../../components/text";
import { ErrorBoundary } from "react-error-boundary";
import Swal from "sweetalert2";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/[...nextauth]/option";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from "flowbite-react";


type ValidationSchema = z.infer<typeof validationSchemaLogin>;

export const LoginModule : FC =  () => {

  const {data: session} = useSession();
  console.log(session);
  

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState<string | undefined | null>(undefined);

 
    

    // const session = await getServerSession(authOptions);
    // console.log(session);

  
    
    // if (session) {
    //     redirect('/dashboard');
    // }


    const {
        control,
        formState: { isValid, errors },
        handleSubmit,
      } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchemaLogin),
        mode: 'all',
        defaultValues: {
          email: '',
          password: '',
          remember: false,
        },
      });

      const onSubmit = handleSubmit(async (data, e) => {
        setLoading(true);
        try {
          const response = await
          
          signIn('login', {
            email: data.email,
            password: data.password,
            redirect: false,
          });
            // console.log(response);
            
          if (response?.url === null) {
            toast.error("Try Again!", {
              autoClose: 2000,
            });
            router.push('/');
            setError(response?.error);
          }else{
            toast.success("Login Success!", {
              autoClose: 2000,
            });
            router.push('./dashboard');
          }
        //   if (response?.ok) {
        //     router.push('./dashboard');
        //   } else {
        //     console.log(response?.error);
    
        //     setError(response?.error);
        //   }
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      });



    return (
        <ErrorBoundary fallback={<>{getError}</>}>
        <div className="wrapper flex justify-center relative mt-0 min-h-[100vh] items-center">
      <div className="box flex w-[850px] h-full bg-[#F1EFE4] rounded-lg shadow-md shadow-slate-500">
        <div className="box-left w-full md:w-1/2 h-screen md:h-full flex flex-col my-auto justify-center px-8">
          <h2 className="font-bold text-3xl mb-1">Welcome Back!</h2>
          <p className="text-sm mb-4">
            Enter your username and password to login
          </p>
          <form action="" onSubmit={onSubmit}>
          <TextField
              type="email"
              variant="lg"
              control={control}
              name={'email'}
              placeholder="Masukkan Email"
              label="Email"
              status={errors.email ? 'error' : 'none'}
              message={errors.email?.message}
              required
            />
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={'password'}
              placeholder="Masukkan Kata Sandi"
              label="Kata Sandi"
              status={errors.password ? 'error' : 'none'}
              message={errors.password?.message}
              required
            />
            <Button
              className="bg-[#9F9F9F] rounded-md w-1/3 py-2 font-bold border-black border-2 mx-auto mt-6"
              type="submit"
              disabled={!isValid}
              loading={loading ? 'Sedang Masuk..' : ''}
            >
              DONE
            </Button>
          </form>
          <ToastContainer />
        </div>
        <div className="box-right text-center relative w-1/2 h-full lg:block hidden">
          <Image
            src={"/images/login/hero-login.png"}
            width={713}
            height={715}
            alt="hero-login"
            priority={true}
          />
        </div>
      </div>
    </div>
    </ErrorBoundary>
    )
}