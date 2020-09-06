const createMainNavigationItem = (navigation, isActive) => {
  const {name, count} = navigation;
  return (`
    <a
      href="#${name.toLowerCase()}"
      class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
        ${name === `All` ? `All movies` : `${name}<span class="main-navigation__item-count">${count}</span>`}
    </a>`
  );
};
export const createMainNavigation = (navigation) => {
  const navigationItems = navigation
  .filter((item) => item.count > 0)
  .map((item, index) => createMainNavigationItem(item, index === 0))
  .join(``);
  return (`
    <nav class="main-navigation">
      <div class="main-navigation__items">
        ${navigationItems}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>
  `);
};
