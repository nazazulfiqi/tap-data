import { DataModule } from "@/src/modules/data/module";

import { NextPage } from "next";

const DataPage: NextPage = async () => {
  return <DataModule />;
};

export default DataPage;
