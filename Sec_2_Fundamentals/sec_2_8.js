// 8 - TYPE CONVERSION
// Number -> String
let value0 = 369;

console.log(value0 + ' -> type: ' + typeof value0 + ' & length: ' + value0.length);

value0 = String(value0);

console.log(value0 + ' -> type: ' + typeof value0 + ' & length: ' + value0.length);

let value1 = 4 + 3;

console.log(value1 + ' -> type: ' + typeof value1 + ' & length: ' + value1.length);

value1 = String(value1);

console.log(value1 + ' -> type: ' + typeof value1 + ' & length: ' + value1.length);

// Boolean -> String
let bool0 = false;

console.log(bool0 + ' -> type: ' + typeof bool0 + ' & length: ' + bool0.length);

bool0 = String(bool0);

console.log(bool0 + ' -> type: ' + typeof bool0 + ' & length: ' + bool0.length);

// Date (object) -> String
let date = new Date();

console.log(date + ' -> type: ' + typeof date + ' & length: ' + date.length);

date = String(date);

console.log(date + ' -> type: ' + typeof date + ' & length: ' + date.length);

// array (object) -> String
let values0 = [1,2,3,4,5];

console.log(values0 + ' -> type: ' + typeof values0 + ' & length: ' + values0.length);

values0 = String(values0);

console.log(values0 + ' -> type: ' + typeof values0 + ' & length: ' + values0.length);

// the toString() method: turn any data type to String
let value2 = 51;

console.log(value2 + ' -> type: ' + typeof value2 + ' & length: ' + value2.length);

value2 = (value2).toString();

console.log(value2 + ' -> type: ' + typeof value2 + ' & length: ' + value2.length);

// String -> Number
let value3 = '23';

console.log(value3 + ' -> type: ' + typeof value3 + ' & length: ' + value3.length);

value3 = Number(value3);

console.log(value3.toFixed(1) + ' -> type: ' + typeof value3 + ' & length: ' + value3.length); // toFixed(): the number of values behind the decimal point

// Boolean -> Number
let bool1 = false;

console.log(bool1 + ' -> type: ' + typeof bool1 + ' & length: ' + bool1.length);

bool1 = Number(bool1);

console.log(bool1 + ' -> type: ' + typeof bool1 + ' & length: ' + bool1.length);

// null -> Number
let nullVal = null;

console.log(nullVal + ' -> type: ' + typeof nullVal);

nullVal = Number(nullVal);

console.log(nullVal + ' -> type: ' + typeof nullVal + ' & length: ' + nullVal.length);

// NaN (not a number)
let nan = 'not a number';

console.log(nan + ' -> type: ' + typeof nan + ' & length: ' + nan.length);

nan = Number(nan);

console.log(nan + ' -> type: ' + typeof nan + ' & length: ' + nan.length);

// array (object) -> Number
let values1 = [6,7,8,9,10];

console.log(values1 + ' -> type: ' + typeof values1 + ' & length: ' + values1.length);

values1 = Number(values1);

console.log(values1 + ' -> type: ' + typeof values1 + ' & length: ' + values1.length);

// the parseInt() method: turn any data type to Number (integer)
let value4 = '23';

console.log(value4 + ' -> type: ' + typeof value4 + ' & length: ' + value4.length);

value4 = parseInt(value4);

console.log(value4 + ' -> type: ' + typeof value4 + ' & length: ' + value4.length);

// the parseFloat() method: turn any data type to Number (float)
let value5 = '23.74';

console.log(value5 + ' -> type: ' + typeof value5 + ' & length: ' + value5.length);

value5 = parseFloat(value5);

console.log(value5.toFixed(1) + ' -> type: ' + typeof value5 + ' & length: ' + value5.length);

// TYPE COERCION: String + Int -> js itself turns String to Int or vice versa automatically & produces result accordingly
const value6 = 29;

const value7 = 12;

const sum0 = value6 + value7;

console.log(value6 + ' + ' + value7 + ' = ' + sum0 + ' & type of sum: ' + typeof sum0);

const value8 = String(value7);

const sum1 = value6 + value8;

console.log(value6 + ' + ' + value8 + ' = ' + sum1 + ' & type of sum: ' + typeof sum1);