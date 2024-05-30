/* eslint-disable react/prop-types */
import DiagnosisHistory from "./DiagnosisHistory";
import DiagnosticList from "./DiagnosticList";
import styles from './DiagnosisSection.module.css'

function DiagnosisSection({ selectedPatient }) {
  return (
    <section className={styles.diagnosis}>
      <DiagnosisHistory selectedPatient={selectedPatient} />
      <DiagnosticList selectedPatient={selectedPatient} />
    </section>
  );
}

export default DiagnosisSection;
