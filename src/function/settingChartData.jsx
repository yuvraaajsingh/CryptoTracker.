import ConvertDate from "./ConvertDate";
const settingChartData = (priceData, setChartData) => {
  setChartData({
    labels: priceData.map((data) => ConvertDate(data[0])),
    datasets: [
      {
        data: priceData.map((data) => data[1]),
        borderColor: "#3a80e9",
        backgroundColor: "rgba(58,128,233,0.1)",
        borderColor: "#3a80e9",
        borderWidth: 1,
        fill: true,
        tension: 0.15,
        pointRadius: 0,
      },
    ],
  });
};

export default settingChartData;
