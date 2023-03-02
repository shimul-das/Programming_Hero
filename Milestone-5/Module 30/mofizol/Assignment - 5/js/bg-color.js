
//first  card hover
document.getElementById('tri-image').addEventListener('mouseover',function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('tri-card-main').style.backgroundColor="#" + randomColor;
});
// // second card hover
document.getElementById('tri-second-image').addEventListener('mouseover',function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('tri-second-card').style.backgroundColor="#" + randomColor;
});
// third card hover
document.getElementById('tri-third-image').addEventListener('mouseover',function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('tri-third-card').style.backgroundColor="#" + randomColor;
});