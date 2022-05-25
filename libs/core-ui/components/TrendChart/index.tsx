/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, Title,
  Tooltip
} from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TrendChartProps {
  label?: string;
  data: number[];
  backgroundColor?: string;
  lineColor?: string;
}

// https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
function hexToRGB(hex: string, alpha: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

const DEFAULT_COLOR = '#faae32';
export function TrendChart({ label, data, backgroundColor = DEFAULT_COLOR, lineColor = DEFAULT_COLOR }: TrendChartProps) {
  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    }

  };

  const chartRef = useRef<any>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    const gradient = chart.ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, hexToRGB(backgroundColor, '0.5'));
    gradient.addColorStop(0.25, hexToRGB(backgroundColor, '0.35'));
    gradient.addColorStop(0.5, hexToRGB(backgroundColor, '0.25'));
    gradient.addColorStop(0.75, hexToRGB(backgroundColor, '0.15'));
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    const buildData = {
      labels: data,
      datasets: [
        {
          label: label,
          data: data,
          borderColor: lineColor,
          pointRadius: 0,
          borderWidth: 2,
          fill: true,
          backgroundColor: gradient,
        },
      ],
    };
    setChartData(buildData);
  }, []);

  return (
    <Line ref={chartRef} options={options} data={chartData} />
  )

}

export default TrendChart;
