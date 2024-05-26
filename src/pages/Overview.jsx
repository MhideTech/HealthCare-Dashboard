import styles from "./OtherPagesStyle.module.css";
import Navbar from "../components/Navbar";

function Overview() {
  return (
    <div>
      <Navbar />
      <div className={styles.app}>
        <h1>Overview</h1>
      </div>
    </div>
  );
}

export default Overview;
