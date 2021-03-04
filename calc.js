// Todo
// grab all number values from text input
// grab value of operator value from radio btns
// 
var getValue = ()=>{

  var first_number = document.getElementById('first-number').value;
  var second_number = document.getElementById('second-number').value;
  var operator = document.querySelector('input[name="operator"]:checked').value;
  console.log(first_number, second_number, operator);

}

var resetCalc = ()=> {
  document.getElementById('content').reset();
}