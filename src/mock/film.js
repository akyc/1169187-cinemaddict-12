import {random, randomInt, randomArrayItems, randomDate} from "../utils.js";

const posters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const titles = [
  `Made for each other`,
  `Popeye meets sinbad`,
  `Sagebrush trail`,
  `Santa claus conquers the martians`,
  `The dance of life`,
  `The great flamarion`,
  `The man with the golden arm`,
];

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const generes = [
  `Drama`,
  `Film-Noir`,
  `Mystery`,
];

const directors = [
  `Anthony Mann`,
  `Tim Macoveev`,
  `John Doe`,
];

const writersList = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
];

const actorsList = [
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
];

const countries = [
  `USA`,
  `Russia`,
];

const ages = [
  `18+`,
  `14+`,
  `6+`,
];

const generateComments = (quantity = 0) => {
  const emojis = [
    `angry`,
    `puke`,
    `sleeping`,
    `smile`,
  ];

  const texts = [
    `Interesting setting and a good cast`,
    `Booooooooooring`,
    `Very very old. Meh`,
    `Almost two hours? Seriously?`,
  ];

  const authers = [
    `Tim Macoveev`,
    `John Doe`,
  ];

  let result = [];
  for (let i = 0; i < quantity; i++) {
    const comment = {
      emoji: randomArrayItems(emojis),
      text: randomArrayItems(texts),
      auther: randomArrayItems(authers),
      date: randomDate(new Date(2019, 0, 1), new Date())
    };
    result.push(comment);
  }
  return result;
};

export const generateFilm = () => {
  return {
    poster: randomArrayItems(posters),
    title: randomArrayItems(titles),
    original: randomArrayItems(titles),
    rating: random(1, 10).toFixed(1),
    release: randomDate(new Date(1930, 0, 1), new Date(1960, 0, 1)),
    duration: `${randomInt(1, 2)}h ${randomInt(0, 59)}m`,
    description: randomArrayItems(descriptions, randomInt(1, 5), ` `),
    comments: generateComments(randomInt(0, 5)),
    gener: randomArrayItems(generes, randomInt(2, generes.length - 1), ``, false),
    director: randomArrayItems(directors, 1),
    writers: randomArrayItems(writersList, randomInt(2, writersList.length - 1)),
    actors: randomArrayItems(actorsList, randomInt(2, actorsList.length - 1)),
    country: randomArrayItems(countries),
    isWatched: Boolean(randomInt()),
    isFavorite: Boolean(randomInt()),
    inWatchList: Boolean(randomInt()),
    age: randomArrayItems(ages),
  };
};
