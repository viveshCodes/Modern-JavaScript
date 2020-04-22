// dates & times
// new keyword
const now = new Date();
console.log(now);
console.log(typeof now);

// year , months , day , times
console.log('Full Year :' , now.getFullYear());
console.log('Month :', now.getMonth());
console.log('Day :', now.getDay());
console.log('Date :', now.getDate());
console.log('Hour :', now.getHours());
console.log('Minute :', now.getMinutes());
console.log('Second :', now.getSeconds());

// timestamps 
console.log('timestamp :', now.getTime());

// date strings
console.log( now.toDateString());
console.log( now.toTimeString());
console.log( now.toLocaleString());