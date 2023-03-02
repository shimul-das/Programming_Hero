document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('deposit button clicked')
    //get deposit amount from deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountStrIng = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountStrIng);
    console.log(newDepositAmount,typeof(newDepositAmount));
    //step 3 get total amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    console.log( previousDepositTotalString);
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(previousDepositTotal  ,typeof(previousDepositTotal ));
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    console.log(currentDepositTotal ,typeof(currentDepositTotal));
    depositTotalElement.innerText=currentDepositTotal;
    //Main balance add
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalStrIng = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStrIng);
    console.log(previousBalanceTotal,typeof(previousBalanceTotal));
    //step 6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set balance Total
    balanceTotalElement.innerText=currentBalanceTotal;
    //clear deposit field
    depositField.value='';

})