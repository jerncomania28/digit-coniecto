/* Players should guess a number between the minimum and maximum values

Player has a defined number of trials

Notify the player on the number of trials screenLeft

If the player loses, they should be notified on the correct answer

Let the player play again */



// Game values
let min = 1,
	max = 10,
	winningDig = getRandomNum(min, max),
	guessesLeft = 3;

// UI Elements

const game = document.querySelector('.game'),
	minDig = document.querySelector('.min-dig'),
	maxDig = document.querySelector('.max-dig'),
	guessBtn = document.querySelector('#guess-value'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');


// Assign minimum and maximum values

minDig.textContent = min;
maxDig.textContent = max;


// Play Again event listener

game.addEventListener('mousedown', function (e) {

	if (e.target.className === 'play-again') {

		window.location.reload();

	}

});

// Listen for the guess button

guessBtn.addEventListener('click', function () {

	let guess = parseInt(guessInput.value);

	// Validate input

	if (isNaN(guess) || guess < min || guess > max) {

		setMessage(`Please enter a number between ${min} and ${max}`, 'red');

	}

	// Check if player wins
	if (guess === winningDig) {

		gameOver(true, `You won! The random number was ${winningDig}`);

	} else {

		//Game over
		if (guessesLeft === 0) {

			gameOver(false, `Game over! You've lost. The correct number was ${winningDig}`);

		} else {

			// Game continues when answer is wrong

			//If guess is wrong
			guessesLeft -= 1;

			// Player losing notification
			setMessage(`${guess} is wrong! You have ${guessesLeft} chances left`, 'orange');


		}

	}

});


// Game over function

function gameOver(won, msg) {

	let colour;
	won === true ? colour = 'green' : 'red';

	//Disable input field
	guessInput.disabled = true;

	//Change border colour
	guessInput.style.borderColor = colour;

	//Change message colour
	message.style.color = colour;

	// Player winning notification
	setMessage(msg);



	// Play again
	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again';

}


// Get Winning Number

function getRandomNum(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1) + min);

}


// Set Message function

function setMessage(msg, colour) {

	message.style.color = colour;
	message.textContent = msg;


}