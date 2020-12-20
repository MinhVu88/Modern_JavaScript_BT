// online ref: https://ultimatecourses.com/blog/mastering-the-module-pattern
// THE STANDARD MODULE PATTERN
const ui_controller = (() => {
    // declare private vars & functions (inaccessible outside of ui_controller)
    let _text = 'a standard module pattern called ui_controller is created, using IIFE (Immediately-invoked Function Expression)';

    const _changeText = () => {
        const element = document.querySelector('h1');

        element.textContent = _text;
    };

    return {
        // declare public vars & functions (accessible outside of ui_controller)
        callChangeText: () => {
            _changeText();

            console.log(_text);
        }
    };
})();

ui_controller.callChangeText();

console.log(ui_controller.text);

// THE REVEALING MODULE PATTERN
const item_controller = (() => {
    let _data = [];

    const _add = item => {
        _data.push(item);

        console.log('Item Added....');
    };

    const _get = id => _data.find(item => item.id === id);

    return {add: _add, get: _get};
})();

item_controller.add({id: 1, name: 'The Antikythera mechanism'});

console.log(item_controller.get(1));