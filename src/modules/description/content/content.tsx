"use client";

import Image from "next/image";
import { FC } from "react";
import Card from "../card/card";
import { descriptionData } from "../constant";

export const DescriptionContent: FC = () => {
  return (
    <main>
      <section className="w-full flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-center my-4">DESCRIPTION</h1>
          <Image
            src={"/images/description/description-banner.png"}
            alt="description"
            width={1000}
            height={1000}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {descriptionData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
