document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getElementById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;
    setTextElementValueById('withdraw-total',newWithdrawTotal);

    const previousBalanceTotal = getElementById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueById('balance-total',newBalanceTotal);
})