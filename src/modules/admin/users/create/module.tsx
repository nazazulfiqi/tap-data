"use client";

import BaseLayout from "@/src/components/layouts/base/base";
import React from "react";
import { CreateUserAdminContent } from "./content/content";

const CreateUserAdminModule = () => {
  return (
    <BaseLayout>
      <CreateUserAdminContent />
    </BaseLayout>
  );
};

export default CreateUserAdminModule;
