/* Game Rules:

- Player must guess a number between a min & max

- Player gets a certain amount of guesses

- Notify player of the remaining number of guesses

- Notify player of the correct guess if defeated

- Let player choose to play again
*/
// game values
let min = 1, max = 10, winning_num = getRandomNum(min, max), chances = 3;

// dom/UI vars
const game = document.querySelector('#game'),
      min_num = document.querySelector('.min-num'),
      max_num = document.querySelector('.max-num'),
      guess_btn = document.querySelector('#guess-btn'),
      guess_input = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// set the min & max in the UI
min_num.textContent = min;

max_num.textContent = max;

// event listener for guess btn (the 'Submit' version)
guess_btn.addEventListener('click', () => {
    console.log(guess_input.value, typeof guess_input.value);

    // guess_input.value returns a string, for comparison operations, it must be an int
    let guess = parseInt(guess_input.value);

    console.log(guess, typeof guess);

    // check if guess is empty, not a number, less than min or over max
    if(Number.isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} & ${max}`, 'red');
    }else {
        setMessage('', '');
    }

    // if player wins, he or she can't guess anymore (disable the input field) & the input field's border becomes green
    // also a message will appear to announce their victory, the message's also green
    if (guess === winning_num) {
        gameOver(true, `YOU WON! Your guess: ${guess} | Computer: ${winning_num}`);
    } else {
        // if player loses, the chances to guess decrease
        // if the remaining chances reach 0, game's over, the input field's disabled & red & a red message appears notifying them of their defeat
        // if the remaining chances aren't 0 yet & player just made a wrong guess, the game continues until no chances are left or until they win
        chances -= 1;

        if (chances === 0) {
            gameOver(false, `YOU LOSE! Your guess: ${guess} | Computer: ${winning_num}`);
        } else {
            guess_input.style.borderColor = 'red';

            setMessage(`${guess} is incorrect | ${chances} guesses left`, 'red');

            guess_input.value = ''; // clear the input field after each wrong guess
        }
    }
});

/*
- The event listener for the dynamic 'Play Again' button is created in gameOver()

- To reload the page after user wins or loses, event delegation is used, 
  so the event listener is attached to the button's parent element (the div with the id of 'game')

- From 'game', if user clicks the button, it's targeted & checked if its class is 'play-again'

- If it is, the page reloads & the 'Submit' button reappears
*/
game.addEventListener('click', e => {if(e.target.className === 'play-again') window.location.reload();});

function gameOver(won, msg) {
    let color;

    won === true ? color = 'green' : color = 'red';

    guess_input.disabled = true;

    guess_input.style.borderColor = color;

    setMessage(msg, color);

    const play_again = document.createElement('input');

    play_again.setAttribute('type', 'submit');

    play_again.value = 'Play Again';

    play_again.className = 'play-again';

    game.insertBefore(play_again, message);

    guess_btn.remove();
};

// cheat code: press 'w' to show the correct random number in the guess input field
document.addEventListener('keydown', e => {
    if(e.keyCode === 87) guess_input.value = winning_num;
});

function setMessage(msg, color) {
    message.textContent = msg;

    message.style.color = color;
};

// generate a random winning number for each round (after user wins or loses)
function getRandomNum(min, max) {return Math.floor(Math.random() * (max - min + 1) + min);};