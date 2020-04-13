const player = "Mahendra Singh Dhoni"
const runs = 91
const year = 2001 

// Concatenation Way
let result1 = "Man of the man was awarded to " + player +  " for scoring " + runs+ " runs in " + year 
console.log(result1)

// Template String Way
let result2 = `Man of the man was awarded to ${player} for scoring ${runs} in ${year} .`
console.log(result2)

// Creating HTML Templates
let html =`
<h2>${player}</h2>
<p> was awarded man of the match in ${year}</p>
<span> for scoring ${runs} runs </span>
`;
console.log(html)
