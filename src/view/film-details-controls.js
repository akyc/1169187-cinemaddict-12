export const createFilmDetailsControls = (film) => {
  const {isFavorite, isWatched, inWatchList} = film;
  const checkedIsFavorite = isFavorite ? `checked` : ``;
  const checkedIsWatched = isWatched ? `checked` : ``;
  const checkedInWatchList = inWatchList ? `checked` : ``;
  return (`
    <section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${checkedIsFavorite}>
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${checkedIsWatched}>
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${checkedInWatchList}>
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>
  `);
};
