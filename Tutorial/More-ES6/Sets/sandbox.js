// Arrays can have duplicate value 
// We are not allowed duplicate values in sets 

// Array
const namesArray =['viv', 'viv', 'viv-bhai', 'vivesh'];
console.log(namesArray);

// Sets , we have to use 'new' keyword to create it
const namesSet = new Set(['viv', 'viv', 'viv-bhai', 'vivesh']);
console.log(namesSet);

const namesSet2 = new Set(namesArray);
console.log(namesSet2);

const uniqueNames = [...namesSet];
console.log(uniqueNames);

// Short hand
const uniqueValues = [...new Set(namesArray)];
console.log(uniqueValues);

// Sets have different methods and properties
const ages = new Set();
ages.add(20);
ages.add(21).add(40);
ages.add(20) ; // this will be discarded
ages.delete(21);
console.log(ages, ages.size);  // no length property for sets
console.log(ages.has(20), ages.has(23));

ages.clear();  // delete all elements of sets
console.log(ages);

// iterte through sets
numbers = new Set([7,7,8,1]);
numbers.forEach(number =>{
    console.log(number);
})