import Navbar from "../components/Navbar";
import styles from "./OtherPagesStyle.module.css";

function Transaction() {
  return (
    <div>
      <Navbar />
      <div className={styles.app}>
        <h1>Transaction</h1>
      </div>
    </div>
  );
}

export default Transaction;
