import DiagnosisHistory from "./DiagnosisHistory";
import DiagnosticList from "./DiagnosticList";
import styles from './DiagnosisSection.module.css'

function DiagnosisSection() {
  return (
    <section className={styles.diagnosis}>
      <DiagnosisHistory />
      <DiagnosticList />
    </section>
  );
}

export default DiagnosisSection;
