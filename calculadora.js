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

    
    if (display.value === "Error") {
        return;
    }

    
    if (display.value.includes("/0")) {
        display.value = "Error";
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}


document.addEventListener("keydown", function (event) {
    const display = document.getElementById("display");

    if (event.key === "Enter") {

        if (display.value === "Error") {
            event.preventDefault();
            return;
        }

        calculate();
    }
});
