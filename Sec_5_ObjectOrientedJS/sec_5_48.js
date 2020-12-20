// ES6 classes
// create the Person class
class Person {
    // create a constructor with properties defined within
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;

        this.lastName = lastName;

        this.birthday = new Date(dob);
    }

    // create methods
    greet() {return `Bonsoir, ${this.firstName} ${this.lastName}`;}

    getAge() {
        const ageGap = Date.now() - this.birthday.getTime();

        return Math.abs(new Date(ageGap).getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {this.lastName = newLastName}

    // a static method can be called without instantiating an object from the class &
    // doesn't use any the class's properties
    static addNumbers(x, y) {return x + y;}
}

// instantiate an object from the Person class
const person0 = new Person('Bethany', 'McLean', '12/12/1970');

console.log(person0);

person0.getsMarried('Berkowitz');

console.log(person0.greet() + ', you\'re ' + person0.getAge() + ' years old now');

// call the static method on the class itself
console.log('The result of calling addNumbers() on the Person class: ' + Person.addNumbers(3, 4));