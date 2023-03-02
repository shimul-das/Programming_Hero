//create object using object literals
const player={}
//this is empty object
player.name='Shimul Chandra Das';
player.spaciality='Batsman';
console.log(player);
player.bat=function(){
    console.log('Swing Your Bat')
}

player.bat();

//Maximum time we use object in this way
const user={
    name:"jamal",
    job:"worker",
    action: function(){
        console.log("I am Working");
    },
    Salary:10000
}

//Object Constructor
const person=new Object();
console.log(person);

//Object Create Method

// const item=Object.create(null);
// console.log(item);

const atel=Object.create(user);
console.log(atel.name);

//class
class Person{
    name='Shimul';
    address='sodor ghat';
    constructor (age){
        this.age=age;
    }

}
//sobai object ekhon class diye use kore

console.log(Person);
const person1= new Person(56);
console.log(person1);

//Function
function obj(nam,model){
    this.nam=nam;
    this.model=model;
}

const car1=new obj('tesla',5000);
console.log(car1);