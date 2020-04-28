/*
Object in JS is like object in a real life .So , JS has properties , and methods.
*/


/*______________________________
 Array  is an example of OBJECT
 _______________________________*/
 
const names = ["vivesh" , "viveshCodes"];

// Uisng Constructor
const ages = new Array(20 , 30);



/*_______________
Create An OBJECT
_________________*/ 
// using object literals
const userOne = {};

// using constructor
const userTwo = new Object();



/*
JS takes primitive data types(Number ,String , Boolean) and temporarily wraps into a wrapper-object .
Then we use Object Properties  and Methods on this wrapper-object. Once , we're done , JS again unwraps the primitive data type from wrapper-object.
*/
const name = new String('viv-bhai');
console.log(name);

new Number(7);
new Boolean(true);

//_______________________________________________________
//Note : Null And Undefined do not have a wrapper-object.
//________________________________________________________