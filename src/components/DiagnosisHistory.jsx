/* eslint-disable react/prop-types */
import styles from "./DiagnosisHistory.module.css";
import { Chart } from "chart.js";

function DiagnosisHistory({ selectedPatient }) {
  console.log(selectedPatient.name);
  return (
    <div className={styles.diagnosis}>
      <h1>Diagnosis History</h1>
      <div className={styles.chart}></div>
      <div className="d-flex">
        <div className={`${styles.diagnosisBox} ${styles.respiratory}`}>
          <img src="/src/assets/respiratory-rate.png" alt="" />
          <h2>Respiratory Rate</h2>
          <h1>
            {selectedPatient.diagnosis_history?.[0].respiratory_rate.value} bpm
          </h1>
          <p>
            {selectedPatient.diagnosis_history?.[0].respiratory_rate.levels}
          </p>
        </div>
        <div className={`${styles.diagnosisBox} ${styles.temperature}`}>
          <img src="/src/assets/temperature.png" alt="" />
          <h2>Temperature</h2>
          <h1>{selectedPatient.diagnosis_history?.[0].temperature.value}°F</h1>
          <p>{selectedPatient.diagnosis_history?.[0].temperature.levels}</p>
        </div>
        <div className={`${styles.diagnosisBox} ${styles.heartRate}`}>
          <img src="/src/assets/HeartBPM.png" alt="" />
          <h2>Heart Rate</h2>
          <h1>{selectedPatient.diagnosis_history?.[0].heart_rate.value} bpm</h1>
          <p>{selectedPatient.diagnosis_history?.[0].heart_rate.levels}</p>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisHistory;
