//Покраска всех карточек

const productCards = document.querySelectorAll(".products__item");
const changeColorAllCardsButton = document.querySelector(
  "#change-color-all-cards",
);
const pinkColorHash = "#c3c2db";
const yellowColorHash = "rgb(245, 255, 188)";

changeColorAllCardsButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = pinkColorHash));
});

//Покраска первой карточки

const firstProductCard = document.querySelector(".products__item");
const changeColorFirstCardButton = document.querySelector(
  "#change-color-first-card",
);

changeColorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = yellowColorHash;
});

//Открыть google

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://www.google.com");
  } else {
    return;
  }
}

//Вывод консоль лог

const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => outputConsoleLog("Дз №6"));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

//Вывод консоль при наведении на заголовок
function printAndAlert(text) {
  console.log(text);
  alert(text);
}

const messageButton = document.querySelector("#button-message");
messageButton.addEventListener("click", function () {
  printAndAlert("Привет! Я универсальная функция!");
});

const pageTitle = document.querySelector(".main-title");
pageTitle.addEventListener("mouseover", function () {
  console.log(event.target.textContent);
});

//Переключатель
const toggleButton = document.querySelector("#button-toggle");
toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle("active-color");
});
