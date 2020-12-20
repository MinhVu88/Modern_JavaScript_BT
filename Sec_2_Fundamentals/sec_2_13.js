// 13 - OBJECT LITERALS
const person = {
		firstName: 'Danny',
		
		lastName: 'Carey',
		
		age: 59,
		
		hobbies: ['drumming', 'occult practices', 'metaphysics', 'sacred geometry'] /*array*/,
		
		address: {
			city: 'Lawrence',
			state: 'Kansas'
		} /*a nested object*/,
		
		getBirthYear: function() {return 2019 - this.age;} // a function
}

console.log(person);

console.log(person.firstName + ' ' + person.lastName + ', ' + person.age + ' years old');

console.log(person['firstName'] + ' ' + person['lastName'] + ', ' + person['age'] + ' years old');

console.log(person.hobbies);

console.log(person.hobbies[2]);

console.log(person.address);

console.log(person.address.city);

console.log(person.address['state']);

console.log(person.getBirthYear());

// an array of objects
const radiohead = [
	{name: 'Thom Yorke', age: 45},
	
	{name: 'Jonny Greenwood', age: 46},
	
	{name: 'colin Greenwood', age: 41},
	
	{name: 'Ed Obrien', age: 43},
	
	{name: 'Philip Selway', age: 44}
];

for(let i = 0; i < radiohead.length; i++) {console.log(radiohead[i].name);}