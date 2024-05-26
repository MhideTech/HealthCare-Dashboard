import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/">
            <img src="/src/assets/home-icon.png" alt="" />
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/patients">
            <img src="/src/assets/group-icon.png" alt="" />
            Patients
          </NavLink>
        </li>
        <li>
          <NavLink to="/schedule">
            <img src="/src/assets/calendar-icon.png" alt="" />
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/message">
            <img src="/src/assets/chat-icon.png" alt="" />
            Message
          </NavLink>
        </li>
        <li>
          <NavLink to="/transaction">
            <img src="/src/assets/credit-card-icon.png" alt="" />
            Transactions
          </NavLink>
        </li>
      </ul>

      <div className={styles.navProfile}>
        <img src="/src/assets/senior-woman-doctor.png" alt="" />
        <div>
          <h3>Dr. Jose Simmons</h3>
          <p>General Practitioner</p>
        </div>
        <div className={styles.icon}>
          <img src="/src/assets/settings-icon.png" alt="" />
          <img src="/src/assets/more-vert-icon.png" alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
