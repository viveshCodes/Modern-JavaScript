// First p tag 
const firstP = document.querySelector('p');
console.log(firstP)

// P tag which has class="error"
const para = document.querySelector('.error');
console.log(para);

// First div tag 
const firstDiv = document.querySelector('div');
console.log(firstDiv)

// Div tag with class= "error"
const divError = document.querySelector("div.error")
console.log(divError)

// Multiple tag
const paras = document.querySelectorAll('p')
paras.forEach( para =>{
  console.log(para)
})
