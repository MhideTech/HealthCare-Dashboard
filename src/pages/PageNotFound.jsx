import Navbar from "../components/Navbar";
import styles from "./OtherPagesStyle.module.css";

function PageNotFound() {
  return (
    <div className={styles.app}>
      <Navbar />
      <h1>Page not found</h1>
    </div>
  );
}

export default PageNotFound;
