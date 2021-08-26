import { useContext } from "react";

import styles from "./MeetupItem.module.css";
import Card from "../layout/Card";
import FavoriteContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoriteContext = useContext(FavoriteContext);
  const isFavorite = favoriteContext.isFavorite(props.id);

  function toggleFavoriteHandler() {
    if (isFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteHandler}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
