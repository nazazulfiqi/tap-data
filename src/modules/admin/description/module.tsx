"use client";

import BaseLayout from "@/src/components/layouts/base/base";
import { DescriptionContent } from "../../description/content/content";
import { FC } from "react";
import { AdminDescriptionContent } from "./content/content";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const AdminDescriptionModule: FC = () => {
  // const { data: session } = useSession();
  // const roleId = session?.user?.role_id;

  // if (roleId !== 1) {
  //   redirect("/dashboard");
  // }
  return (
    <BaseLayout>
      <AdminDescriptionContent />
    </BaseLayout>
  );
};
