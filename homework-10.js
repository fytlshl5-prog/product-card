import { products } from "./products-10.js";

const cardsTemplate = document.getElementById("cards-template");
const cardsList = document.getElementById("cards-list");

const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log("Проверка .reduce():", productDescriptions);

function getCards() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");

  if (userInput === null) {
    alert("Отмена ввода. Отображена 1 карточка.");
    return 1;
  }
  const count = parseInt(userInput, 10);

  if (Number.isInteger(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    alert("Нужно ввести целое число от 1 до 5");
    return getCards();
  }
}

function renderCards(productsArray) {
  ((cardsList.innerHTML = ""),
    productsArray.forEach((product) => {
      const productClone = cardsTemplate.content.cloneNode(true);
      productClone.querySelector(".product-id").textContent = product.id;
      productClone.querySelector(".product-type").textContent = product.type;
      productClone.querySelector(".product-name").textContent = product.name;
      productClone.querySelector(".product-description").textContent =
        product.description;
      productClone.querySelector(".product-compoundList").textContent =
        product.compoundList.join(",");
      productClone.querySelector(".product-price").textContent =
        product.price + "  ₽";
      const imgElement = productClone.querySelector(".product-image");
      if (imgElement) {
        imgElement.src = product.image;
        imgElement.alt = product.name;
      }
      cardsList.appendChild(productClone);
    }));
}

const countToDisplay = getCards();
const productsToRender = products.slice(0, countToDisplay);
renderCards(productsToRender);
