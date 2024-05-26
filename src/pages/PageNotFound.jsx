import Navbar from "../components/Navbar";
import styles from "./OtherPagesStyle.module.css";

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <div className={styles.app}>
        <h1>Page not found</h1>
      </div>
    </div>
  );
}

export default PageNotFound;
