OOPS = Object-Oriented Programming System
👉 It is a programming style based on objects and classes.

✅ 1. Object 🧱
🔹 Definition

👉 An object is a collection of properties and methods.

✅ Example
let student = {
  name: "Raushan",
  age: 22,
  study: function() {
    console.log("Student is studying");
  }
};

console.log(student.name);
student.study();

✅ 2. Class 🏫
🔹 Definition

👉 A class is a blueprint (template) for creating objects.

✅ Example
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  study() {
    console.log(this.name + " is studying");
  }
}

let s1 = new Student("Raushan", 22);
s1.study();

✅ 3. Encapsulation 🔒
🔹 Definition

👉 Wrapping data and methods into a single unit (class) and hiding details.

✅ Example
class BankAccount {
  constructor(balance) {
    this.balance = balance; // data
  }

  getBalance() {
    return this.balance; // method
  }
}

let acc = new BankAccount(1000);
console.log(acc.getBalance());

✅ 4. Abstraction 🎭
🔹 Definition

👉 Showing only essential details and hiding implementation.

✅ Example
class Car {
  start() {
    this.#engine(); // hidden logic
    console.log("Car started");
  }

  #engine() {
    console.log("Engine running...");
  }
}

let c = new Car();
c.start();


👉 #engine() is private (hidden).

✅ 5. Inheritance 👨‍👩‍👦
🔹 Definition

👉 One class inherits properties and methods from another class.

✅ Example
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

let d = new Dog();
d.speak();

✅ 6. Polymorphism 🔄
🔹 Definition

👉 Same method name, different behavior.

✅ Example
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}

let s = new Shape();
let c = new Circle();

s.draw();
c.draw();

✅ 7. Prototype (Important in JS 🔥)
🔹 Definition

👉 JavaScript uses prototype-based inheritance.

✅ Example
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello " + this.name);
};

let p1 = new Person("Raushan");
p1.sayHello();

✅ OOPS Summary (Interview Ready) 🧠

👉 OOPS in JavaScript includes:

Object

Class

Encapsulation

Abstraction

Inheritance

Polymorphism

Prototype