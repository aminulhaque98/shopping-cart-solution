/*
1.add event listener to the case plus button 
2.get the valu inside the case number field(input field)
3.convert the number to an integer
4.calculate the new case number 
5.set the value to the case number field
*/
function updateCaseNumber(isIncrease) {
    const inputField = document.getElementById('input-field-control');
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

function updateCaseTotalprice(newCaseUpdate) {

    const newTotalPrice = newCaseUpdate * 59;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = newTotalPrice;


}


document.getElementById('btn-plus').addEventListener('click', function () {

    const newCaseUpdate = updateCaseNumber(true);

    updateCaseTotalprice(newCaseUpdate);


})


document.getElementById('btn-minus').addEventListener('click', function () {
    const newCaseUpdate = updateCaseNumber(false);

    updateCaseTotalprice(newCaseUpdate);


})
