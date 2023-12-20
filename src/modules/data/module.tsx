"use client";
import BaseLayout from "../../components/layouts/base/base";
import { FC } from "react";
import { DataContent } from "./content/content";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export const DataModule: FC = () => {
  const { data: session } = useSession();
  const roleId = session?.user?.role_id;

  if (roleId !== 1) {
    redirect("/dashboard");
  }
  return (
    <BaseLayout>
      <DataContent />
    </BaseLayout>
  );
};
