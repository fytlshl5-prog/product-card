import { Modal } from "./modal.js";
import { Form } from "./form.js";
import { Buttons } from "./buttons.js";

class Buyer {
  constructor(brand, size) {
    this.brand = brand;
    this.size = size;
  }
  showInfo() {
    console.log(`Я покупаю платье от ${this.brand}, ${this.size} размера!`);
  }
}

const buyer1 = new Buyer("Chanel", 42);
const buyer2 = new Buyer("Prada", 44);
buyer1.showInfo();
buyer2.showInfo();

//////////////////////////////////////////////////////////

const registerModal = new Modal("register-modal");
const registerForm = new Form("register-form");

const registrationBtn = document.getElementById("registration-btn");

registrationBtn.addEventListener("click", () => {
  registerModal.open();
});

registerForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registerForm.isFormValid()) {
    alert("Форма не валидна,заполните корректно");
    return;
  }
  registerModal.close();

  const formValues = registerForm.getFormValues();

  registerForm.reset();
  registerModal.close();

  alert("Заказ отправлен! Спасибо!");
});
