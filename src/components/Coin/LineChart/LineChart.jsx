import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; 
import ConvertNumber from "../../../function/ConvertNumber";

function LineChart({ chartData, multiAxis, priceType }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: "linear",
        position: "left",
        ticks: {
          callback: function (value) {
            if (priceType === "prices") return "$" + value.toLocaleString();
            return "$" + ConvertNumber(value);
          },
        },
      },
      crypto2: multiAxis
        ? {
            type: "linear",
            position: "right",
            grid: {
              drawOnChartArea: false, // prevent overlapping grid lines
            },
            ticks: {
              callback: function (value) {
                if (priceType === "prices") return "$" + value.toLocaleString();
                return "$" + ConvertNumber(value);
              },
            },
          }
        : undefined,
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
