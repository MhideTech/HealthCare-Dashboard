import styles from "./PatientsList.module.css";

function PatientsList() {
  return (
    <section className={styles.patientsListContainer}>
      <div className={styles.patientListHeader}>
        <h1>Patients</h1>
        <img src="/src/assets/search-icon.png" alt="" />
      </div>
      <ul>
        <li className={styles.patient}>
          <div className={styles.patientImg}>
            <img src="/src/assets/layer-2.png" alt="" />
            <div>
              <h3>Jessica Taylor</h3>
              <p>Female, 28</p>
            </div>
          </div>
          <img src="/src/assets/more-horizontal-icon.png" alt="" />
        </li>
      </ul>
    </section>
  );
}

export default PatientsList;
