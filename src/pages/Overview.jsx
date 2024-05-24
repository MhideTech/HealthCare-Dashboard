import styles from "./OtherPagesStyle.module.css";
import Navbar from '../components/Navbar'

function Overview() {
  return (
    <div className={styles.app}>
      <Navbar />
      <h1>Overview</h1>
    </div>
  );
}

export default Overview;
