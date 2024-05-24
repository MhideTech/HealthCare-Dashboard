import Navbar from "../components/Navbar";
import styles from "./OtherPagesStyle.module.css";

function Transaction() {
  return (
    <div className={styles.app}>
      <Navbar />
      <h1>Transaction</h1>
    </div>
  );
}

export default Transaction;
