// Rest parameter
const double = (...nums)=> {
    console.log(nums)
    return nums.map(num => num * 2);
}
const result = double(1,2,3,4,5,7,7,8,1);
console.log(result);


// spread syntax (arrays)
const people = ['viv', 'viv-bhai', 'viveshCodes'];
console.log(...people);
const newPeople = ['mahi-bhai', 'ms dhoni',...people];
console.log(newPeople);


// spread syntax (objects)
const person = {name : 'viv', age:21, job:'software engineer'};
const personClone = {...person, location:'Birgunj'};

console.log(personClone);