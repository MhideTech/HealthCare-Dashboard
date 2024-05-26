import Navbar from "../components/Navbar";
import styles from "./OtherPagesStyle.module.css";

function Schedule() {
  return (
    <div>
      <Navbar />
      <div className={styles.app}>
        <h1>Schedule</h1>
      </div>
    </div>
  );
}

export default Schedule;
