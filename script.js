//This calculator only takes numbers, `+`, `-`, `*`, `/`, `=`, and the `c` key as valid inputs

//Prevents the user from inputting more than one operator

//When the user presses the `=` key, evaluate the expression that they've entered

//When the user presses the `c` key, clear the expression and what's displayed to the webpage

//It is highly recommended you use functions to section out your logic

let validInputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "="]
let operatorsPlus = ["+", "-", "*", "/", "="]
let operators = ["+", "-", "*", "/"]
let integers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

let firstNum = null
let secondNum = null
let operator = ""

let current = [];
let result;

function reset(){
    firstNum = null
    secondNum = null
    operator = ""
    current = [];
}

function resetScreen(){
    document.getElementById("first").innerText = "First Number"
    document.getElementById("second").innerText = "Second Number"
    document.getElementById("operator").innerText = "Operator"
    document.getElementById("result").innerText = "Result"
}

document.onkeypress = event => {
    let input = event.key;
    console.log(input)
    if (!validInputs.includes(input)) {
        document.getElementById("warn").innerText = "Please enter a valid number or operator"
    }
    else if (input === "=") {
        console.log(current)
        console.log(firstNum)
        if (!firstNum && current.length === 0) {
            document.getElementById("warn").innerText = "Please enter a valid number"
        }
        else if (firstNum && current.length === 0) {
            console.log("second test")
            document.getElementById("warn").innerText = "Please enter a valid number"
        }
        else if (!firstNum && current.length > 0) {
            document.getElementById("warn").innerText = "Please enter a valid number or operator"
        }
        else if(firstNum && operator && current.length > 0){
            document.getElementById("warn").innerText = ""
            secondNum = parseInt(current.join(""));
            if(operator === "+"){
                result = firstNum + secondNum
                document.getElementById("result").innerText = result
                reset()
            }
            else if(operator === "-"){
                result = firstNum - secondNum
                document.getElementById("result").innerText = result
                reset()
            }
            else if(operator === "*"){
                result = firstNum * secondNum
                document.getElementById("result").innerText = result
                reset()
            }
            else if(operator === "/"){
                result = firstNum / secondNum
                document.getElementById("result").innerText = result
                reset()
            }
        }
    }
    else if (!firstNum && integers.includes(input)) {
        if(result){
            result = null
            resetScreen();
        }
        document.getElementById("warn").innerText = ""
        current.push(input)
        document.getElementById("first").innerText = current.join("")
    }
    else if (operators.includes(input)) {
        if (!firstNum && current.length === 0) {
            document.getElementById("warn").innerText = "Please enter a valid number"
        }
        else if (!firstNum && current.length > 0) {
            document.getElementById("warn").innerText = ""
            firstNum = parseInt(current.join(""));
            current = [];
            operator = input
            document.getElementById("operator").innerText = operator
        }
        else if (firstNum){
            document.getElementById("warn").innerText = "Please enter a valid input"
        }
    }
    else if (firstNum && integers.includes(input)) {
        document.getElementById("warn").innerText = ""
        current.push(input)
        document.getElementById("second").innerText = current.join("")
    }
}