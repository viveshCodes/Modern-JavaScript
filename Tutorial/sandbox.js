const signUp = document.querySelector('.sign-up');
const username = document.querySelector('#username');

signUp.addEventListener('submit' , (event) =>{
  event.preventDefault();
  console.log(username.value);
  // Or ,
  console.log(signUp.username.value);

});