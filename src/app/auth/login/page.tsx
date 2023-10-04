import { authOptions } from "../../api/auth/[...nextauth]/option";
import { LoginModule } from "../../../modules/auth/login/module";
import { NextPage } from "next";
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const LoginPages: NextPage = () => {

    return <LoginModule/>
}

export default LoginPages;