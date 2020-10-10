//This calculator only takes numbers, `+`, `-`, `*`, `/`, `=`, and the `c` key as valid inputs

//Prevents the user from inputting more than one operator

//When the user presses the `=` key, evaluate the expression that they've entered

//When the user presses the `c` key, clear the expression and what's displayed to the webpage

//It is highly recommended you use functions to section out your logic

let validInputs = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","="]
let operatorsPlus = ["+","-","*","/","="]
let operators = ["+","-","*","/"]
let integers = ["1","2","3","4","5","6","7","8","9","0"]

let firstNum = null
let secondNum = null
let operator = ""

let current = [];

document.onkeypress = event=>{
    let input = event.key;
    if(!validInputs.includes(input)){
        document.getElementById("first").innerText = "Please enter a valid number or operator"
    }
    else if(input === "="){
        if(!firstNum && !current){
            document.getElementById("first").innerText = "Please enter a valid number"
        }
        else if(firstNum && !current){
            document.getElementById("second").innerText = "Please enter a valid number"
        }
        else if(!firstNum && current){
            document.getElementById("operator").innerText = "Please enter a valid number or operator"
        }
        // else if(firstNum && operator && !current){

        // }
    }
    else if(!firstNum && integers.includes(input)){
            current.push(input)
            document.getElementById("first").innerText = current.join("")
    }
    else if(operators.includes(input)){
        if(!firstNum && !current){
            document.getElementById("first").innerText = "Please enter a valid number"
        }
        else if(!firstNum && current){
            firstNum = parseInt(current.join(""));
            current = [];
            operator = input
            document.getElementById("operator").innerText = operator
        }
    }
    // else if(!firstNum && !integers.includes(input)){
    //     if(operatorsPlus.includes(input)){
    //         document.getElementById("first").innerText = "Please enter a number first"
    //     }
    // }


}