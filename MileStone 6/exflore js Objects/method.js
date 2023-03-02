const student={
    name:'Shimul',
    money:5000,
    DepartMent:"Math",
    Subject:['calculas','algebra','linear Algebra'],
    ecxam:function (){
        return this.name + "is participationg in exam";
    },
    improveExam:function(subject){
        this.ecxam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    birthDay:function(amount){
        this.money=this.money-amount;
        return this.money;
    }

}
const output=student.ecxam();
console.log(output);
const reExam=student.improveExam('algebra');
console.log(reExam);

const remaining=student.birthDay(3000);
console.log(remaining);
const dola=student.birthDay(500);
console.log(dola);