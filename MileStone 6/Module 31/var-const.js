//let means reassignable. means we can change it.
// const means we can not change it. we can also use it.
//const e amra push korte pari, const halka modify korte pari
const numbers=[12,89,30,40,55];
numbers.push(120);
numbers[1]=90;
console.log(numbers);
//object
const student = {
    name:'Shimul',
    age:24
}
student.name='shimul das';
console.log(student);
//ei for loop ekhane reassign hoi na. ekhane notun kore block create hoi.
//let and const block scope element.
for(let i=0;i<numbers.length;i++){
    const number=numbers[i];
    console.log(number);
}