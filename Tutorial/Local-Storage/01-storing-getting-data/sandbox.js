// store data in local storage
localStorage.setItem('name' , 'vivesh');
localStorage.setItem('age' , 19);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name);
console.log(age);

// update data in local storage
localStorage.setItem('name' , 'viveshCodes');
localStorage.age = '21';  // notice the syntax

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name);
console.log(age);