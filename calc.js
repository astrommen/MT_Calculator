var resetCalc = () => {
  document.getElementById('content').reset();
}

let calc = () => {

  var num1 = parseInt(document.getElementById('first-number').value);
  var num2 = parseInt(document.getElementById('second-number').value);
  var operator = document.querySelector('input[name="operator"]:checked').value;
  let result = 0;

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;

    case "subtract":
      result = num1 - num2;
      break;
    
  
    case "multiply":
      result = num1 * num2;
      break;
  
    case "divide":
      result = num1 / num2;
      break;
  }

  resultText= document.getElementById('result-text');
  resultText.innerHTML = "The result of " + num1 + " and " + num2 + " is " + result;
}