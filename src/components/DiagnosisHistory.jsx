/* eslint-disable react/prop-types */
import styles from "./DiagnosisHistory.module.css";
import Graph from "./Graph";

function DiagnosisHistory({ selectedPatient }) {
  console.log(
    selectedPatient.diagnosis_history[0].blood_pressure.systolic.levels
  );
  return (
    <div className={styles.diagnosis}>
      <h1>Diagnosis History</h1>
      <div className={styles.chart}>
        <Graph selectedPatient={selectedPatient} />
        <div className={styles.graphDetails}>
          <div className={styles.name}>
            <div className={`${styles.label} ${styles.systolic}`}></div>
            <h3>Systolic</h3>
          </div>
          <h1>
            {selectedPatient.diagnosis_history[0].blood_pressure.systolic.value}
          </h1>
          <h3 className={styles.average}>
            <img src="src\assets\arrow-up.png" alt="" />
            {
              selectedPatient.diagnosis_history[0].blood_pressure.systolic
                .levels
            }
          </h3>
          <hr />
          <div className={styles.name}>
            <div className={`${styles.label} ${styles.diastolic}`}></div>
            <h3>Diastolic</h3>
          </div>
          <h1>
            {
              selectedPatient.diagnosis_history[0].blood_pressure.diastolic
                .value
            }
          </h1>
          <h3 className={styles.average}>
            <img src="src\assets\arrow-down.png" alt="" />
            {selectedPatient.diagnosis_history[0].blood_pressure.diastolic
            .levels}
          </h3>
        </div>
      </div>
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
