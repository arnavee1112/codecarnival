let display = document.getElementById("display");
let stepsDiv = document.getElementById("steps");
let currentExpression = "";

function appendNumber(num) {
  currentExpression += num;
  display.value = currentExpression;
}

function appendOperator(op) {
  currentExpression += " " + op + " ";
  display.value = currentExpression;
}

function clearDisplay() {
  currentExpression = "";
  display.value = "";
  stepsDiv.innerText = "";
}

function backspace() {
  currentExpression = currentExpression.trim().slice(0, -1);
  display.value = currentExpression;
}

function calculate() {
  try {
    let result = eval(currentExpression);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

function showSteps() {
  try {
    const tokens = currentExpression.trim().split(" ");
    if (tokens.length === 3) {
      const [num1, operator, num2] = tokens;
      let steps = "";
      switch (operator) {
        case "+":
          steps = `${num1} + ${num2} = ${parseFloat(num1)} + ${parseFloat(num2)} = ${parseFloat(num1) + parseFloat(num2)}`;
          break;
        case "-":
          steps = `${num1} - ${num2} = ${parseFloat(num1)} - ${parseFloat(num2)} = ${parseFloat(num1) - parseFloat(num2)}`;
          break;
        case "*":
          steps = `${num1} × ${num2} = ${parseFloat(num1)} × ${parseFloat(num2)} = ${parseFloat(num1) * parseFloat(num2)}`;
          break;
        case "/":
          steps = `${num1} ÷ ${num2} = ${parseFloat(num1)} ÷ ${parseFloat(num2)} = ${parseFloat(num1) / parseFloat(num2)}`;
          break;
        case "%":
          steps = `${num1} % ${num2} = ${parseFloat(num1)} % ${parseFloat(num2)} = ${parseFloat(num1) % parseFloat(num2)}`;
          break;
        default:
          steps = "Operator not supported for step-by-step.";
      }
      stepsDiv.innerText = steps;
    } else {
      stepsDiv.innerText = "Step-by-step only works for simple 2-number operations.";
    }
  } catch (e) {
    stepsDiv.innerText = "Error in parsing steps.";
  }
}
