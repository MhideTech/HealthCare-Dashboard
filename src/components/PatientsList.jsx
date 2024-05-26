import styles from "./PatientsList.module.css";

function PatientsList() {
  return (
    <section className={styles.patientsListContainer}>
      <div className={styles.patientListHeader}>
        <h1>Header</h1>
        <img src="/src/assets/search-icon.png" alt="" />
      </div>
    </section>
  );
}

export default PatientsList;
