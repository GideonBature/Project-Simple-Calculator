const buttons = document.querySelectorAll(".btn-operator, .btn-number");
const display = document.querySelector(".display");
let displayData = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('data-set');
        
        displayData += buttonValue;

        display.textContent = displayData;
    })
})