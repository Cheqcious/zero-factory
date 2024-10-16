import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';  // This automatically registers required chart components

const RealTimeBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['风力电能', '光伏电能', '电池储能', '火力电能'],
    datasets: [
      {
        label: '电能数据',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  // 模拟实时数据更新
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = Array.from({ length: 4 }, () => Math.floor(Math.random() * 25) + 1);
      setChartData((prevState) => ({
        ...prevState,
        datasets: [
          {
            ...prevState.datasets[0],
            data: newData,
          },
        ],
      }));
    }, 2000);  // 每2秒更新一次数据

    return () => clearInterval(interval); // 清除定时器
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default RealTimeBarChart;
