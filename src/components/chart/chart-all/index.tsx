import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useRecoilValue } from "recoil";
import { EmployeeDataState } from "../../../recoil/atoms/dashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  elements: {
    bar: {
      borderRadius: 4,
    },
  },
  scales: {
    y: {
      min: 0,
      ticks: {
        stepSize: 100,
        max: 1200,
        callback: function (value: number) {
          if (value < 50) {
            return value.toString();
          } else {
            return value;
          }
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
  },
};

// const getRandomData = () => {
//   const data = [];
//   for (let i = 0; i < labels.length; i++) {
//     data.push(Math.floor(Math.random() * 50000));
//   }
//   return data;
// };

const ChartAll: React.FC = () => {
  const employeeData = useRecoilValue(EmployeeDataState);
  const mppTotal = employeeData?.data?.filter[0]?.mpp_total;
  const mpeTotal = employeeData?.data?.filter[0]?.mpe_total;
  const mpePlusPlanTotal = employeeData?.data?.filter[0]?.mpe_plus_plan_total;
  // const mpevsmpp = employeeData?.data?.mpe_vs_mpp;
  // const fulfill = employeeData?.data?.fulfill;
  // const vacant = employeeData?.data?.vacant;
  // const closed = employeeData?.data?.closed;
  // const overMpp = employeeData?.data?.over_mpp;
  // const fptkOverMpp = employeeData?.data?.fptk_over_mpp;

  console.log(employeeData);

  const labels = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "MPP",
        data: [mppTotal],
        backgroundColor: "#D97706",
      },
      {
        label: "MPE",
        data: [mpeTotal],
        backgroundColor: "#6756AE",
      },
      {
        label: "MPP + Plan",
        data: [mpePlusPlanTotal],
        backgroundColor: "#13837B",
      },
      // employeeData?.data?.
    ],
  };

  return <Bar data={data} options={options as any} width={1500} height={400} />;
};

export default ChartAll;
