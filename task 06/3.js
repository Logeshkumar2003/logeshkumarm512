class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name}. I'm ${this.age} years old and identify as ${this.gender}.`);
    }
  }
  const person1 = new Person("John Doe", 25, "Male");
  person1.introduce();