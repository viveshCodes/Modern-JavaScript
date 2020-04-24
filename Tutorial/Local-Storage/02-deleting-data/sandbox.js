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


// deleting data from local storage - one item at a time
// localStorage.removeItem('name');
// name = localStorage.getItem('name');

// console.log(name);

// deleting data from local storage - all item at a time
localStorage.clear();
name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name ,age);