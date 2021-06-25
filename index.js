let randomNumber = Math.floor(Math.random() * 101);

let guess = document.querySelector('.Guesses');
let lastRes = document.querySelector('.LastResult');
let lowOrHi = document.querySelector('.LowOrHigh');

const inputField = document.getElementById('inputGame');
let countGuess = 1;
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Начать заново';

function checkNumber() {
    let number = inputField.value ? Math.floor(Number(inputField.value)) : 0;

    if (number > 100 || number < 0) {
        lastRes.textContent = 'Мы как бы загадили число от 0 до 100';
        lastRes.style.backgroundColor = 'yellow';
        return ;
    }

    if (countGuess === 1) {
        guess.textContent = 'Предыдущие попытки: ';
    }

    if (number !== randomNumber) {
        lastRes.style.backgroundColor = 'red';
        lastRes.textContent = 'Мимо, попробуйте ещё';
    }

    guess.textContent += number + ' ';

    if (number === randomNumber){
        lastRes.textContent = 'Поздравляем, вы угадали';
        lastRes.style.backgroundColor = 'green';
        restartGame();
    } else if (countGuess === 10) {
        lastRes.textContent = 'GAME OVER';
        restartGame();
    } else {
        if (number > randomNumber){
            lowOrHi.textContent = `Ваше число: ${number} - больше загаданного`;
            
        } else {
            lowOrHi.textContent = `Ваше число: ${number} - меньше загаданного`;
        }
    }
    countGuess++;
    inputField.value = '';
    inputField.focus();
}

function restartGame() {
     inputField.disabled = true;
     sendButton.disabled = true;
     lowOrHi.textContent = '';
     lowOrHi.appendChild(resetButton);
}

function onClickRestart() {
    countGuess = 1;
    guess.textContent = '';
    lastRes.textContent = '';
    lastRes.style.backgroundColor = 'white';
    inputField.disabled = false;
    sendButton.disabled = false;
    randomNumber = Math.floor(Math.random() * 101);
    this.remove();
}

const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', checkNumber);
resetButton.addEventListener('click', onClickRestart);