class Pet {
  constructor(name, age, sound){
    this.name = name;
    this.age = age;
    this.sound = sound;
  }
  makeNoise(){
    return `${this.sound}!`
  }
  throwBall(){}
  feed(){}
  setNoise(noise){
    this.noise = noise
  }
  getAge() {
    return this.age;
  }
  setAge(age){
    this.age = age;
  }
  getName(){
    return this.name;
  }
}

class Dog extends Pet{
  constructor(name, age, breed){
    super(name, age, "Woof")
    this.breed = breed;
    this.type = "Dog";
    console.log(`You just adopted a ${this.breed} ${this.type} named ${this.name}\n`)
  }
  throwBall(){
    console.log(`You throw the ball for ${this.name}...`)
    console.log(`${this.name} fetched the ball, brought it back to you and says ${this.makeNoise()}\n`);
  }
  feed(){
    console.log(`You give a treat to ${this.name}...`)
    console.log(`${this.name} fetched the ball, brought it back to you and says ${this.makeNoise()}\n`);
  }
}

class Cat extends Pet{
  constructor(name, age, breed){
    super(name, age, "Hiss")
    this.breed = breed;
    this.type = "Cat";
    console.log(`You just adopted a ${this.breed} ${this.type} named ${this.name}\n`)
  }

  throwBall(){
    console.log(`Your throw the ball for ${this.name}...`)
    console.log(`${this.name} pissed on your carpet, shredded your curtains, and says ${this.makeNoise()}\n`);
  }

  feed(){
    console.log(`You give a treat to ${this.name}...`)
    console.log(`${this.name} says ${this.sound}!  and walked away\n`);

  }
  setNoise(noise){
    if(noise != "Hiss"){
      console.log(`HISSError: ${this.name} does not realistically make that noise\n`)
    }
  }
}

class Siamese extends Cat {
    constructor(name, age){
        super(name, age, "Siamese")
    }
    siameseMethod(){
        console.log("Me Siamese...")
    }
}


var Fluffy = new Cat("Fluffy", 5, "Himalayan");
var Furball = new Siamese("Furball", 5);

// Fluffy throws an error because it isnt a Siamese object
Furball.siameseMethod()
Furball.setNoise("Meow")
Fluffy.siameseMethod()
