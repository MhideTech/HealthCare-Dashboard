import Navbar from "../components/Navbar";
import styles from "./OtherPagesStyle.module.css";

function Message() {
  return (
    <div>
      <Navbar />
      <div className={styles.app}>
        <h1>Message</h1>
      </div>
    </div>
  );
}

export default Message;
