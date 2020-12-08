const priceInput = document.querySelector('.choices input');
const buttons = document.querySelectorAll('.choices button');
const total = document.querySelector('.total');

function calculateTip() {
    let priceInputValue = parseFloat(priceInput.value);
    let tipPercentage = parseFloat(this.textContent) / 100;
    let totalCost = 0;

    totalCost = parseFloat(priceInputValue + (priceInputValue * tipPercentage));
    total.textContent += '$' + totalCost.toString();
}

buttons.forEach(button => button.addEventListener('click', calculateTip));