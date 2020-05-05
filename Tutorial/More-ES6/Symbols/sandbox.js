// No two symbol can be same
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol(' a generic name');

console.log(symbolOne, typeof symbolOne,symbolTwo, typeof symbolTwo);
console.log(symbolOne === symbolTwo);
console.log(symbolOne == symbolTwo);

const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

console.log(ninja);

ninja[symbolOne]='viv';
ninja[symbolTwo]='viv-bhai';
console.log(ninja);
