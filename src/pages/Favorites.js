import { useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorites-context";

function Favorites() {
  const favoriteContext = useContext(FavoriteContext);

  return (
    <section>
      <h1>Favorites</h1>
      {favoriteContext.favorites.length ? (
        <MeetupList meetups={favoriteContext.favorites} />
      ) : (
        <p>No favorites available</p>
      )}
    </section>
  );
}

export default Favorites;
