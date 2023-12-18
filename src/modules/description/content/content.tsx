"use client";

import Image from "next/image";
import { FC } from "react";
import Card from "../card/card";
import { useGetDescriptions } from "@/src/hooks/description/hook";
import { LoadingSpinner } from "@/src/components/loading/spinner";

export const DescriptionContent: FC = () => {
  const { data, isLoading } = useGetDescriptions();

  const descriptionsData = data?.data;

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
          {descriptionsData?.map((item) => (
            <Card
              key={item?.id}
              title={item?.title}
              description={item?.content}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
