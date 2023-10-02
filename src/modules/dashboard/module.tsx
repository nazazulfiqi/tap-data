"use client"
import BaseLayout from "../../components/layouts/base/base";
import { FC } from "react";
import HeaderSection from "./header/header";
import ChartSection from "./chart/chart";
import ContentSection from "./content/content";


export const DashboardModule : FC = () => {

    return(
        <BaseLayout>
        <HeaderSection/>
        <ChartSection/>
        <ContentSection/>
    </BaseLayout>
    )


}