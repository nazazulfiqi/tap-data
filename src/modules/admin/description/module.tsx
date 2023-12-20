"use client";

import BaseLayout from "@/src/components/layouts/base/base";
import { DescriptionContent } from "../../description/content/content";
import { FC } from "react";
import { AdminDescriptionContent } from "./content/content";

export const AdminDescriptionModule: FC = () => {
  return (
    <BaseLayout>
      <AdminDescriptionContent />
    </BaseLayout>
  );
};
