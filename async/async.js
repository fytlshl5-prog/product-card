const showAllBtn = document.getElementById("show-all-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const cardsContainer = document.getElementById("cards-container");
const statusMessage = document.getElementById("status-message");
const cardTemplate = document.getElementById("card-template");

function renderCards(usersArray) {
  cardsContainer.innerHTML = "";
  if (usersArray.length === 0) {
    statusMessage.textContent = "Данные загружаются...";
    return;
  }

  statusMessage.textContent = "";

  usersArray.forEach((user) => {
    const userClone = cardTemplate.content.cloneNode(true);
    userClone.querySelector(".user-name").textContent = user.name;
    userClone.querySelector(".user-surname").textContent = user.surname;
    userClone.querySelector(".user-email").textContent = user.email;
    userClone.querySelector(".user-age").textContent = user.age;
    const imgElement = userClone.querySelector(".user-image");
    if (imgElement) {
      imgElement.src = user.image;
      imgElement.alt = user.name;
    }

    const deleteBtn = userClone.querySelector(".delete-card-btn");
    deleteBtn.addEventListener("click", () => {
      deleteCard(user.id);
    });

    cardsContainer.appendChild(userClone);
  });
}

function getUsers() {
  statusMessage.textContent = "Данные загружаются";
  cardsContainer.innerHTML = "";

  setTimeout(() => {
    fetch("./users.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        return response.json();
      })
      .then((data) => {
        statusMessage.textContent = "";
        localStorage.setItem("users", JSON.stringify(data.users));
        renderCards(data.users);
      })
      .catch((error) => {
        statusMessage.textContent = error.message;
      });
  }, 1000);
}

function deleteCard(id) {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const filteredUsers = users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    renderCards(filteredUsers);
  } catch (error) {
    console.error("Ошибка при удалении карточки:", error);
    statusMessage.textContent = "Ошибка при удалении данных";
  }
}

deleteAllBtn.addEventListener("click", () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length === 0) {
    alert("Нет данных для удаления");
    return;
  }

  localStorage.setItem("users", JSON.stringify([]));
  renderCards([]);
});

showAllBtn.addEventListener("click", () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.length === 0) {
    getUsers();
  } else {
    renderCards(users);
  }
});

const savedData = localStorage.getItem("users");
if (savedData === null) {
  getUsers();
} else {
  const users = JSON.parse(savedData);
  renderCards(users);
}
