"use client"

import { NextPage } from "next";
import { useParams } from "next/navigation";

const DataPage: NextPage = () => {
    const params = useParams()
    

    return(
        <h1>{params.slug}</h1>
    )

}

export default DataPage