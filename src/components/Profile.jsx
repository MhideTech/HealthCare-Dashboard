/* eslint-disable react/prop-types */
import LabResults from "./LabResults";
import PatientProfile from "./PatientProfile";
import styles from "./Profile.module.css";

function Profile({ selectedPatient }) {
  return (
    <div className={styles.profile}>
      <PatientProfile selectedPatient={selectedPatient} />
      <LabResults selectedPatient={selectedPatient} />
    </div>
  );
}

export default Profile;
