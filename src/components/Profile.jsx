import LabResults from "./LabResults";
import PatientProfile from "./PatientProfile";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <PatientProfile />
      <LabResults />
    </div>
  );
}

export default Profile;
