const form = document.querySelector(".subscribe--form");
const input = document.querySelector(".subscribe--input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = input.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue || !emailPattern.test(emailValue)) {
    alert("Введите корректный email адрес!");
  }

  console.log({ email: emailValue });
  form.reset();
});

let user = null;

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open--btn");
  const overlay = document.querySelector(".modal--overLay");
  const closeBtn = document.getElementById("close--btn");
  const form = document.getElementById("modal--registration");

  if (!openBtn || !overlay || !closeBtn || !form) {
    console.error("Элементы не найдены");
    return;
  }

  openBtn.addEventListener("click", () =>
    overlay.classList.add("modal--showed"),
  );
  closeBtn.addEventListener("click", () =>
    overlay.classList.remove("modal--showed"),
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("modal--showed")) {
      overlay.classList.remove("modal--showed");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pass = document.getElementById("modal--first--password").value;
    const confirm = document.getElementById(
      "modal--first--repeated--password",
    ).value;

    if (pass !== confirm || !form.checkValidity()) {
      if (pass !== confirm) alert("Пароли не совпадают");
      else form.reportValidity();
      return;
    }

    user = {
      ...Object.fromEntries(new FormData(form).entries()),
      createdOn: new Date(),
    };

    console.log("Успешная регистрация:", user);
    overlay.classList.remove("modal--showed");
  });
});
