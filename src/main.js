import {createHeaderProfile} from "./view/header-profile.js";
import {createMainNavigation} from "./view/main-navigation.js";
import {createSort} from "./view/sort.js";
import {createContent} from "./view/content.js";
import {createFilmsList} from "./view/films-list.js";
import {createFilmCard} from "./view/film-card.js";
import {createShowMoreButton} from "./view/show-more-button.js";
import {createTopRatedFilmList} from "./view/top-rated-film-list.js";
import {createMostCommentedFilmList} from "./view/most-commented-film-list.js";
import {createFooterStatistics} from "./view/footer-statistics.js";
import {createLoadingFilmsList} from "./view/loading-films-list.js";
import {createNoDataFilmsList} from "./view/no-data-films-list.js";
import {createStatistic} from "./view/statistic.js";
import {createStatisticRank} from "./view/statistic-rank.js";
import {createStatisticFilters} from "./view/statistic-filters.js";
import {createStatisticTextList} from "./view/statistic-text-list.js";
import {createStatisticChartWrap} from "./view/statistic-chart-wrap.js";
import {createNoUserLevel} from "./view/no-user-level.js";
import {createFilmDetailsContainer} from "./view/film-details-container.js";
import {createFilmDetailsInfoWrap} from "./view/film-datails-info-wrap.js";
import {createFilmDetailsControls} from "./view/film-details-controls.js";
import {createFilmDetailsCommentsWrap} from "./view/film-details-comments-wrap.js";
import {createFilmDetailsComments} from "./view/film-details-comments.js"
import {generateFilm} from "./mock/film.js";
import {generateNavigation} from "./mock/navigation.js";

const FILMS_LIST_COUNT = 20;
const FILMS_LIST_COUNT_PER_STEP = 5;

const films = new Array(FILMS_LIST_COUNT).fill().map(generateFilm);
const navigation = generateNavigation(films);

const TOP_RATED_FILMS_COUNT = 2;

const topRatedFilms = new Array(TOP_RATED_FILMS_COUNT).fill().map(generateFilm);

const MOST_COMMENTED_FILMS_COUNT = 2;

const mostCommentedFilms = new Array(TOP_RATED_FILMS_COUNT).fill().map(generateFilm);

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeader, createHeaderProfile(), `beforeend`);

render(siteMain, createMainNavigation(navigation), `beforeend`);

render(siteMain, createSort(), `beforeend`);

render(siteMain, createContent(), `beforeend`);

const siteContent = siteMain.querySelector(`.films`);

render(siteContent, createFilmsList(), `beforeend`);

const filmsList = siteContent.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, FILMS_LIST_COUNT_PER_STEP); i++) {
  render(filmsListContainer, createFilmCard(films[i]), `beforeend`);
}
if (films.length > FILMS_LIST_COUNT_PER_STEP) {
  let renderedFilmsCount = FILMS_LIST_COUNT_PER_STEP;

  render(filmsList, createShowMoreButton(), `beforeend`);

  const showMoreButton = filmsList.querySelector(`.films-list__show-more`);
  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmsCount, renderedFilmsCount + FILMS_LIST_COUNT_PER_STEP)
      .forEach((film) => render(filmsListContainer, createFilmCard(film), `beforeend`));

    renderedFilmsCount += FILMS_LIST_COUNT_PER_STEP;

    if (renderedFilmsCount >= films.length) {
      showMoreButton.remove();
    }
  });
}

render(siteContent, createTopRatedFilmList(), `beforeend`);

render(siteContent, createMostCommentedFilmList(), `beforeend`);

const filmsListExtra = siteContent.querySelectorAll(`.films-list--extra`);
const filmsListTopRated = filmsListExtra[0].querySelector(`.films-list__container`);

for (let i = 0; i < TOP_RATED_FILMS_COUNT; i++) {
  render(filmsListTopRated, createFilmCard(topRatedFilms[i]), `beforeend`);
}

const filmsListMostCommented = filmsListExtra[1].querySelector(`.films-list__container`);

for (let i = 0; i < MOST_COMMENTED_FILMS_COUNT; i++) {
  render(filmsListMostCommented, createFilmCard(mostCommentedFilms[i]), `beforeend`);
}

const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

render(footerStatistics, createFooterStatistics(films.length), `beforeend`);

render(siteContent, createLoadingFilmsList(), `beforeend`);

render(siteContent, createNoDataFilmsList(), `beforeend`);

render(siteMain, createStatistic(), `beforeend`);

const siteStatistic = siteMain.querySelector(`.statistic`);

render(siteStatistic, createStatisticRank(), `beforeend`);

render(siteStatistic, createStatisticFilters(), `beforeend`);

render(siteStatistic, createStatisticTextList(), `beforeend`);

render(siteStatistic, createStatisticChartWrap(), `beforeend`);

render(siteStatistic, createNoUserLevel(), `beforeend`);

render(siteFooter, createFilmDetailsContainer(), `afterend`);

const filmDetails = document.querySelector(`.film-details`);
const detailsTopContainer = filmDetails.querySelector(`.form-details__top-container`);

render(detailsTopContainer, createFilmDetailsInfoWrap(films[0]), `beforeend`);

render(detailsTopContainer, createFilmDetailsControls(films[0]), `beforeend`);

const detailsBottomContainer = filmDetails.querySelector(`.form-details__bottom-container`);

render(detailsBottomContainer, createFilmDetailsCommentsWrap(films[0]), `beforeend`);

const commentsList = detailsBottomContainer.querySelector(`.film-details__comments-list`);

render(commentsList, createFilmDetailsComments(films[0]), `beforeend`);
