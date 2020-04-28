/*_____________________________
CLASS is a blueprint for OBJECT.
It describes how one should be made.
_______________________________*/

class User {
    constructor(username , email){
        // setup properties
        this.username = username;
        this.email = email;
        this.score = 0;
    } // Unlike Object Literal , we don't use comma here
    login(){
        console.log(`${this.username} is logged in`);
        return this ; // this = object instance
    }  
    logout(){
        console.log(`${this.username} is logged out`)
        return this;
    }
    inScore(){
        this.score += 1;
        console.log(`${this.username} has score of ${this.score}`);
        return this;
    }

}

const userOne = new User('vivesh' , 'viveshofficial@gmail.com');
console.log(userOne);
userOne.login();
userOne.logout();
userOne.inScore();

// Methods chaining
userOne.login().logout().inScore();



/*
the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new object
//3 - it calls the constructor functions to 'build' object
*/

/*
INSTANCE is individual OBJECT created using CLASS . 
*/