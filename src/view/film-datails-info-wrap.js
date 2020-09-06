export const createFilmDetailsInfoWrap = (film) => {
  const {poster, age, title, rating, director, writers, actors, release, duration, country, gener, description} = film;
  const generQuantityTitle = gener.length > 1 ? `Geners` : `Gener`;
  const geners = gener.map((item) => `<span class="film-details__genre">${item}</span>`).join(``);
  const releaseDay = release.toLocaleString(`en-US`, {day: `numeric`});
  const releaseMonthYear = release.toLocaleString(`en-US`, {month: `long`, year: `numeric`});
  const releaseDate = `${releaseDay} ${releaseMonthYear}`;
  return (`
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

        <p class="film-details__age">${age}</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${title}</h3>
            <p class="film-details__title-original">Original: ${title}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${rating}</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${writers}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${actors}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${releaseDate}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${duration}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${country}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">${generQuantityTitle}</td>
            <td class="film-details__cell">
              ${geners}
            </td>
          </tr>
        </table>

        <p class="film-details__film-description">
          ${description}
        </p>
      </div>
    </div>
  `);
};
