"use client";

import BaseLayout from "@/src/components/layouts/base/base";
import React from "react";
import { UsersAdminContent } from "./content/content";

const AdminUsersModule = () => {
  return (
    <BaseLayout>
      <UsersAdminContent />
    </BaseLayout>
  );
};

export default AdminUsersModule;
