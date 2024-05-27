import { useEffect, useState } from "react";
import DiagnosisSection from "../components/DiagnosisSection";
import Navbar from "../components/Navbar";
import PatientsList from "../components/PatientsList";
import Profile from "../components/Profile";
import styles from "./Patients.module.css";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(function () {
    let username = "coalition";
    let password = "skills-test";
    let auth = btoa(`${username}:${password}`);

    async function getPatientInfo() {
      try {
        const res = await fetch(
          `https://fedskillstest.coalitiontechnologies.workers.dev`,
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setPatients(data);
      } catch (e) {
        console.log(e);
      }
    }

    getPatientInfo();
  }, []);

  return (
    <div className={styles.app}>
      <Navbar />
      <section className={styles.main}>
        <PatientsList patients={patients} />
        <DiagnosisSection />
        <Profile />
      </section>
    </div>
  );
}

export default Patients;
