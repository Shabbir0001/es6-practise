// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;


const add = (x, y) => x + y;

const give5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const result = sum * difference;
    return result;

}

const result = give5();
const result2 = doMath(98, 93);
console.log(result2);