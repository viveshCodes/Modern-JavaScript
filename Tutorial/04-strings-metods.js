let email = "viveshofficial@gmail.com"
let fullName = "Vivesh Yadav"

// Methods without arguments
console.log(fullName.toLowerCase());
console.log(email.toUpperCase()) ;
console.log(email.lastIndexOf("i"));

// Slicing
let sliceString = email.slice(0,7);  // 0 : inclusive , 7 :exclusive
console.log(sliceString);

// Substring
let subString = email.substr(4 ,17);
console.log(subString);

// Replace 
let result = email.replace('@' , '8');
console.log(result);

 
// Methods with arguments
console.log(email.indexOf("@"));