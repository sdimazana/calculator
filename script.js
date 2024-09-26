let firstOperand;
let secondOperand;
let operation;
let previousOperation;
let result;

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
            return add(firstOperand, secondOperand);
        case "-":
            return subtract(firstOperand, secondOperand);
        case "×":
            return multiply(firstOperand, secondOperand);
        case "➗":
            return divide(firstOperand, secondOperand);
    }
}

const equalButton = document.getElementById("equal-sign");
const display = document.getElementById("display");
const digitButtons = document.getElementById("digit-buttons").querySelectorAll("button");
const operationButtons = document.getElementById("operations-buttons").querySelectorAll("button");
const miscButtons = document.getElementById("misc-buttons").querySelectorAll("button");
let decimalButton = document.getElementById("decimal");
let clearDisplayFlag = false;
let operandsArray = [];
let operationArray = [];

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operationButtons.forEach((opButton) => {
            opButton.removeAttribute("style");
        });

        if(clearDisplayFlag){
            display.textContent = "";
            clearDisplayFlag = false;
        }
    
        if(display.textContent.includes(".")){
            decimalButton.disabled = true;
            decimalButton.style.filter = "brightness(0.75)";
        }else{
            decimalButton.disabled = false;
            decimalButton.removeAttribute("style");
        }

        display.textContent += button.textContent;

    });
});

// operationButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         // Highlight the operation buttons in the UI when clicked
//         if(button.textContent !== "=") button.style.filter = "brightness(1.16)";
//         decimalButton.disabled = false;
//         decimalButton.removeAttribute("style");
//         clearDisplayFlag = true;

//         operandsArray.splice(operandsArray.length, 0, Number(display.textContent));
//         operationArray.splice(operationArray.length, 0, button.textContent);
    
//         if(operandsArray.length >= 2 && operationArray.length >= 2){
//             firstOperand = operandsArray[operandsArray.length-2];
//             secondOperand = operandsArray[operandsArray.length-1]
//             operation = operationArray[operationArray.length-2]

//             if(secondOperand === 0 && operation === "➗"){
//                 display.textContent = "JAIL";
//             }else{
//                 result = operate(operation, firstOperand, secondOperand);
//             }
//             // if(result%1 !== 0) result = result.toFixed(2);
//             display.textContent = result; 
//             operandsArray.splice(operandsArray.length, 0, Number(result));
//         }
        
//     });
// });

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Highlight the operation buttons in the UI when clicked
        if(button.textContent !== "=") button.style.filter = "brightness(1.16)";
        decimalButton.disabled = false;
        decimalButton.removeAttribute("style");
        clearDisplayFlag = true;

        operandsArray.splice(operandsArray.length, 0, Number(display.textContent));

        // As long as not equal sign, add operation symbols to the array
        if(button.textContent !== "="){
            operationArray.splice(operationArray.length, 0, button.textContent);

            // If there's only one element in the array, don't use operationArray.length-2
            if(operationArray.length < 2){
                operation = operationArray[operationArray.length-1];
            }else{
                operation = operationArray[operationArray.length-2];
            }

            // If there's only one element in the array, don't use operandArray.length-2
            if(operandsArray.length < 2){
                firstOperand = operandsArray[operandsArray.length-1];
            }else{
                firstOperand = operandsArray[operandsArray.length-2];
                secondOperand = operandsArray[operandsArray.length-1];
                result = operate(operation, firstOperand, secondOperand);
                display.textContent = result;
                operandsArray.splice(operandsArray.length, 0, Number(result));

            }
        }else{
            firstOperand = operandsArray[operandsArray.length-2];
            secondOperand = operandsArray[operandsArray.length-1];
            operation = operationArray[operationArray.length-1];
            result = operate(operation, firstOperand, secondOperand);
            display.textContent = result;
            operandsArray = [];
            operationArray = [];
        }
        
    });
});

miscButtons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.innerText){
            case "AC":
                firstOperand = 0;
                secondOperand = 0;
                operation = "";
                operandsArray = [];
                operationArray = [];
                display.textContent = "";
                clearDisplayFlag = false;
                equalSignFlag = false;
                break;
            case "+/-":
                display.textContent = `-${display.textContent}`;
                break;
            case "%":
                let currentValue = +display.textContent;
                let percentage = currentValue/100;
                display.textContent = `${percentage}`;
                break;
        }
    });
});

document.addEventListener("keyup", (event) =>{
    console.log(event.key);
    if(event.key === "Backspace"){
        let displayContent = display.textContent.split("");
        displayContent.pop();
        display.textContent = displayContent.join("");
    }else if(event.key >= 0 && event.key <= 9){
        display.textContent += event.key;
    }else if(event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "="){
        // Highlight the operation buttons in the UI when clicked
        if(event.key !== "=") button.style.filter = "brightness(1.16)";
        decimalButton.disabled = false;
        decimalButton.removeAttribute("style");
        clearDisplayFlag = true;

        
    }
});


















