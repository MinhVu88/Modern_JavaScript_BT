// create the personProto object
const personProto = {
    greet: function() {return `Hello ${this.firstName} ${this.lastName}`},

    marry: function(newLastName) {this.lastName = newLastName;}
}

// using Object.create() as an alternative way to create objects
const person0 = Object.create(personProto);

person0.firstName = 'Korin';

person0.lastName = 'Faught';

person0.age = 30;

console.log(person0);

console.log(person0.greet());

person0.marry('Jones');

console.log(person0.greet());

const person1 = Object.create(personProto, 
                            {firstName: {value: 'Maynard'},
                             lastName: {value: 'Keenan'},
                             age: {value: 55}
                            });

console.log(person1);

console.log(person1.greet());