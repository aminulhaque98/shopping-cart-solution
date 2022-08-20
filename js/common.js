function getTextElementValueById(elementId) {
    const currentTotalElement = document.getElementById(elementId);
    const currentTotalElementString = currentTotalElement.innerText;
    const currentTotalValue = parseInt(currentTotalElementString);
    return currentTotalValue;

};

function setTextElementValueById(elementId, value) {
    const currentTotalElement = document.getElementById(elementId);
    currentTotalElement.innerText = value;

}

function calculateSumTotal() {
    // calculate total ----
    const currentPhonePrice = getTextElementValueById('phn-total-price');
    const currentCasePrice = getTextElementValueById('total-price');

    const currentSubTital = currentPhonePrice + currentCasePrice
    setTextElementValueById('sub-total', currentSubTital);

    // calculate tax ----
    const taxAmountString = (currentSubTital * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);


    // const TaxAmountField = document.getElementById('tax-amount');
    // TaxAmountField.innerText = taxAmount;

    const finalValue = currentSubTital + taxAmount;
    setTextElementValueById('final-total', finalValue);

}