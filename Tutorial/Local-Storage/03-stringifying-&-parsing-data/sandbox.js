const todos = [
    {text : 'modern javascript' , author:'vivesh'},
    {text : 'golang' , author:'viv-bhai'},
    {text : 'react' , author:'viveshCodes'},
];

// console.log(JSON.stringify(todos));

localStorage.setItem('todos' , JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));