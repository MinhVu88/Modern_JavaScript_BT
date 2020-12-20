const form = document.querySelector('#task-form');

const taskInput = document.querySelector('#task');

taskInput.value = ''; // clear input form after user entered some value
/*
// event: submit
form.addEventListener('submit', runEvent0);

function runEvent0(e) {
    console.log(`* EVENT TYPE: ${e.type}`);

    console.log('Task input: ' + taskInput.value); // get input value

    e.preventDefault();
}
*/

// KEY EVENTS
/*
// event: keydown (fires off only when user presses some key down on keyboard)
taskInput.addEventListener('keydown', runEvent1);

const heading = document.querySelector('h5');

function runEvent1(e) {
    console.log(`* EVENT TYPE: ${e.type}`);

    console.log('Input values entered in the form (keydown): ' + e.target.value);

    heading.innerText = e.target.value;
}
*/
/*
// event: keyup (fires off only when user lifts some key up on keyboard)
taskInput.addEventListener('keyup', runEvent2);

function runEvent2(e) {
    console.log(`* EVENT TYPE: ${e.type}`);

    console.log('Input values entered in the form (keyup): ' + e.target.value);
}
*/
/*
// event: keypress (a generalized key event)
taskInput.addEventListener('keypress', runEvent3);

function runEvent3(e) {
    console.log(`* EVENT TYPE: ${e.type}`);

    console.log('Input values entered in the form (keypress): ' + e.target.value);
}
*/

// INPUT EVENTS
/*
// event: focus (fires off when user clicks somewhere inside an input form)
taskInput.addEventListener('focus', runEvent4);

function runEvent4(e) {console.log(`* EVENT TYPE: ${e.type}`);}
*/
/*
// event: blur (fires off when user clicks somewhere outside an input form)
taskInput.addEventListener('blur', runEvent5);

function runEvent5(e) {console.log(`* EVENT TYPE: ${e.type}`);}
*/
/*
// event: cut (fires off when users cuts some content in an input form)
taskInput.addEventListener('cut', runEvent6);

function runEvent6(e) {console.log(`* EVENT TYPE: ${e.type}`);}

// event: paste (fires off when users pastes some content in an input form)
taskInput.addEventListener('paste', runEvent7);

function runEvent7(e) {console.log(`* EVENT TYPE: ${e.type}`);}
*/
/*
// event: input (fires off when use makes any kind of input event)
taskInput.addEventListener('input', runEvent8);

function runEvent8(e) {console.log(`* EVENT TYPE: ${e.type}`);}
*/

// event: change (used with a select list)
const select = document.querySelector('select');

select.addEventListener('change', runEvent9);

function runEvent9(e) {
    console.log(`* EVENT TYPE: ${e.type}`);

    console.log('The value selected: ' + e.target.value);
};