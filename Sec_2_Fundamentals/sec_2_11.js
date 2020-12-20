// 11 - TEMPLATE LITERALS/STRINGS
const name = 'Justin Chancellor';

const age = 48;

const job = 'musician';

const city = 'London';

// without template strings (es5)
let html0 = '<ul>' + 
			'<li>Name: ' + name + '</li>' + 
			'<li>Age: ' + age + '</li>' +
			'<li>job: ' + job + '</li>' +
			'<li>city: ' + city + '</li>' +
			'</ul>';

document.body.innerHTML = html0;

// with template strings (es6)

function hello() {return 'Hi there!';}

html0 = `
	<ul>
		<li>Name: ${name}</li>
		
		<li>Age: ${age}</li>
		
		<li>Job: ${job}</li>
		
		<li>City: ${city}</li>
		
		<li>${3 + 4}</li>
		
		<li>${hello()}</li>
		
		<li>${age1 > 30 ? 'Over 30' : 'Under 30'}</li>
	</ul>
`;

document.body.innerHTML = html0;