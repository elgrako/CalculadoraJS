const screen = document.querySelector('.screen');
const buttons = Array.from(document.querySelectorAll('.btn'));
const operators = Array.from(document.querySelectorAll('.operator'));
const limit = 100000000 * 1000000000000;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === '=') {
      calculateResult();
    } else if (button.value === 'C') {
      clearScreen();
    } else {
      screen.value += button.value;
    }
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    handleOperatorClick(operator.value);
  });
});

document.querySelector('.btn[value="="]').addEventListener('click', () => {
  calculateResult();
});

document.querySelector('.btn[value="C"]').addEventListener('click', () => {
  clearScreen();
});

function handleOperatorClick(operator) {
  screen.value += operator;
}

function calculateResult() {
  try {
    const result = eval(screen.value);
    if (result > limit) {
      window.alert('El número excede el límite permitido.');
      clearScreen();
    } else {
      screen.value = result.toString();
    }
  } catch (error) {
    console.log('Error:', error.message);
    window.alert('Error de cálculo');
  }
}

function clearScreen() {
  screen.value = '';
}
