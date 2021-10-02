const symbol1 = Symbol();
const symbol2 = Symbol('sym2'); // 'sym2' is a symbol identifier

console.log('\nsymbol1 ->',symbol1,' | typeof ->',typeof symbol1);
console.log('\nsymbol2 ->',symbol2,' | typeof ->',typeof symbol2);
console.log('\nSymbol() === Symbol() ->',Symbol() === Symbol());
console.log('\nSymbol("123") === Symbol("123") ->',Symbol("123") === Symbol("123"));

try {
  console.log(`Hello ${symbol1}`);  
} catch (error) {
  console.log('\nconsole.log(`Hello ${symbol1}`) ->',error.message);
}

console.log(`\nString(symbol1) -> ${String(symbol1)} | symbol1.toString() -> ${symbol1.toString()}`);

// Symbols can be used to create unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('key2');

const myObj = {};

myObj[KEY1] = 'prop 1';
myObj[KEY2] = 'prop 2';

console.log('\nmyObj[KEY1] ->',myObj[KEY1],' | myObj[KEY2] ->',myObj[KEY2]);

// Symbols are not enumerable in "for...in"
myObj.key3 = 'prop 3';
myObj.key4 = 'prop 4';

for(let i in myObj) {
  console.log(`\n\tmyObj -> ${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify()
console.log("\nJSON.stringify({key: 'value}) ->",JSON.stringify({key: 'value'}));
console.log("\nJSON.stringify({[Symbol('sym3')]: 'value'}) ->",JSON.stringify({[Symbol('sym3')]: 'value'}));