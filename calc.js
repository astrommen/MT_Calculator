// Todo
// grab all number values from text input
// grab value of operator value from radio btns
// 
var resetCalc = () => {
  document.getElementById('content').reset();
}

let calc = () => {

  var num1 = parseInt(document.getElementById('first-number').value);
  var num2 = parseInt(document.getElementById('second-number').value);
  var operator = document.querySelector('input[name="operator"]:checked').value;
  let result = 0;

  if (operator === "add") {
    result = num1 + num2;
  }

  else if (operator === "subtract") {
    result = num1 - num2;
  }

  else if (operator === "multiply") {
    result = num1 * num2;
  }

  else if (operator === "divide") {
    result = num1 / num2;
  }

  console.log(result);
  // let resultTest = document.getElementByID('result-text')
  // resultTest.innerhtml = "The result of " + num1 + "and " + num2 + "= " + result;
}