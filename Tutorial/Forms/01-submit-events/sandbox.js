const signUp = document.querySelector('.signup-form');
const username = document.querySelector('#username');

signUp.addEventListener('submit' , (event) =>{
  event.preventDefault();
  console.log(username.value);
  // Or ,
  console.log(signUp.username.value);

});
