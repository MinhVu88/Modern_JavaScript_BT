// the Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;

    this.lastName = lastName;
}

Person.prototype.greet = function() {return `Hello ${this.firstName} ${this.lastName}`}

const person0 = new Person('Isaac', 'Newton');

console.log(person0.greet());

// the Customer constructor
function Customer(firstName, lastName, phone, email) {
    Person.call(this, firstName, lastName);

    this.phone = phone;

    this.email = email;
}

// Customer inherits the Person prototype method(s)
Customer.prototype = Object.create(Person.prototype);

// make Customer.prototype return 'constructor: f Customer(args)' on the browser, instead of 'constructor: f Person(args)'
Customer.prototype.constructor = Customer;

const cust0 = new Customer('Michael', 'Faraday', '555-555-5555', 'mike@far.com');

console.log(cust0);

console.log(cust0.greet()); // Customer object now can call Person prototype method

// override the Person prototype method
Customer.prototype.greet = function() {return `Welcome Mr. ${this.firstName} ${this.lastName} to our company`}

console.log(cust0.greet());