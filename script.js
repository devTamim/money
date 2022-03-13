
function expenses(inputField) {
    const foodBtn = document.getElementById(inputField);
    const food = parseFloat(foodBtn.value);

    return food;





}

document.getElementById('calculate').addEventListener('click', function () {

    const foodvalue = expenses('food');
    const rentvalue = expenses('rent');
    const clothevalue = expenses('clothe');


    const totalValue = foodvalue + rentvalue + clothevalue;
    const expenseBtn = document.getElementById('expense');
    expenseBtn.innerHTML = totalValue;

    const incomeValue = expenses('income');
    const balance = incomeValue - totalValue;
    const balanceValue = document.getElementById('balance');
    balanceValue.innerHTML = balance;
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
