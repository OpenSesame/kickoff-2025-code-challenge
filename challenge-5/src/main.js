import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".button");
  let lastOperation = false;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (value === "clear") {
        display.value = "";
      } else if (value === "=") {
        try {
          display.value = eval(display.value);
          if (display.value === "Infinity") {
            display.value = "Error";
          }
        } catch (error) {
          display.value = "Invalid";
        }
        lastOperation = true;
      } else if (["+", "-", "*", "/"].includes(value)) {
        if (display.value === "") {
          display.value += value;
        } else if (!isNaN(display.value.slice(-1))) {
          display.value += value;
        }
        lastOperation = false;
      } else {
        if (lastOperation) {
          display.value = "";
          lastOperation = false;
        }
        if (display.value.length > 10) {
          display.value = "Error";
        } else {
          display.value += value;
        }
      }
    });
  });
});
