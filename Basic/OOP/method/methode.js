// class Person {
//     #firstName;
//     #lastName;
//     constructor(firstName, lastName) {
//       this.#firstName = firstName;
//       this.#lastName = lastName;
//     }
//     #firstLast() {
//       return `${this.#firstName} ${this.#lastName}`;
//     }
//     #lastFirst() {
//       return `${this.#lastName}, ${this.#firstName}`;
//     }
//     getFullName(format = false) {
//       return format ? this.#firstLast() : this.#lastFirst();
//     }
//   }
//   let person = new Person('John', 'Doe');
//   let fullName = person.getFullName();

// console.log(fullName);

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    
    start: function() {
      console.log('The car is starting...');
    },
    drive() {
      console.log(`The car ${this.brand} ${this.model} is driving...`);
    }
  };
  
  // Mengakses dan memanggil metode
  car.start(); // Output: The car is starting...
  car.drive(); // Output: The car is driving...
  
