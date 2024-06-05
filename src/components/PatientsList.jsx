/* eslint-disable react/prop-types */
import styles from "./PatientsList.module.css";

function PatientsList({ patients, onSelectPatient }) {
  return (
    <section className={styles.patientsListContainer}>
      <div className={styles.patientListHeader}>
        <h1>Patients</h1>
        <img src="/src/assets/search-icon.png" alt="" />
      </div>
      <ul>
        {patients.map((patient) => (
          <li
            className={styles.patient}
            onClick={() => onSelectPatient(patient.name)}
            key={patient.name}
          >
            <div className={styles.patientImg}>
              <img src={patient.profile_picture} alt="" />
              <div>
                <h3>{patient.name}</h3>
                <p>
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <img src="/src/assets/more-horizontal-icon.png" alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PatientsList;
