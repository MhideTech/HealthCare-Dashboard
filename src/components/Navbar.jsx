import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/patients">Patients</NavLink>
        </li>
        <li>
          <NavLink to="/schedule">Schedule</NavLink>
        </li>
        <li>
          <NavLink to="/message">Message</NavLink>
        </li>
        <li>
          <NavLink to="/transactions">Transactions</NavLink>
        </li>
      </ul>
            
      <div className={styles.navProfile}>
        <img src="" alt="" />
        <h3>Dr. Jose Simmons</h3>
        <p>General Practitioner</p>
        <div className={styles.icon}></div>
      </div>
    </nav>
  );
}

export default Navbar;
