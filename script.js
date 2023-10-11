let num = randomNumber();
const inputField = document.getElementById('guessField');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');
const output = document.getElementById('result');
const triesLeft = document.getElementById('tries');
const resetButton = document.getElementById('reset');
const itemList = document.getElementById('log-list');

submitButton.addEventListener('click', checkNumber);
clearButton.addEventListener('click', clear);
resetButton.addEventListener('click', reset);

function checkNumber() { 
    let inputNumber = parseInt(inputField.value);

    if (inputNumber === num) {
        output.textContent = "You won!";
    } else {
        let distance = Math.abs(inputNumber - num);
        if (distance > 55) {
            output.textContent = "very cold";
        } else if (distance <= 55 && distance >= 41) {
            output.textContent = "cold";
        } else if (distance <= 40 && distance >= 31) {
            output.textContent = "cool";
        } else if (distance <= 30 && distance >= 21) {
            output.textContent = "warm";
        } else if (distance <= 20 && distance >= 16) {
            output.textContent = "very warm";
        } else if (distance <= 15 && distance >= 9) {
            output.textContent = "hot";
        } else {
            output.textContent = "very hot";
        }  
        updateTriesLeft();
    }
    appendToLogger();
}

function updateTriesLeft() {
    let triesLeftValue = parseInt(triesLeft.textContent);
    triesLeftValue--;
    triesLeft.textContent = triesLeftValue;
    if (triesLeftValue == 0) {
        output.textContent = "you lost!";
        submitButton.removeEventListener('click', checkNumber);
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 99 + 1);
}

function increment(n) {
    inputField.value = parseInt(inputField.value) + n;
}

function clear() {
    inputField.value = "";
}

function reset() {
    num = randomNumber();
    triesLeft.textContent = 10;
    submitButton.addEventListener('click', checkNumber);
    output.textContent = "";
    inputField.value = "";
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

function appendToLogger() {
    const itemText = inputField.value;

    if (itemText.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        itemList.appendChild(listItem);
        inputField.value = "";
    }
}


