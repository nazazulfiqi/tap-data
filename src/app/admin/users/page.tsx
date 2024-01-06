import { AdminDescriptionModule } from "@/src/modules/admin/description/module";
import AdminUsersModule from "@/src/modules/admin/users/module";
import { NextPage } from "next";

const AdminUsersPage: NextPage = async () => {
  return <AdminUsersModule />;
};

export default AdminUsersPage;
