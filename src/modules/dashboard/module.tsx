"use client"
import BaseLayout from "../../components/layouts/base/base";
import { FC } from "react";
import HeaderSection from "./header/header";
import ChartSection from "./chart/chart";
import ContentSection from "./content/content";
import { TableSection } from "./table/table";


export const DashboardModule : FC = () => {

    return(
        <BaseLayout>
        <HeaderSection/>
        <ChartSection/>
        <ContentSection/>
        <TableSection/>
    </BaseLayout>
    )


}