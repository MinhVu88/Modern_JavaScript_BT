const clearButton = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');

// click
clearButton.addEventListener('click', runEvent);

// double click
clearButton.addEventListener('dblclick', runEvent);

// mouse down
clearButton.addEventListener('mousedown', runEvent);

// mouse up
clearButton.addEventListener('mouseup', runEvent);
/*
// mouse enter only fires off when mouse interacts with the main element/parent (card)
card.addEventListener('mouseenter', runEvent);

// mouse leave only fires off when mouse interacts with the main element/parent (card)
card.addEventListener('mouseleave', runEvent);

// mouse over only fires off when mouse interacts with a child element (buttons, links or lists inside of card)
card.addEventListener('mouseover', runEvent);

// mouse out only fires off when mouse interacts with a child element (buttons, links or lists inside of card)
card.addEventListener('mouseout', runEvent);
*/
// mouse move
card.addEventListener('mousemove', runEvent);

// event handler
function runEvent(e) {
    console.log(`* EVENT TYPE: ${e.type}`);

    heading.textContent = `Mouse X: ${e.offsetX} | Mouse Y: ${e.offsetY}`;

    // css: rgb(1st param: red (0 - 255), 2nd param: green (0 - 255), 3rd param: blue (0 - 255))
    document.body.style.backgroundColor = `rgb(${e.offsetX} ${e.offsetY} 40)`;
};