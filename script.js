let firstOperand;
let secondOperand;
let operation;

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(operator, firstOperand, secondOperand){
    switch(operator){
        case "+":
            add(firstOperand, secondOperand);
            break;
        case "-":
            subtract(firstOperand, secondOperand);
            break;
        case "*":
            multiply(firstOperand, secondOperand);
            break;
        case "/":
            divide(firstOperand, secondOperand);
            break;
    }
}