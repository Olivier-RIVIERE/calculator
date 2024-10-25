const display = document.getElementById("display");

const appendToDisplay = (input) => {
  if (input === "C") {
    display.value = ""; 
  } else if (input === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Erreur";
    }
  } else {
    display.value += input; 
  }
};
