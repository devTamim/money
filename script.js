
function expenses(inputField) {

    // clearError(inputField)

    const input = document.getElementById(inputField).value;

    // if (input == '') error(inputField, 'Empty field');
    // if (isNaN(input)) error(inputField, 'Not a number');
    // if (parseFloat(input) < 0) error(inputField, 'Negative number');


    return parseFloat(input);

}

const clearError = (id) => {
    document.getElementById(id).classList.remove('is-invalid');
    document.getElementById(id + '-error').innerText = '';
}

const error = (id, message) => {
    document.getElementById(id).classList.add('is-invalid');
    document.getElementById(id + '-error').innerText = message;
    return false;

}

document.getElementById('calculate').addEventListener('click', function () {

    const foodvalue = expenses('food');
    const rentvalue = expenses('rent');
    const clothevalue = expenses('clothe');


    let totalValue = foodvalue + rentvalue + clothevalue;

    totalValue = isNaN(totalValue) ? 0 : totalValue;


    const expenseBtn = document.getElementById('expense');

    const incomeValue = expenses('income');
    const balance = incomeValue - totalValue;
    if (balance < 0) {

        return false;
    }
    if (isNaN(balance)) {

        return false;
    }
    const balanceValue = document.getElementById('balance');
    balanceValue.innerHTML = balance;
    expenseBtn.innerHTML = totalValue;
    // const remainingBalance = document.getElementById('remainingBalance');
    // remainingBalance.innerHTML = balance;

})

document.getElementById('savinng').addEventListener('click', function () {
    const savingValue = expenses('savingField');
    const incomeValue = expenses('income');
    const perseValue = (incomeValue / 100) * savingValue

    const savingAmount = document.getElementById('savingAmount');

    savingAmount.innerHTML = perseValue;
    const foodvalue = expenses('food');
    const rentvalue = expenses('rent');
    const clothevalue = expenses('clothe');


    const totalValue = foodvalue + rentvalue + clothevalue;
    const balance = incomeValue - totalValue;

    const remaining = document.getElementById('remainingBalance');
    const remainingBalance = balance - perseValue;

    remaining.innerHTML = remainingBalance;

});
// const income = document.querySelector('#income');
// const food = document.querySelector('#food');
// const rent = document.querySelector('#rent');
// const clothe = document.querySelector('#clothe');
// const form = document.querySelector('#money');

// form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

// });
