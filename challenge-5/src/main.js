import "./style.css";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = null;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (value >= "0" && value <= "9") {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = null;
      display.textContent = "0";
    } else if (value === ".") {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        display.textContent = currentInput;
      }
    } else if (value === "=") {
      if (operator && previousInput !== "") {
        const result = calculate(
          parseFloat(previousInput),
          parseFloat(currentInput),
          operator
        );
        display.textContent = result;
        previousInput = result;
        currentInput = "";
      }
    } else {
      if (currentInput === "") return;
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    }
  });
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Error" : num1 / num2;
    default:
      return "NaN";
  }
}
