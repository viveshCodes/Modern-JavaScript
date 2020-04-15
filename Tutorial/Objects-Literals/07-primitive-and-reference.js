// Primitive Type
//_______________
let num1 = 7;
let num2 = num1;

console.log(`num1 : ${num1} and num2 : ${num2}`)
/*
num1 : 7 and num2 : 7
*/

num1 = 7781

console.log(`num1 : ${num1} and num2 : ${num2}`)
/*
num1 : 7781 and num2 : 7
*/


// Reference Type 
//_______________
let userOne = {title : "viveshCodes" , mobile : "7462942781"}
let userTwo = userOne
console.log(`Username of userOne :${userOne.title} and Username of userTwo :${userTwo.title}`)
console.log(`Mobile of userOne :${userOne.mobile} and Username of userTwo :${userTwo.mobile}`)
/*
Username of userOne :viveshCodes and Username of userTwo :viveshCodes
Mobile of userOne :7462942781 and Username of userTwo :7462942781
*/
userOne.title = "viv-bhai"
userTwo.mobile = "9865351256"

console.log(`Username of userOne :${userOne.title} and Username of userTwo :${userTwo.title}`)
console.log(`Mobile of userOne :${userOne.mobile} and Username of userTwo :${userTwo.mobile}`)
/*
Username of userOne :viv-bhai and Username of userTwo :viv-bhai
Mobile of userOne :9865351256 and Username of userTwo :9865351256
*/


/*
 Primitive Types:
 ________________
 -Numbers
 -Strings
 -Booleans
 -null
 -undefined
 -symbols 
*/
/*
Reference Types:
________________
-all types of objects
    -object literals
    -arrays
    -functions
    -dates
    -all other objects
*/
