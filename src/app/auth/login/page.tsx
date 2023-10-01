import { authOptions } from "../../api/auth/[...nextauth]/option";
import { LoginModule } from "../../../modules/auth/login/module";
import { NextPage } from "next";
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";

const LoginPages: NextPage = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    return <LoginModule/>
}

export default LoginPages;