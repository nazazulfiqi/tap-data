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
          <div className="flex gap-4">
            <MenuDropdown/>
            <MenuDropdown />
            <MenuDropdown />
          </div>
        </section>
        <section className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Data Periode Tahun 2023</p>
          <span>
            <span className="flex items-center gap-2">
              <IconChartUp />
              <p className="text-success-500 font-semibold text-sm">
                Rp 700.000 (8.02%)
              </p>
            </span>
            <p className="text-end text-xs text-gray-500 mt-1">
              1 Tahun Terakhir
            </p>
          </span>
        </section>
        <section className="mt-5 w-full overflow-auto">
          <ChartAll />
        </section>
      </div>
    </section>
  );
};

export default ChartSection;
