function User(username , email){
    this.username = username;
    this.email = email;
}
User.prototype.login = function(){
    console.log(`${this.username} is logged in`);
    return this;
};
User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
};


const userOne = new User('vivesh' , 'viveshofficial@gmail.com');
const userTwo = new User('viv' , 'viv@gmail.com');

console.log(userOne , userTwo);
userOne.login().logout();