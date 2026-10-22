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
  const openBtn = document.getElementById("open__btn");
  const overlay = document.querySelector(".modal__overLay");
  const closeBtn = document.getElementById("close__btn");
  const form = document.getElementById("modal__registration");

  if (!openBtn || !overlay || !closeBtn || !form) {
    console.error("Элементы не найдены");
    return;
  }

  openBtn.addEventListener("click", () =>
    overlay.classList.add("modal__showed"),
  );
  closeBtn.addEventListener("click", () =>
    overlay.classList.remove("modal__showed"),
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("modal__showed")) {
      overlay.classList.remove("modal__showed");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pass = document.getElementById("modal__first__password").value;
    const confirm = document.getElementById(
      "modal__first__repeated__password",
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
    overlay.classList.remove("modal__showed");
  });
});
