function append(value) {
    const display = document.getElementById("display");
    const lastChar = display.value.slice(-1);

    const operadores = ["+", "-", "*", "/", "."];

    
    if (operadores.includes(value) && operadores.includes(lastChar)) {
        return; 
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
