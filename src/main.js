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
import {createFilmDetailsCommentsWrap} from "./view/film-details-comments-wrap";

const FILMS_LIST_COUNT = 5;
const TOP_RATED_FILMS_COUNT = 2;
const MOST_COMMENTED_FILMS_COUNT = 2;

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeader, createHeaderProfile(), `beforeend`);

render(siteMain, createMainNavigation(), `beforeend`);

render(siteMain, createSort(), `beforeend`);

render(siteMain, createContent(), `beforeend`);

const siteContent = siteMain.querySelector(`.films`);

render(siteContent, createFilmsList(), `beforeend`);

const filmsList = siteContent.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);

for (let i = 0; i < FILMS_LIST_COUNT; i++) {
  render(filmsListContainer, createFilmCard(), `beforeend`);
}

render(filmsList, createShowMoreButton(), `beforeend`);

render(siteContent, createTopRatedFilmList(), `beforeend`);

render(siteContent, createMostCommentedFilmList(), `beforeend`);

const filmsListExtra = siteContent.querySelectorAll(`.films-list--extra`);
const filmsListTopRated = filmsListExtra[0].querySelector(`.films-list__container`);

for (let i = 0; i < TOP_RATED_FILMS_COUNT; i++) {
  render(filmsListTopRated, createFilmCard(), `beforeend`);
}

const filmsListMostCommented = filmsListExtra[1].querySelector(`.films-list__container`);

for (let i = 0; i < MOST_COMMENTED_FILMS_COUNT; i++) {
  render(filmsListMostCommented, createFilmCard(), `beforeend`);
}

const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

render(footerStatistics, createFooterStatistics(), `beforeend`);

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

render(detailsTopContainer, createFilmDetailsInfoWrap(), `beforeend`);

render(detailsTopContainer, createFilmDetailsControls(), `beforeend`);

const detailsBottomContainer = filmDetails.querySelector(`.form-details__bottom-container`);

render(detailsBottomContainer, createFilmDetailsCommentsWrap(), `beforeend`);
