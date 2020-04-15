// function declaration
function findSum(a , b){
    let sum = a + b 
    return sum
}
let sum = findSum(4,5)
console.log("The sum of 4 & 5 is ",sum)

// function expression . It ends with a semicolon
const getSum = function (a , b){
    let sum = a + b
    return sum
};
let result = getSum( 4, 5)
console.log("The sum of 4 & 5 is ", result)