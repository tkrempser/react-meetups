import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: function (favoriteMeetup) {},
  removeFavorite: function (meetupId) {},
  isFavorite: function (meetupId) {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState(
    sessionStorage.getItem("favorites-meetups") !== null
      ? JSON.parse(sessionStorage.getItem("favorites-meetups"))
      : []
  );

  useEffect(
    function () {
      sessionStorage.setItem(
        "favorites-meetups",
        JSON.stringify(userFavorites)
      );
    },
    [userFavorites]
  );

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
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
