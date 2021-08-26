import { Link } from "react-router-dom";

import styles from "./NavigationMenu.module.css";

function NavigationMenu() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/react-meetups/">All Meetups</Link>
          </li>
          <li>
            <Link to="/react-meetups/new/">New Meetup</Link>
          </li>
          <li>
            <Link to="/react-meetups/favorites/">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationMenu;
