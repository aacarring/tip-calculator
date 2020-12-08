const priceInput = document.querySelector('.choices input');
const buttons = document.querySelectorAll('.choices button');
const total = document.querySelector('.total');

function calculateTip() {
    total.textContent = "Total: ";

    let priceInputValue = parseFloat(priceInput.value);
    let tipPercentage = parseFloat(this.textContent) / 100;
    let totalCost = 0;

    if (priceInputValue === 0 || priceInputValue === "" || isNaN(priceInputValue)) {
        alert("Please enter a number in the 'Price' field.");
        return "";
    }

    totalCost = parseFloat(priceInputValue + (priceInputValue * tipPercentage));
    total.textContent += '$' + totalCost.toFixed(2).toString();
}

buttons.forEach(button => button.addEventListener('click', calculateTip));