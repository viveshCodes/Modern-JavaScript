// Example 1
const link = document.querySelector('a')
link.setAttribute('href' ,'https://twitter.com');
link.innerText = `Take me to Twitter`

// Example 2
const message = document.querySelector('.error');
console.log(message.getAttribute('class'));
message.setAttribute('class','success');
message.innerText = `Change successful`;
message.setAttribute('style' , 'color: green;');