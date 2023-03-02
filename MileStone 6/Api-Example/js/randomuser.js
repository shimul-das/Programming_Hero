const loadUser=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayUser(data))
};

const displayUser=user=>{
    const genderTag=document.getElementById('gender');
    const name=document.getElementById('name');
    genderTag.innerText=user.results[0].gender;
    name.innerText=user.results[0].name.first+ ' ' + user.results[0].name.first + ' ' +user.results[0].name.last;
    console.log(user.results[0].name);
    //set image
    const image1=document.getElementById('image');
    const c_image=document.createElement('img');
    const female_img=user.results[0].picture.medium;
    c_image.setAttribute('src',`${female_img}`)
    image1.appendChild(c_image)
    //console.log(user.results[0].picture.medium);
}
loadUser();