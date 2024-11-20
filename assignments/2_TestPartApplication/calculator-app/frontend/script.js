function calculate(operation) {
  const a = parseFloat(document.getElementById('inputA').value);
  const b = parseFloat(document.getElementById('inputB').value);

  fetch(`http://localhost:3000/operations/${operation}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ a, b })
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      document.getElementById('result').value = 'Error: ' + data.error;
    } else {
      let result;
      if(operation === 'divide') result = a + operation + b + '=' + data.result;
      else if (operation === 'multiply') result = a + '*' + b + '=' + data.result;
      else if (operation === 'subtract') result = a + '-' + b + '=' + data.result;
      else if (operation === 'add') result = a + '+' + b + '=' + data.result;

      document.getElementById('result').value = result;
    }
  });
}
