import DiagnosisSection from "../components/DiagnosisSection";
import Navbar from "../components/Navbar";
import PatientProfile from "../components/PatientProfile";
import PatientsList from "../components/PatientsList";
import styles from "./Patients.module.css";

function Patients() {
  return (
    <div className={styles.app}>
      <Navbar />
      <section className={styles.main}>
        <PatientsList />
        <DiagnosisSection />
        <PatientProfile />
      </section>
    </div>
  );
}

export default Patients;
