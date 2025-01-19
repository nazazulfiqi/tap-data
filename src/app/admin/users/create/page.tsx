import CreateUserAdminModule from "@/src/modules/admin/users/create/module";
import { NextPage } from "next";

const CreateUserAdminPage: NextPage = async () => {
  return <CreateUserAdminModule />;
};

export default CreateUserAdminPage;
