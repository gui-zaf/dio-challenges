class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    console.log(`The ${this.type} named ${this.name} attacked!`);

    if (this.type === "warrior") console.log("The warrior used a sword.");
    else if (this.type === "mage") console.log("The mage used a spell.");
    else if (this.type === "monk") console.log("The monk used martial arts.");
    else if (this.type === "ninja") console.log("The ninja used a shuriken.");
    else console.log("The attack was so fast that we couldn't see ⊙ˍ⊙");
  }
}

const hero = new Hero("Blue Pen", 25, "warrior");

hero.attack();