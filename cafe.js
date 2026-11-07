class Drink {
  #temperature;

  constructor(name, size, price, temperature = 20) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать абстрактный класс напрямую!");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemp) {
    this.#temperature = newTemp;
  }

  showInfo() {
    return `Цена: ${this.price} руб. за напиток ${this.name} размера ${this.size}, температура ${this.#temperature}°C `;
  }

  serve() {
    console.log(`Готовим ваш ${this.name}...`);
    this.#prepare();
    console.log(`${this.name} готов! Приятного аппетита!`);
  }
  #prepare() {
    console.log("Ваш напиток будет скоро готов... (^.^)");
  }
}

class BableTea extends Drink {
  constructor(name, size, price, taste, toppings) {
    super(name, size, price);
    this.taste = taste;
    this.toppings = toppings;
  }

  #prepare() {
    console.log(
      ` -> Смешиваем шейк со вкусом "${this.taste}" и добавляем топпинг: ${this.toppings}`,
    );
    this.setTemperature(10);
  }
}

class Tea extends Drink {
  constructor(name, size, price, typeTea) {
    super(name, size, price);
    this.typeTea = typeTea;
  }

  #prepare() {
    console.log(` -> Завариваем горячий чай и добавляем: ${this.typeTea}`);
    this.setTemperature(80);
  }
}

class ColdDrinks extends Drink {
  constructor(name, size, price, presenceOfIce, presenceOfCitrus) {
    super(name, size, price);
    this.presenceOfIce = presenceOfIce;
    this.presenceOfCitrus = presenceOfCitrus;
  }

  #prepare() {
    console.log(" -> Наливаем газировку");
    if (this.presenceOfIce) console.log(" -> Добавляем лед!");
    this.setTemperature(5);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, typeMilk, typeSyrup) {
    super(name, size, price);
    this.typeMilk = typeMilk;
    this.typeSyrup = typeSyrup;
  }

  #prepare() {
    console.log(
      ` -> Варим эспрессо, добавляем молоко (${this.typeMilk}) и сироп (${this.tupeSyrup})`,
    );
    this.setTemperature(85);
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  showCafeInfo() {
    console.log(`Ждем Вас в кафе "${this.name}" по адресу ${this.location} !`);
  }

  orderDrink(drink) {
    console.log(` Клиент заказал ${drink.name}`);
    drink.serve();
    console.log(drink.showInfo());
    console.log(`К оплате: ${drink.price} руб!\n`);
  }
}

const myCafe = new Cafe("Starbucks", "ул. Кайфовая 52");
myCafe.showCafeInfo();

const myBblTea = new BableTea("БаблТишка", "S", "500", "Милк Шейк", "Тапиока");
myCafe.orderDrink(myBblTea);

const myTea = new Tea("Малиновый закат", "L", "250", "Лимон");
myCafe.orderDrink(myTea);

const myColdDrink = new ColdDrinks("Мохито", "M", "230", false, false);
myCafe.orderDrink(myColdDrink);
