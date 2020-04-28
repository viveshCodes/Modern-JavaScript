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


function Admin(userOne , email , title){
    // Properties
    User.call(this , username , email);
    this.title = title;
}
// Copy user protypes to admin
Admin.prototype = Object.create(User.prototype);
//Add new method to Admin
Admin.prototype.deleteUser = function(){
    // delete user
};
const userOne = new User('vivesh' , 'viveshofficial@gmail.com');
const userTwo = new User('viv' , 'viv@gmail.com');
const userThree = new Admin('viveshCodes' ,'viveshcodes@gmail.com', 'developer');


console.log(userOne , userTwo);
userOne.login().logout();