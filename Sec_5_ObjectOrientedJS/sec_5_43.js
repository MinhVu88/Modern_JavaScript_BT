// constructors & the 'this' keyword
// an object literal
const user = {
    name: 'Brad',

    age: 30
}

console.log(user);

console.log(user.age);

// create a constructor with a hardcoded value
function Genius0() {this.name = 'Nikola Tesla';}

const scientist = new Genius0();

console.log(scientist);

// create another constructor using 'this', which refers to the current instance of this object
function Tool0(name) {this.name = name;}

const vocalist = new Tool0('Maynard Keenan');

const guitarist = new Tool0('Adam Jones');

console.log(vocalist);

console.log(guitarist);

// use 'this' inside of a constructor (function scope)
function Tool1(name) {
    this.name = name;

    console.log(this);
}

const secondBassist = new Tool1('Justin Chancellor');

// use 'this' ouside of a constructor (global scope)
console.log(this);

this.alert("When 'this' is used in the global scope, it pertains to the window object");

// add additional params to a constructor
function Tool2(name, age) {
    this.name = name;

    this.age = age;
}

const drummer = new Tool2('Danny Carey', 59);

console.log(drummer);

function Tool3(name, dob) {
    this.name = name;

    this.birthday = new Date(dob);
}

const firstBassist = new Tool3("Paul D'Amour", '5/12/1967');

console.log(firstBassist);

// define a method within a constructor
function Genius1(name, dob) {
    this.name = name;

    this.birthday = new Date(dob);

    this.getAge = function() {
        const ageGap = Date.now() - this.birthday.getTime();

        return Math.abs(new Date(ageGap).getUTCFullYear() - 1970);
    }
}

const musician = new Genius1('Beethoven', '12-12-1770');

console.log(musician);

console.log("Beethoven's age today: " + musician.getAge());