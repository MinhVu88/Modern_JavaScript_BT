/**
 * each object in js has a prototype & a prototype is an object itself
 * 
 * all objects inherit their properties & methods from their prototypes
 * 
 * object literals inherit those from a prototype called Object: Object.prototype
 * 
 * objects created thru constructors (ex: const person = new Person()) inherit those from Person.prototype
 * 
 * prototype chain: move from sub-prototypes to main ones
 */

// the Person constructor 
function Person(firstName, lastName, dob) {
    // object properties (firstName, lastName & birthday)
    this.firstName = firstName;

    this.lastName = lastName;

    this.birthday = new Date(dob);
    /*
    // this method should be placed inside a prototype, not directly inside an object
    this.getAge = function() {
        const ageGap = Date.now() - this.birthday.getTime();

        return Math.abs(new Date(ageGap).getUTCFullYear() - 1970);
    }*/
}

// the getAge() method is placed inisde Person.prototype
Person.prototype.getAge = function() {
    const ageGap = Date.now() - this.birthday.getTime();

    return Math.abs(new Date(ageGap).getUTCFullYear() - 1970);
}

const person0 = new Person('Ken', 'Lay', '4-15-1942');

const person1 = new Person('Jeff', 'Skilling', 'November 25 1953');

console.log(person0);

console.log(person1);

console.log("Jeff Skilling's " + person1.getAge() + ' years old now');

// define another method inside Person.prototype
Person.prototype.getFullName = function() {return `${this.firstName} ${this.lastName}`;}

console.log("Enron's founder: " + person0.getFullName() + " & its CEO: " + person1.getFullName());

const person2 = new Person('Bethany', 'McLean', '12/12/1970');

console.log('Before marriage, Bethany\'s full name is ' + person2.getFullName());

// getsMarried() inside Person.prototype
Person.prototype.getsMarried = function(newLastName) {this.lastName = newLastName;}

person2.getsMarried('Berkowitz');

console.log('After marriage, Bethany McLean changed her surname to ' + person2.getFullName());

// call a method in Object.prototype (hasOwnProperty())
if (person1.hasOwnProperty('firstName') && person1.hasOwnProperty('lastName') && person1.hasOwnProperty('birthday')) {
    console.log('True');
} else {
    console.log('False');
}

if (person2.hasOwnProperty('getAge') && person2.hasOwnProperty('getFullName') && person2.hasOwnProperty('getsMarried')) {
    console.log('True');
} else {
    console.log('False');
}