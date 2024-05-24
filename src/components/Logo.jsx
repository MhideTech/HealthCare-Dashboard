import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/TestLogo.png" alt="HealthCare logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
