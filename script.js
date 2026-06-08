let display = document.getElementById("display");
let calc = document.getElementById("calc");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function changeTheme(theme) {
  calc.className = "calculator";
  if (theme) {
    calc.classList.add(theme);
  }
}