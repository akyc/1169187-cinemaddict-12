export const createFilmCard = (film) => {
  const {title, rating, release, duration, gener, poster, description, comments, isFavorite, isWatched, inWatchList} = film;
  const year = release.toLocaleString(`en-US`, {year: `numeric`});
  const cardDescription = description.length > 140 ? description.substring(0, 139) + `…` : description;
  const cardGener = gener[0];
  const commentsQuantity = comments.length;
  const isFavoriteClassName = isFavorite ? `film-card__controls-item--active` : ``;
  const isWatchedClassName = isWatched ? `film-card__controls-item--active` : ``;
  const inWatchListClassName = inWatchList ? `film-card__controls-item--active` : ``;
  return (`
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${cardGener}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${cardDescription}</p>
      <a class="film-card__comments">${commentsQuantity} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${inWatchListClassName}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatchedClassName}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavoriteClassName}">Mark as favorite</button>
      </form>
    </article>
  `);
};
