const sections = document.querySelectorAll('section');
// console.log(section);
for(const section of sections){
    console.log(section);
    section.style.border='2px solid red';
    section.style.marginBottom='5px';
    section.style.borderRadius='15px';
    section.style.paddingLeft='15px';
    section.style.backgroundColor='lightblue';
}
// const placesContainer=document.getElementById('places-container');
// placesContainer.style.backgroundColor='yellow';
const placesContainer=document.getElementById('places-container');
 placesContainer.classList.add('yellow-bg');
 placesContainer.classList.remove('yellow-bg');