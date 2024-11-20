import {add, substract, multiply, divide} from "./calculations.js";

function calculate(operation, a, b) {
    let data;
    switch (operation) {
        case '+':
            data = add(a, b);
            break;
        case '-':
            data = substract(a, b);
            break;
        case '*':
            data = multiply(a, b);
            break;
        case '/':
            data = divide(a, b);
            break;
        default:
            data = {error: 'Invalid operation'};
    }

    if (data.error) {
        document.getElementById('result').value = 'Error: ' + data.error;
    } else {
        document.getElementById('result').value = a + operation + b + '=' +  data.result;
    }
}

const buttons = document.getElementById('buttons');
buttons.addEventListener('click', (event) => {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    calculate(event.target.id, a, b);
});
