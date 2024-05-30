/* eslint-disable react/prop-types */
import styles from "./LabResults.module.css";

function LabResults({ selectedPatient }) {
  return (
    <div className={styles.labResults}>
      <h1>Lab Results</h1>
      <div className={styles.resultContainer}>
        {selectedPatient?.lab_results?.map((result) => {
          <div className={styles.result}>
            <p>{result}</p>
            <img src="/src/assets/download-icon.png" alt="" />
          </div>;
        })}
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
        <div className={styles.result}>
          <p>Blood Tests</p>
          <img src="/src/assets/download-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LabResults;
