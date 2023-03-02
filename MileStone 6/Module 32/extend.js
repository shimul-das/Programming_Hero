class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }

}
class Instructor extends TeamMember{
    name;
    designation='Web cousre instructor'
    team='web team'
    tech;
    location;
    constructor(name,location){
        super(name,location);
        this.tech=tech;
    }
    //Method Class er vitor je function gula thake egula ke method bole.
    StartSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
    

}

class Developer extends TeamMember{
    name;
    designation='Web cousre instructor'
    team='web team'
    tech;
    location;
    constructor(name,location,tech){
        super(name,location);
        this.tech=tech;
    }
    //Method Class er vitor je function gula thake egula ke method bole.
    developFeature(feature){
        console.log(`Please develop the ${feature}`);
    }
    release(version){
        console.log(`Please release the version  ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
    

}


class JobPlacement extends TeamMember{
    name;
    designation='Job Placement Commando'
    team='web team'
    tech;
    location;
    constructor(name,location){
        super(name,location)
        this.tech=tech;
    }
    //Method Class er vitor je function gula thake egula ke method bole.
    developFeature(feature){
        console.log(`Please develop the ${feature}`);
    }
    release(version){
        console.log(`Please release the version  ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
    

}
const alia = new Developer('ali miya','dhaka','react')
console.log(alia);