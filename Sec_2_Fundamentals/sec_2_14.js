// 14 - DATE & TIME
const today = new Date();

console.log('Today: ' + today + ' | ' + typeof today);

let birthday = new Date('09-29-1988 17:30:00');

console.log('date format 1 (mm-dd-yyyy): ' + birthday);

birthday = new Date('September 29 1988');

console.log('date format 2 (month date year): ' + birthday);

birthday = new Date('09/29/1988');

console.log('date format 3 (mm/dd/yyyy): ' + birthday);

// month is zero-based in js, just like zero-based indices in arrays
console.log('The current month (zero-based): ' + today.getMonth() + ' + 1'); 

console.log('The current date: ' + today.getDate());

console.log('The current day of the week (Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6): ' + today.getDay());

console.log('The full year: ' + today.getFullYear());

console.log('Time: ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds());

console.log('The current timestamp: ' + today.getTime());

birthday.setMonth(6);

birthday.setDate(2);

birthday.setFullYear(2019);

birthday.setHours(9);

birthday.setMinutes(30);

birthday.setSeconds(25);

console.log('Birthday: ' + birthday);