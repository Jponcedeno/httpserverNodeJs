`use strict`;
//these other files are just modules
// Module wrapper Function
// (function (exports, require, module, __filename, __dirname) {});

console.log(__dirname, __filename);

//You may think this is running directly from here but it's actually all wrapped in something called the module wrapper function (above^)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}
module.exports = Person;
