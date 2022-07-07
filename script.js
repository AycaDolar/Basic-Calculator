num1 = 0;
operator = "";

function onButtonClick(button) {
  document.getElementById("result").value += button.value;
}
function onOperatorButtonClick(operatorbutton) {
  num1 = document.getElementById("result").value;
  operator = operatorbutton.value;
  document.getElementById("result").value = "";
}

function calculate() {
  switch (operator) {
    case "+":
      document.getElementById("result").value =
        parseInt(num1) + parseInt(document.getElementById("result").value);
      break;

    case "-":
      document.getElementById("result").value =
        parseInt(num1) - parseInt(document.getElementById("result").value);
      break;

    case "/":
      document.getElementById("result").value =
        parseInt(num1) / parseInt(document.getElementById("result").value);
      break;

    case "*":
      document.getElementById("result").value =
        parseInt(num1) * parseInt(document.getElementById("result").value);
      break;
  }
}
