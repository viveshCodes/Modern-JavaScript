let age = 38

// Loose Comparison - different data types can still be equal
console.log(age == 38)    // true
console.log(age == '38')  // true
console.log(age != 38)    // false
console.log(age !='38')   // false

// Strict Comparison - different data types cannot  be equal
console.log(age === 38 )   // true
console.log(age === '38')  // false
console.log(age !== 38)    // false
console.log(age !== '38')  // true