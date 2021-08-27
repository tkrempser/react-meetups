import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./NavigationMenu.module.css";
import FavoritesContext from "../../store/favorites-context";

function NavigationMenu() {
  const favoriteContext = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new/">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites/">
              Favorites
              <span className={styles.badge}>
                {favoriteContext.favorites.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationMenu;
