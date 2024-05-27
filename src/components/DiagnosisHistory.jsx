import styles from './DiagnosisHistory.module.css'

function DiagnosisHistory() {
    return (
      <div className={styles.diagnosis}>
        <h1>Diagnosis History</h1>
        <div className={styles.chart}></div>
        <div className="d-flex">
          <div className={`${styles.diagnosisBox} ${styles.respiratory}`}>
            <img src="/src/assets/respiratory-rate.png" alt="" />
            <h2>Respiratory Rate</h2>
            <h1>20 bpm</h1>
            <p>Normal</p>
          </div>
          <div className={`${styles.diagnosisBox} ${styles.temperature}`}>
            <img src="/src/assets/temperature.png" alt="" />
            <h2>Temperature</h2>
            <h1>98.6°F</h1>
            <p>Normal</p>
          </div>
          <div className={`${styles.diagnosisBox} ${styles.heartRate}`}>
            <img src="/src/assets/HeartBPM.png" alt="" />
            <h2>Heart Rate</h2>
            <h1>78 bpm</h1>
            <p>Normal</p>
          </div>
        </div>
      </div>
    );
}

export default DiagnosisHistory
