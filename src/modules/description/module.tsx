"use client";
import BaseLayout from "../../components/layouts/base/base";
import { FC } from "react";
import { DescriptionContent } from "./content/content";

export const DescriptionModule: FC = () => {
  return (
    <BaseLayout>
      <DescriptionContent />
    </BaseLayout>
  );
};
