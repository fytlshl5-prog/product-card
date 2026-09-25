// Задание 3
const myPersonalDate = {
  name: "Фатима",
  age: 17,
  nation: "Узбечка",
  height: 163,
  country: "Россия",
  city: "Москва",
  status: "Студент",
  languages: ["Русский", "Английский", "Узбекский"],
};

//Задание 4
const carDate = {
  brand: "Lexus",
  model: "ES/F SPORT",
  year: 2026,
  color: "Wavelength",
  gearbox: "ES 350h F SPORT",
};
carDate.owner = myPersonalDate;

//Задание 5
function checkMaxSpeed(carDateObject) {
  if ("максимальная скорость" in carDateObject) {
    return;
  }
  carDateObject["максимальная скорость"] = 220;
}

//Задание 6
function showValue(obj, key) {
  console.log(obj[key]);
}

//Задание 7
const listOfproducts = [
  "творожный сыр",
  "авокадо",
  "багет",
  "персиковый сок",
  "малина",
  "молочный шоколад",
];

//Задание 8
const movies = [
  {
    name: "Человек-паук",
    year: 2002,
    date: "3 мая",
    protagonist: "Тоби Магуайр",
    director: "Сэм Рэйми",
    rating: 7.4,
  },
  {
    name: "Человек-паук 2",
    year: 2004,
    date: "30 июня",
    protagonist: "Тоби Магуайр",
    director: "Сэм Рэйми",
    rating: 7.5,
  },
  {
    name: "Человек-паук 3: Враг в отражении",
    year: 2007,
    date: "4 мая",
    protagonist: "Тоби Магуайр",
    director: "Сэм Рэйми",
    rating: 6.3,
  },
  {
    name: "Новый Человек-паук",
    year: 2012,
    date: "3 июля",
    protagonist: "Эндрю Гарфилд",
    director: "Марк Уэбб",
    rating: 7.0,
  },
];

//Исходный список фильмов

movies.push({
  name: "Новый Человек-паук: Высокое напряжение",
  year: 2014,
  date: "2 мая",
  protagonist: "Эндрю Гарфилд",
  director: "Марк Уэбб",
  rating: 6.6,
});

//Новый список фильмов

//Задание 9
const moviesContinuation = [
  {
    name: "Человек-паук: Возвращение домой",
    year: 2017,
    date: "7 июля",
    protagonist: "Том Холланд",
    director: "Джон Уоттс",
    rating: 7.4,
  },
  {
    name: "Человек-паук: Вдали от дома",
    year: 2019,
    date: "2 июля",
    protagonist: "Том Холланд",
    director: "Джон Уоттс",
    rating: 7.3,
  },
  {
    name: "Человек-паук: Нет пути домой",
    year: 2021,
    date: "17 декабря",
    protagonist: "Том Холланд",
    director: "Джон Уоттс",
    rating: 8.1,
  },
  {
    name: "Человек-паук: Новый день",
    year: 2026,
    date: "31 июля",
    protagonist: "Том Холланд",
    director: "Денстин Дэниел Креттон",
    rating: 8.0,
  },
];

//Объединение двух массивов в один

const merginFilm = [...movies, ...moviesContinuation];

//Задание 10
function bestRating(moviesArray) {
  return moviesArray.map((merginFilm) => {
    return {
      ...merginFilm,
      isBest: merginFilm.rating >= 7.5,
    };
  });
}
//Вызов функции
const updateMovies = bestRating(merginFilm);
