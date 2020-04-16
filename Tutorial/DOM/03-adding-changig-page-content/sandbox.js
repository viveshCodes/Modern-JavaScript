/*
____________
.innerText
_____________*/

// Override text
const para = document.querySelector('p');
para.innerText = "Hello Vivesh !!"

// Append on text
const errorPara = document.querySelector('.error');
errorPara.innerText += " Try again later."

// Traverse through all p tag
const paras = document.querySelectorAll('p');
paras.forEach(pg =>{
    pg.innerText += 'New text is added';
});


/*
______________
.innerHTML
_______________*/
const content = document.querySelector('.content');
content.innerHTML = `<h2>This is new content </h2>`; 

const people = ['Mahi Bhai' ,'MS Dhoni' ,'Thala' , 'Captain Cool'];
people.forEach( peep =>{
    content.innerHTML += `<p>${peep}</p>`;

}) ;
