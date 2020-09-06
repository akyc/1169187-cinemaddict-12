export const createFilmDetailsComments = (film) => {
  const {comments} = film;
  const commentsList = comments.map((item) => {
    return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${item.emoji}.png" width="55" height="55" alt="emoji-${item.emoji}">
    </span>
    <div>
      <p class="film-details__comment-text">${item.text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${item.auther}</span>
        <span class="film-details__comment-day">${item.date.toLocaleString(`en-US`, {year: `numeric`})}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
  })
  .join(``);
  return `${commentsList}`;
};
