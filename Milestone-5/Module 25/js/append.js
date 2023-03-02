console.log("Append dot")
//Where to add
const placesList=document.getElementById('places-list');
console.log(placesList);
//what to be added
const li=document.createElement('li');
li.innerText="phartoli bon";
//add the child
placesList.appendChild(li);

//set inner html directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>My dress Section </h1>
<ul>
<li>jama</li>
<li>jama</li>
<li>jama</li>

</ul>
`
const mainContainer=document.getElementById('main-container')
mainContainer.appendChild(sectionDress)