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

//Let's create a subclass
// subclass extends another class
class Admin extends User{
    deleteUser(user){
       users =users.filter(u => u.username !== user.username);
       } 
}


const userOne = new User('vivesh' , 'viveshofficial@gmail.com');
const userTwo = new User('viv' , 'viv@gmail.com');

const userThree = new Admin('viveshCodes' , 'viveshCodes@gmail.com');
console.log(userThree);

let users = [userOne , userTwo , userThree];

console.log(userOne ,userTwo , userThree);

userThree.deleteUser(userTwo);
console.log(users);