// 1) DESTRUCTURING ASSIGNMENT
let a, b;

[a, b] = [100, 200];
console.log('\n[a, b] = [100, 200] | a & b ->',a,'&',b);

// rest operator
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log('\n[a, b, ...rest] = [100, 200, 300, 400, 500] | rest ->',rest);

[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log('\n[a, b, c, ...rest] = [100, 200, 300, 400, 500] | rest ->',rest);
console.log('c ->',c);

// with objects
({a, b} = {a: 1, b: 2, c: 3, d: 4, e: 5});
console.log('\n({ a, b } = { a: 1, b: 2, c: 3, d: 4, e: 5 }) | a & b ->',a,'&',b);

({a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4, e: 5});
console.log('\n({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4, e: 5 }) | rest ->',rest);

// 2) ARRAY DESTRUCTURING
const people = ['Maynard Keenan', 'Adam Jones', 'Dan Carey', 'Justin Chancellor', 'Paul D\'Amour'];

const [person1, person2, person3, person4, person5] = people;
console.log('\nperson1, person2, person3, person4 & person5 ->',person1,',',person2,',',person3,',',person4,'&',person5);

function getPeople() {
  return ['Layne Staley', 'Chris Cornell', 'Eddie Vedder'];
}

let person6, person7, person8;

[person6, person7, person8] = getPeople();
console.log('\nperson6, person7 & person8 ->',person6,',',person7,'&',person8);

// 3) OBJECT DESTRUCTURING
const member1 = {
  name: 'Albert Ritter',
  age: 32,
  location: 'Munich',
  gender: 'male'
};

// old ES5
console.log('\nOld ES5 | member1.name, member1.age, member1.gender & member1.location ->',member1.name,',',member1.age,',',member1.gender,'&',member1.location);

const member2 = {
  name: 'Johan Liebert',
  age: 23,
  birthplace: 'Münster',
  gender: 'male',
  greet() {console.log(`Guten morgen, ${member1.name}`);}
};

// new ES6
const {name, age, gender, birthplace, greet} = member2;
console.log('\nNew ES6 | name, age, gender & birthplace ->',name,',',age,',',gender,'&',birthplace);
greet();