"use client";

import BaseLayout from "@/src/components/layouts/base/base";
import React from "react";
import { AdminUsersContent } from "./content/content";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AdminUsersModule = () => {
  const { data: session } = useSession();
  const roleId = session?.user?.role_id;

  if (roleId !== 1) {
    redirect("/dashboard");
  }
  return (
    <BaseLayout>
      <AdminUsersContent />
    </BaseLayout>
  );
};

export default AdminUsersModule;
