import React, { FC } from "react";
import Card from "./card/card";
import { useGetTotalData } from "@/src/hooks/dashboard/hook";
import { LoadingSpinner } from "@/src/components/loading/spinner";
import { useRecoilValue } from "recoil";
import { EmployeeDataState } from "@/src/recoil/atoms/dashboard";

const HeaderSection: FC = () => {
  // const {data,isLoading} = useGetTotalData()

  const employeeData = useRecoilValue(EmployeeDataState);
  const mppTotal = employeeData?.data?.filter[0]?.mpp_total;
  const mpeTotal = employeeData?.data?.filter[0]?.mpe_total;
  const mpePlusPlanTotal = employeeData?.data?.filter[0]?.mpe_plus_plan_total;
  const mpevsmpp = employeeData?.data?.mpe_vs_mpp;
  const fulfill = employeeData?.data?.fulfill;
  const vacant = employeeData?.data?.vacant;
  const closed = employeeData?.data?.closed;
  const overMpp = employeeData?.data?.over_mpp;
  const fptkOverMpp = employeeData?.data?.fptk_over_mpp;

  console.log(employeeData);

  // if (isLoading) {
  //   return <LoadingSpinner/>
  // }

  // console.log(data);

  return (
    <section className="w-full px-8">
      <h1 className="text-3xl font-bold text-center my-6">
        DASHBOARD MPP VS MPE TAP GROUP TAHUN 2023
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-4 gap-x-4">
          <Card amount={mppTotal} title="Total MPP" />
          <Card amount={mpeTotal} title="Total MPE" />
          <Card amount={mpePlusPlanTotal} title="Total MPE + Plan" />
          <Card amount={mpevsmpp} title="MPE vs MPP" />
        </div>
        <div className="grid grid-cols-5 gap-x-4">
          <Card amount={fulfill} title="FULFILL" />
          <Card amount={vacant} title="VACANT" />
          <Card amount={closed} title="CLOSED" />
          <Card amount={overMpp} title="OVER MPP" />
          {/* <Card amount={fptkOverMpp} title="FPTK OVER MPP" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
