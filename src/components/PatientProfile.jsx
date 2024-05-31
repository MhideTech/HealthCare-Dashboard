/* eslint-disable react/prop-types */
import styles from "./PatientProfile.module.css";

function PatientProfile({ selectedPatient }) {
  function formatDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = monthNames[month];
    const formattedDate = `${monthName} ${day}, ${year}`;

    return formattedDate;
  }

  return (
    <div className={styles.profile}>
      <img
        src={selectedPatient.profile_picture}
        alt=""
        className={styles.profileImg}
      />
      <h1>{selectedPatient.name}</h1>
      <div className={styles.personalInfo}>
        <img src="/src/assets/birth-icon.png" alt="" />
        <div className="">
          <p>Date Of Birth</p>
          <h3>{formatDate(selectedPatient.date_of_birth)}</h3>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <img src="/src/assets/female-icon.png" alt="" />
        <div className="">
          <p>Gender</p>
          <h3>{selectedPatient.gender}</h3>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <img src="/src/assets/phone-icon.png" alt="" />
        <div className="">
          <p>Contact Info</p>
          <h3>{selectedPatient.phone_number}</h3>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <img src="/src/assets/phone-icon.png" alt="" />
        <div className="">
          <p>Emergency Contact</p>
          <h3>{selectedPatient.emergency_contact}</h3>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <img src="/src/assets/Insurance-icon.png" alt="" />
        <div className="">
          <p>Insurance Provider</p>
          <h3>{selectedPatient.insurance_type}</h3>
        </div>
      </div>
      <button>Show All Information</button>
    </div>
  );
}

export default PatientProfile;
