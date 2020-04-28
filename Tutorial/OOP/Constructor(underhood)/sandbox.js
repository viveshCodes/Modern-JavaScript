/*_____________________________
CLASS is a blueprint for OBJECT.
It describes how one should be made.
_______________________________*/
function User(username , email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} is logged in`);
    }
}
// class User {
//     constructor(username , email){
//         // setup properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     } // Unlike Object Literal , we don't use comma here
//     login(){
//         console.log(`${this.username} is logged in`);
//         return this ; // this = object instance
//     }  
//     logout(){
//         console.log(`${this.username} is logged out`)
//         return this;
//     }
//     inScore(){
//         this.score += 1;
//         console.log(`${this.username} has score of ${this.score}`);
//         return this;
//     }

// }



const userOne = new User('vivesh' , 'viveshofficial@gmail.com');
const userTwo = new User('viv' , 'viv@gmail.com');

console.log(userOne , userTwo);
userOne.login();