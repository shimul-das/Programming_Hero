const user={
    id:1,
    name:'Shimul',
    job:'actor',

}
const stringify=JSON.stringify(user);
// javaScript Object Notation= JSON
// console.log(user);
// console.log(stringify);

const shop={
    owner:'ali',
    address:{
        street:'bhola',
        city:'ranbir',
        country:'bd',
    },
    products:['latptop','mac','monitor','keyboard'],
    reveneu:45000,
    isopen: true,
    isnew:false,

}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopobj=JSON.parse(shopJson);
console.log(shopobj);
