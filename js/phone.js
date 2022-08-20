/*
1.add event listener to the case plus button 
2.get the valu inside the case number field(input field)
3.convert the number to an integer
4.calculate the new case number 
5.set the value to the case number field
*/
function updatePhnNumber(isIncrease) {
    const inputField = document.getElementById('phn-input-field-control');
    const inputFieldValueString = inputField.value;
    const priviusInputFieldValue = parseInt(inputFieldValueString);

    let newInputValue;

    if (isIncrease === true) {
        newInputValue = priviusInputFieldValue + 1;
    } else {
        newInputValue = priviusInputFieldValue - 1;
    }

    inputField.value = newInputValue;

    return newInputValue;
};

function updatePhnTotalprice(newCaseUpdate) {

    const newTotalPrice = newCaseUpdate * 1219;
    const totalPrice = document.getElementById('phn-total-price');
    totalPrice.innerText = newTotalPrice;
};




document.getElementById('btn-phn-plus').addEventListener('click', function () {

    const newCaseUpdate = updatePhnNumber(true);
    updatePhnTotalprice(newCaseUpdate);


    calculateSumTotal();

})

document.getElementById('btn-phn-minus').addEventListener('click', function () {

    const newCaseUpdate = updatePhnNumber(false);
    updatePhnTotalprice(newCaseUpdate);

    // // calculate total ----
    // const currentPhonePrice = getTextElementValueById('phn-total-price');
    // const currentCasePrice = getTextElementValueById('total-price');
    // const currentSubTital = currentPhonePrice + currentCasePrice

    // const currentTotalElement = document.getElementById('sub-total');
    // currentTotalElement.innerText = currentSubTital;

    calculateSumTotal();

})
