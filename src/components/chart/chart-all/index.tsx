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
      max: 50000,
      min: 0,
      ticks: {
        stepSize: 10000,
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
  },
};

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

const getRandomData = () => {
  const data = [];
  for (let i = 0; i < labels.length; i++) {
    data.push(Math.floor(Math.random() * 50000));
  }
  return data;
};

const data = {
  labels,
  datasets: [
    {
      label: "MPP",
      data: getRandomData(),
      backgroundColor: "#D97706",
    },
    {
      label: "MPE",
      data: getRandomData(),
      backgroundColor: "#6756AE",
    },
    {
      label: "MPP + Plan",
      data: getRandomData(),
      backgroundColor: "#13837B",
    },
    {
      label: "MPX",
      data: getRandomData(),
      backgroundColor: "#0B1C38",
    },
  ],
};

const ChartAll: React.FC = () => {
  return <Bar data={data} options={options as any} width={1500} height={400} />;
};

export default ChartAll;
