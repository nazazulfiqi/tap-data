import React, { FC } from "react";
import Card from "./card/card";
import { useGetTotalData } from "@/src/hooks/dashboard/hook";
import { LoadingSpinner } from "@/src/components/loading/spinner";
import { useRecoilValue } from "recoil";
import { EmployeeDataState } from "@/src/recoil/atoms/dashboard";

const HeaderSection: FC = () => {
  // const {data,isLoading} = useGetTotalData()

  const employeeData = useRecoilValue(EmployeeDataState);
  const location = employeeData?.data?.filter?.map((item) => {
    return item?.location;
  });
  const mppTotal = employeeData?.data?.filter?.map((item) => {
    return item?.mpp_total;
  });
  const mpeTotal = employeeData?.data?.filter?.map((item) => {
    return item?.mpe_total;
  });
  const mpe_plus_plan_total = employeeData?.data?.filter?.map((item) => {
    return item?.mpe_plus_plan_total;
  });

  const sumMpp: number = mppTotal?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const sumMpe: number = mpeTotal?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const sumMpePlusPlan: number = mpe_plus_plan_total?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

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
          <Card amount={sumMpp} title="Total MPP" />
          <Card amount={sumMpe} title="Total MPE" />
          <Card amount={sumMpePlusPlan} title="Total MPE + Plan" />
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
