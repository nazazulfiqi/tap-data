import React, { FC } from "react";
import cardItems from "./constant";
import Card from "./card/card";
import { useGetMpp } from "@/src/hooks/dashboard/hook";


const HeaderSection: FC = () => {

  const {data} = useGetMpp()

  console.log("data", data);
  

  return (
    <section className="w-full px-8">
      <h1 className="text-3xl font-bold text-center my-6">
        DASHBOARD MPP VS MPE TAP GROUP TAHUN 2023
      </h1>
      <div className="flex justify-between gap-7">
        {cardItems?.map((card, i) => (
          <Card
            amount={card.amount as number}
            title={card.title as string}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default HeaderSection;
