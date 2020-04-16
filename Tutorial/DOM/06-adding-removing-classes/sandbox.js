const message = document.querySelector('p');
console.log(message.classList); 

message.classList.add('error');
message.classList.remove('error');
message.classList.add('success');
message.innerText = `Sign Up Successful`


