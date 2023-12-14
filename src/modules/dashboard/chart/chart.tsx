import React, { FC } from "react";
import MenuDropdown from "./dropdown/dropdown";
import IconChartUp from "../../../components/icons/ic-chartup";
import ChartAll from "../../../components/chart/chart-all/index";

const ChartSection: FC = () => {
  return (
    <section className="w-full px-8 my-6">
      <div className="border-2 p-2 h-fit ">
        <section className="flex justify-between items-center">
          <h1 className="text-lg font-bold">
            CHART MPP VS MPE TAP GROUP TAHUN 2023
          </h1>
        </section>
        <section className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Data Periode Tahun 2023</p>
        </section>
        <section className="mt-5 w-full overflow-auto">
          <ChartAll />
        </section>
      </div>
    </section>
  );
};

export default ChartSection;
