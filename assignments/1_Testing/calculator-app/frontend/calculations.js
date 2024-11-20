function add(a, b) {
    return {result: a + b};
}

function substract(a, b) {
    return {result: a - b};
}


function multiply(a, b) {
    return {result: a * b};
}

function divide(a, b) {
    if (b === 0) {
        return {error: 'Cannot divide by zero'};
    }
    return {result: a / b};
}

export {
    add,
    substract,
    multiply,
    divide
};
