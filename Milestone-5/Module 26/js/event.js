console.log('Live load enable')

const makeBlueButton=document.getElementById('make-black');
makeBlueButton.onclick=makeBlue;
//system 3
function makeBlue(){
    document.body.style.backgroundColor='black';
}

//system 4
const makeGreenButton=document.getElementById('make-green');
makeGreenButton.onclick= function makeGreen(){
    document.body.style.backgroundColor='green';
}