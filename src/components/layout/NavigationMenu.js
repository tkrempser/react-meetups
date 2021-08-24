import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new/">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites/">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationMenu;
