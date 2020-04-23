const before = new Date ('February 1 2019 7:30:59'); // Pass the date in string format
const now  = new Date();

console.log(now.getTime() , before.getTime());

// Time difference
const timDiff = now.getTime() - before.getTime();
console.log(timDiff);
// convert time diff into minute
const mins = Math.round(diff / 100 / 60);
console.log(mins);

// Convert timestamp into Date Object
const timestamp = 1675938474990;
console.log(new Date(timestamp));