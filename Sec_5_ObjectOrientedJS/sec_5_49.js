// inheritance in ES6 classes (a.k.a subclasses)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;

        this.lastName = lastName;
    }

    greet() {return `Hello ${this.firstName} ${this.lastName}`}
}

// create the Customer class that extends Person -> Customer is a Person's subclass
class Customer extends Person {
    constructor(firstName, lastName, age, email) {
        super(firstName, lastName); // call the parent class which is Person

        this.age = age;

        this.email = email;
    }

    static getDrummingLvl() {return 9000;}
}

const cust0 = new Customer('Danny', 'Carey', 59, 'dancarey@tool.com');

console.log(cust0);

// call both the parent class's greet() & subclass's getDrummingLvl() methods
console.log(cust0.greet() + ', your drumming level is over ' + Customer.getDrummingLvl()); 

// ERROR because subclasses can call parent class's methods but not the other way around
console.log(Person.getDrummingLvl()); 