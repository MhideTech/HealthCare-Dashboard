/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
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
        label: "Steps By Orlah",
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
        label: "Steps By Mide",
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

  return <Line options={options} data={data} />;
}

export default Graph;
