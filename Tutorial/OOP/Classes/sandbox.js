/*_____________________________
CLASS is a blueprint for OBJECT.
It describes how one should be made.
_______________________________*/

class User {
    constructor(username , email){
        // setup properties
        this.username = username;
        this.email = email;
    }
    login(){
        console.log(`${this.username} is logged in`);
    }  
}

const userOne = new User('vivesh' , 'viveshofficial@gmail.com');
console.log(userOne);
userOne.login();


/*
the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new object
//3 - it calls the constructor functions to 'build' object
*/

/*
INSTANCE is individual OBJECT created using CLASS . 
*/