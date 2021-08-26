import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesTotal: 0,
  addFavorite: function (favoriteMeetup) {},
  removeFavorite: function (meetupId) {},
  isFavorite: function (meetupId) {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites(function (previousValue) {
      return previousValue.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(function (previousValue) {
      return previousValue.filter(function (meetupItem) {
        return meetupItem.id !== meetupId;
      });
    });
  }

  function isFavoriteHandler(meetupId) {
    return userFavorites.some(function (meetupItem) {
      return meetupItem.id === meetupId;
    });
  }

  const context = {
    favorites: userFavorites,
    favoritesTotal: 0,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>;
}

export default FavoritesContext;
