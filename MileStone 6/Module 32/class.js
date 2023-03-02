// class syntactic sugar.
//class first letter Capital letter
class Instructor{
    name;
    designation='Web cousre instructor'
    team='web team'
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    //Method Class er vitor je function gula thake egula ke method bole.
    StartSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`create quiz for module ${module}`)
    }

}
const aamir = new Instructor('Shimul','Dhaka');
console.log(aamir);
aamir.StartSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('Solaiman','Bhola');
console.log(solaiman);

//class is template that make object.
// There has two part method and property.