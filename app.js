console.log('hello world');

// Primitive data type

//  data type Number
// 5
// data type String
// 'banana'
// "banana"
// `banana` this one allows for String Interpolation with ${}
// data type Boolean
// true

let maxNumber = 10
let targetNumber = Math.ceil(Math.random() * maxNumber)
let outputElm = document.getElementById('output')
let userInputElm = document.getElementById('user-input')

function checkGuess(guess) {

    if (guess == targetNumber) {
        // console.log(`Congratulations! You've guessed it! ${guess} was right`);
        outputElm.innerHTML = `<p>Congratulations! You've guessed it! ${guess} was right</p>`
        userInputElm.innerHTML = `<button onclick='resetGame()'>Would you like to play a game?</button>`
    } else if (guess > targetNumber) {
        // console.log(`Dang ${guess} is way to big of a number`);
        outputElm.innerHTML += `<p>Dang ${guess} is way to big of a number</p>`
    } else {
        // console.log(`${guess} is too low, try again`);
        outputElm.innerHTML += `<p>${guess} is too low, try again</p>`
    }
}


function drawButtons() {
    // console.log(userInputElm.innerHTML);
    // userInputElm.innerHTML = `<button>Banana</button>`
    userInputElm.innerHTML = ``

    for (let button = 1; button <= maxNumber; button += 1) {
        userInputElm.innerHTML += `<button onclick='checkGuess(${button})' >${button}</button>`
    }

}

function resetGame() {
    targetNumber = Math.ceil(Math.random() * maxNumber)
    outputElm.innerHTML = `<p>Guess a number!</p>`
    drawButtons()
}

drawButtons()