const userOne = {
    username :'viveshCodes',
    email:'viveshofficial@gmail.com',
    login(){
        console.log('user is logged in');
    },
    logout(){
        console.log('user is logged out');
    }
} // userOne

console.log(userOne.email , userOne.username);
userOne.login();