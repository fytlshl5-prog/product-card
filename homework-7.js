//Задание 3
function printWeather(cityName, temperatute) {
  console.log(
    "Сейчас в " +
      cityName +
      " температура — " +
      temperatute +
      " градусов по Цельсию.",
  );
}

printWeather("Мекка", 45);
printWeather("Самарканд", 30);

//Задание 4
const SPEED_OF_LIGHT = 299792458;
function checkSpeed(curentSpeed) {
  if (curentSpeed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (curentSpeed === SPEED_OF_LIGHT) {
    console.log("Скорость света");
  } else if (curentSpeed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  }
}

checkSpeed(233792458);
checkSpeed(300045889);
checkSpeed(299792458);

//Задание 5
const productName = "Cosmetic set";
const productPrice = 150;

function checkBudget(userBudget) {
  if (userBudget >= productPrice) {
    console.log(`"${productName}" приобретён. Спасибо за покупку!`);
  } else {
    const missingAmount = productPrice - userBudget;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс.`);
  }
}
checkBudget(350);
checkBudget(83);

//Задание 6
function showAnimal() {
  console.log("Жираф");
}
showAnimal();

//Задание 7
const myName = "Фатима";
var myAge = 17;
let myPets = "Котенок";
