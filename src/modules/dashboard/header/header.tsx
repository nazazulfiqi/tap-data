import React, { FC } from "react";
import Card from "./card/card";
import { useGetTotalData } from "@/src/hooks/dashboard/hook";
import { LoadingSpinner } from "@/src/components/loading/spinner";


const HeaderSection: FC = () => {

  const {data,isLoading} = useGetTotalData()

  if (isLoading) {
    return <LoadingSpinner/>
  }

  console.log(data);
  
  

  return (
    <section className="w-full px-8">
      <h1 className="text-3xl font-bold text-center my-6">
        DASHBOARD MPP VS MPE TAP GROUP TAHUN 2023
      </h1>
      <div className="flex justify-between gap-7">
        {data?.data?.data?.map((card, i) => (
          <Card
            amount={card.total_data as number}
            title={card.title as string}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default HeaderSection;
