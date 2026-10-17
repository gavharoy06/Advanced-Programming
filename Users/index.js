class Cofee {
  constructor(cost) {
    this.cost = cost;
  }

  price() {
    console.log(this.cost);
  }
}

class Doppio extends Cofee {
  smooth() {
    console.log(this.cost + " Doppio");
  }
}
class Latte extends Cofee {
  smooth() {
    console.log(this.cost + " Latte");
  }
}

class CofeeFactory {
  static create(type) {
    if (type === "Doppio") return new Doppio(25);
    if (type === "Latte") return new Latte(35);
    throw new Error("Cofee ?" + type);
  }
}

// const cofe = new Doppio("25");
const order_1 = CofeeFactory.create("Doppio");
const order_2 = CofeeFactory.create("Latte");

order_1.price();
order_1.smooth();
order_2.price();
order_2.smooth();
