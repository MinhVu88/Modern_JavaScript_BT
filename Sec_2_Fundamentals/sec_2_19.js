// 19 - THE WINDOW OBJECTS, METHODS & PROPERTIES
// * THE WINDOW OBJECTS (including location, history & navigator objects)
/*
window.console.log("No need to type 'window' as we're at the top of the Window object");

// alert
window.alert('Hello World');

// prompt
const input = prompt();

alert(input);

// confirm
if (confirm('Are you sure?')) {
	console.log('Yes');
} else {
	console.log('No');
}
*/

// outer height & width
console.log('The outer height: ' + window.outerHeight + ' & outer width: ' + window.outerWidth);

// inner height & width
console.log('The outer height: ' + window.innerHeight + ' & outer width: ' + window.innerWidth);

console.log('Scroll point(s): ' + window.scrollX + ' & ' + window.scrollY);

// * LOCATION OBJECT
console.log(window.location);

console.log('hostname: ' + window.location.hostname);

console.log('port: ' + window.location.port);

console.log('href: ' + window.location.href);

console.log('The search parameter: ' + window.location.search);

/*
// redirect
window.location.href = 'https://en.wikipedia.org/wiki/Cicada_3301';

// reload the page
window.location.reload();
*/

// * HISTORY OBJECT
//window.history.go(-1);

console.log("The browsing history's length: " + window.history.length);

// * NAVIGATOR OBJECT (associated with the browser itself, not the window or the environment)
console.log(window.navigator);

console.log('Navigator appName: ' + window.navigator.appName);

console.log('Navigator appVersion: ' + window.navigator.appVersion);

console.log('Navigator userAgent: ' + window.navigator.userAgent);

console.log('Navigator platform: ' + window.navigator.platform);

console.log('Navigator vendor: ' + window.navigator.vendor);

console.log('Navigator language: ' + window.navigator.language);