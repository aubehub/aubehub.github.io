let runningTotal = 0; //valor constante numérico de tipo number
let buffer = "0"; //entre comillas valores constantes de texto tipo string
let previousOperator = null; //representa el último operador pulsado

const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(value)){
        //This is not a number
        handleSymbol(value);
    } else{
        //This is a number
        handleNumber(value);
    }
  screen.innerText = buffer;    
}

function handleSymbol (symbol){ 
    switch (symbol) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "=":
            if (previousOperator === null){
                //you need two numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1){
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length -1);
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
                handleMath(symbol);
                break;
    }
}

function handleMath(symbol){
    if (buffer === "0") {
        //do nothing
        return; // to get the function to end
    }
    const intBuffer = parseInt(buffer); //convertimos buffer a numero en vez de string // tb se puede expresar const infBuffer = +buffer;

    if (runningTotal === 0){
        runningTotal  = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = "0";
}

function flushOperation (intBuffer){
    if (previousOperator === "+") {
        runningTotal += intBuffer;  
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function handleNumber (numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString; // buffer = buffer + numberString
    }
}
 
function init () {
    document.querySelector(".calc-buttons")
        .addEventListener("click", function (event){
            buttonClick(event.target.innerText);
        }) // cuando ocurra el evento click, ejecuta la funcion de recuperar el contenido de calc button?
}
 
init();