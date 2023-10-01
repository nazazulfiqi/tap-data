"use client"

import { DashboardModule } from "@/src/modules/dashboard/module";
import { NextPage } from "next";
import { useSession } from 'next-auth/react';

const DashboardPages: NextPage = async () => {

    return <DashboardModule/>
}


export default DashboardPages;