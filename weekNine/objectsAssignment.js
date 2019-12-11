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
  }
  throwBall(){
    console.log(`${this.name} fetched the ball, brought it back to you and says...`)
    this.makeNoise()
  }
  feed(){
    console.log(`${this.name} fetched the ball, brought it back to you and says...`)
    this.makeNoise()
  }
}

class Cat extends Pet{
  constructor(name, age, breed){
    super(name, age, "Hiss")
    this.breed = breed;
  }
  throwBall(){
    console.log(`${this.name} pissed on your carpet, shredded your curtains, and says...`)
    this.makeNoise()
  }
  feed(){
    console.log(`${this.name} says ${this.noise}.  and walked away`)
  }
  setNoise(noise){
    if(noise != "Hiss"){
      console.log(`Error: ${this.name} does not realistically make that noise`)
    }
  }
}

var Spike = new Dog("Spike", 2, "Weimereiner");
var Fluffy = new Cat("Fluffy", 5, "Himalayan");

Spike.getAge;
Fluffy.getAge;

Spike.feed()
Fluffy.feed()

Spike.throwBall();
Fluffy.throwBall();

Spike.makeNoise();