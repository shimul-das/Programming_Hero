document.getElementById('btn-submit').addEventListener('click', function(){
    //get email from the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);
    const passField = document.getElementById('user-password');
    const pass = passField.value;
    //console.log(email,pass);
    if(email==='shimul1322@gmail.com' && pass === '1315418698'){
        // console.log('valid User')
        window.location.href='bank.html';
    }
    else{
        alert('Tui password vule gecis, Toke ami tejjo sontan gosona korlam. ');
    }
})