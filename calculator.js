
const input = document.getElementById('input');
const number = document.querySelectorAll('.numbers div');
const operator = document.querySelectorAll('.operators div');
const answer = document.getElementById('answer');
const allclear = document.getElementById('allclear');
const answerDisplayed = false;

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {

        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        if (answerDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (answerDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            answerDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            answerDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }

    });
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {

        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }

    });
}

answer.addEventListener("click", function () {
    let inputString = input.innerHTML;
    let numbers = inputString.split(/\+|\-|\×|\÷/g);
    let operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");

    let add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }
    let subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }
    let multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    let divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    input.innerHTML = numbers[0];

    answerDisplayed = true;
});

allclear.addEventListener("click", function () {
    input.innerHTML = "";
})

