/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import styles from './Graph.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph({ selectedPatient }) {
  const options = {
    // pointBackgroundColor: "#E66FD2",
    pointBorderWidth: 2,
    pointBorderColor: "#FFFFFF",
    tension: 0.4,
    pointRadius: 5,
    scales: {
      x: {
        grid: {
          display: false, // Hides the vertical grid lines
        },
        ticks: {
          display: true, // Hides the x-axis labels
        },
      },
      y: {
        grid: {
          display: true, // Hides the vertical grid lines
        },
        ticks: {
          display: true, // Hides the x-axis labels
        },
      },
    },

    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      labels: {
        display: true, // Hides the legend
      },
    },
  };

  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 23",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        // label: '',
        data: [
          selectedPatient?.diagnosis_history?.[5].blood_pressure.diastolic
            .value,
          selectedPatient?.diagnosis_history?.[4].blood_pressure.diastolic
            .value,
          selectedPatient?.diagnosis_history?.[3].blood_pressure.diastolic
            .value,
          selectedPatient?.diagnosis_history?.[2].blood_pressure.diastolic
            .value,
          selectedPatient?.diagnosis_history?.[1].blood_pressure.diastolic
            .value,
          selectedPatient?.diagnosis_history?.[0].blood_pressure.diastolic
            .value,
        ],
        borderColor: "#7E6CAB",
        pointBackgroundColor: "#7E6CAB",
      },
      {
        label: null,
        data: [
          selectedPatient?.diagnosis_history?.[5].blood_pressure.systolic.value,
          selectedPatient?.diagnosis_history?.[4].blood_pressure.systolic.value,
          selectedPatient?.diagnosis_history?.[3].blood_pressure.systolic.value,
          selectedPatient?.diagnosis_history?.[2].blood_pressure.systolic.value,
          selectedPatient?.diagnosis_history?.[1].blood_pressure.systolic.value,
          selectedPatient?.diagnosis_history?.[0].blood_pressure.systolic.value,
        ],
        borderColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
      },
    ],
  };

  return (
    <div>
      <div className={styles.blood_pressure}>
        <h1>Blood Pressure</h1>
        <p>
          Last 6 months <img src="/src/assets/expand-more.png" alt="" />
        </p>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}

export default Graph;
