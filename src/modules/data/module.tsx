"use client";
import BaseLayout from "../../components/layouts/base/base";
import { FC } from "react";
import { DataContent } from "./content/content";

export const DataModule: FC = () => {
  return (
    <BaseLayout>
      <DataContent />
    </BaseLayout>
  );
};
