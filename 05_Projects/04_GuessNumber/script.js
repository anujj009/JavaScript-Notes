let randomNum = parseInt(Math.random() *100 +1);

let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHi');
let startOver= document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    }else if(guess <1){
        alert('Please enter a valid number');
    }else if (guess>100) {
        alert('Please enter a number less than 100');
    }else{
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Right Guess`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage('Number is too low')
    } else if (guess > randomNum ) {
        displayMessage('Number is too high')
    }  
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNum = parseInt(Math.random() *100 +1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}


