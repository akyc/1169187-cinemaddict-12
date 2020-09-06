const filmToNavigation = {
  All: (films) => films.length,
  Watchlist: (films) => films.filter((film) => film.inWatchList).length,
  History: (films) => films.filter((film) => film.isWatched).length,
  Favorites: (films) => films.filter((film) => film.isFavorite).length,
};

export const generateNavigation = (films) => {
  return Object.entries(filmToNavigation).map(([navigationName, countFilms]) => {
    return {
      name: navigationName,
      count: countFilms(films),
    };
  });
};
