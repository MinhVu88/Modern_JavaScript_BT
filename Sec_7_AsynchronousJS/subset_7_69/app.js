const output = document.querySelector('#output');

function displayOuput(value) {
    const ul = document.createElement('ul');

    if(value.object_literal) {
        ul.innerHTML += `<li style='font-size: 25px'>${value.object_literal}</li>`;
    } else if(value.member || value.alias || value.band) {
        ul.innerHTML += `<li style='font-size: 25px'>${value.member} | ${value.alias} | ${value.band}</li>`;
    } else {
        ul.innerHTML += `<li style='font-size: 25px'>${value}</li>`;
    }

    output.appendChild(ul);
};

// a regular function expression
const func_0 = function() {displayOuput('A regular function expression: const var_name = function() {};')};

func_0();

// an arrow function (version #1)
const func_1 = () => {displayOuput('Arrow function #1: const var_name = () => {};')};

func_1();

// an arrow function (version #2)
const func_2 = () => displayOuput('Arrow function #2: const var_name = () console.log(\'{} & return are omitted if there\'s only 1 line of code in the function\');');

func_2();

// an arrow function (version #3)
const func_3 = () => displayOuput({object_literal: 'Arrow function #3: To return an object literal, wrap the object in parentheses (of another function perhaps) -> ( {} )'});

func_3();

// an arrow function (version #4)
const func_4 = member => {
    member = 'Adam Thomas Jones | Bastardometer | Tool';

    displayOuput(member);
};

func_4();

// an arrow function (version #5)
const func_5 = (member='Maynard James Keenan', alias='Möstresticator') => displayOuput({member, alias, band: 'Tool'});

func_5();

// an arrow function used in the array method map()
const aic = ['Jerry Cantrell', 'Layne Staley', 'Mike Starr', 'Sean Kinney', 'Mike Inez', 'Will Duvall'].map(rocker => displayOuput(rocker));