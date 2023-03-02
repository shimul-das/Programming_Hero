const numbers = [2, 5, 7, 8, 9, ];

// const output = [];
// for (const number of numbers) {
//     const double = number * 2;
//     output.push(double);
// }
// console.log(output);


//Function 
function getDouble() {
    const output = [];
    for (const number of numbers) {
        const double =doubleIt(number);
        output.push(double);
    }
    return output;

}
function doubleIt(number){
    return number * 2;
}
// const result = getDouble(numbers);
// console.log(result);

const make_double=numbers.map(doubleIt);

