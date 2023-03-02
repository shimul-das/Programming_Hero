//add event handler
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //console.log('jfhhtgffh')
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //withdraw
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal ;
    withdrawTotalElement .innerText=currentWithdrawTotal;

    //from main balance

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalStrIng = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStrIng);
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText=currentBalanceTotal;
    withdrawField.value='';
    
})