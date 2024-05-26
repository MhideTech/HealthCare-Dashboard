import styles from "./PatientProfile.module.css";

function PatientProfile() {
  return (
    <div className={styles.profile}>
      <img
        src="/src/assets/patient-profile-img.png"
        alt=""
        className={styles.profileImg}
      />
      <h1>Jessica Taylor</h1>
      <div className={styles.personalInfo}>
        <img src="/src/assets/birth-icon.png" alt="" />
        <div className="">
          <p>Date Of Birth</p>
          <h3>August 23, 1996</h3>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <img src="/src/assets/female-icon.png" alt="" />
        <div className="">
          <p>Gender</p>
          <h3>Female</h3>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <img src="/src/assets/phone-icon.png" alt="" />
        <div className="">
          <p>Contact Info</p>
          <h3>(415) 555-1234</h3>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <img src="/src/assets/phone-icon.png" alt="" />
        <div className="">
          <p>Emergency Contact</p>
          <h3>(415) 555-5678</h3>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <img src="/src/assets/phone-icon.png" alt="" />
        <div className="">
          <p>Insurance Provider</p>
          <h3>Sunrise Health Assurance</h3>
        </div>
      </div>
      <button>Show All Information</button>
    </div>
  );
}

export default PatientProfile;
