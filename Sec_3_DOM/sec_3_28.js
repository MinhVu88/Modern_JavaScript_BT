// using an anonymous function inside an event listener
document.querySelector('.clear-tasks').addEventListener('click', 
    function(event) {
        console.log('1st click');

        // prevent some element's default behavior
        // in this case, the Clear Tasks link's behavior to redirect a click event to some other website
        // another way to stop default behavior is assigning # to href
        event.preventDefault(); 
});

// using a named function within an even listener (recommended)
document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(event) {
    console.log('2nd click');

    console.log(event);

    // the most important thing in the Event object is target 
    // as it represents the element the event's actually happening on
    // in this case, it's the a tag
    console.log(event.target);

    console.log(event.target.id);

    console.log(event.target.className);

    console.log(event.target.classList);

    event.target.innerText = 'Remove Tasks';

    console.log('Event type: ' + event.type);

    console.log('Event timestamp: ' + event.timeStamp);

    // get the event coordinates relative to the window
    console.log('Y (vertical axis): ' + event.clientY);

    console.log('X (horizontal axis): ' + event.clientX);

    // get the event coordinates relative to the element itself
    console.log('Y (vertical axis): ' + event.offsetY);

    console.log('X (horizontal axis): ' + event.offsetX);
};