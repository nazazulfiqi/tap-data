"use client"
import BaseLayout from "../../components/layouts/base/base";
import { FC } from "react";
import HeaderSection from "./header/header";
import ChartSection from "./chart/chart";
import { TableSection } from "./table/table";


export const DashboardModule : FC = () => {

    return(
        <BaseLayout>
        <HeaderSection/>
        <ChartSection/>
        <TableSection/>
    </BaseLayout>
    )


}