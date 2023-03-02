const student={
     name:'Kolim Uddin',
     age:15,
     class:'ten',
     marks:{
        math:78,
        physics:89,
        chemistry:65
     }
}

const marks=student.marks;
const math=student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const student_marks= student.marks[subject];
console.log(student_marks);

console.log(chemistry);