let courses = ['DSA' , 'DBMS' , 'CoA']
let marks = [77 , 88 , 81]
let remarks = [5 , 10.0 , "Excellent"]

// Length Properties
console.log(courses.length)

// Array Methods

let result1 = marks.join('_')
console.log(result1)

let result2 = marks.indexOf(77)
console.log(result2)

let result3 = courses.concat(marks)
console.log(result3)

let result4 = courses.push('OS')  // adds elements at the end of array and returns number of elements
console.log(result4)

let result5 = courses.pop()  // deletes last element of array and returns that element
console.log(result5)