const now = new Date();

// console.log(dateFns.isToday(now));
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now , 'dddd Do MMMM YYYY'));

//Comparing Dates
const before = new Date('February 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now , before ,{addSuffix: true}));