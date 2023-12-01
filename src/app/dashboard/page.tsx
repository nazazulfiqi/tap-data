import { DashboardModule } from "@/src/modules/dashboard/module";
import { NextPage } from "next";

const DashboardPages: NextPage = async () => {
  return <DashboardModule />;
};

export default DashboardPages;
