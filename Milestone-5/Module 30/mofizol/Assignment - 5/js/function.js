function getInputValueById(input){
    let a = document.getElementById(input).value;
    const a_number = parseFloat(a);
    return a_number;
}
function getTextValueById(input){
    let a = document.getElementById(input).innerText;
    const a_number = parseFloat(a);
    return a_number;
}
function title(name){
    let pCardName = document.getElementById(name).innerText;
    return pCardName;
}

function Rectangle_Parallelogram(a,b){
    return (a*b).toFixed(2);
}

function Triangle_Rhombus_Pentagon(a,b){
    return (0.5*a*b).toFixed(2);
}