
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDeposit = getElementById('deposit-total');

    const newDepositTotal= newDepositAmount + previousDeposit;
    //set deposit total value
    setTextElementValueById('deposit-total',newDepositTotal);
    //get previous balance using the function
    const previousBalanceTotal=getElementById('balance-total');
    const newBalanceTotal= previousBalanceTotal+newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})