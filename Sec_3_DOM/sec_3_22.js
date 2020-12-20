// 22 - Examining the Document Object (properties)
console.log(document);

console.log(document.all);

console.log(document.all[0]);

console.log(document.all[1]);

console.log(document.all[2]);

console.log('The total number of elements in the dom: ' + document.all.length);

console.log(document.head);

console.log(document.body);

console.log(document.doctype);

console.log('Domain: ' + document.domain);

console.log('URL: ' + document.URL);

console.log('Character set: ' + document.characterSet);

console.log('Content type: ' + document.contentType);

console.log(document.forms);

console.log(document.forms[0]);

console.log(document.forms[1]);

console.log(document.forms[0].id);

console.log(document.forms[0].method);

console.log(document.forms[0].action);

console.log(document.links);

console.log(document.links[0]);

console.log(document.links[0].id);

console.log(document.links[0].className);

console.log(document.links[0].classList);

console.log(document.links[0].classList[0]);

console.log(document.images);

console.log(document.scripts);

console.log('Get a script attribute: ' + document.scripts[2].getAttribute('src'));

// turn a html collection (scripts0) into an array (scripts1), so the foreach loop (for arrays only) can be applied
let scripts0 = document.scripts;

let scripts1 = Array.from(scripts0);

scripts1.forEach(function(script, index) {console.log(`* Script #${index + 1}: ` + script.getAttribute('src'));});