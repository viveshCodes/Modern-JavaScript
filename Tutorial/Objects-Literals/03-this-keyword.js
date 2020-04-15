let user = {
    name :"viveshCodes",
    email :"viveshofficial@gmail.com",
    location : "Bangalore",
    blogs :["JavaScript From Novice To Ninja" , "MS Dhoni : The Untold Story"],
    login : function(){
        console.log("You're logged in .")
    },
    logout: function(){
        console.log("You'll be logged out .")
    },
    logBlogs:function(){
        console.log("The user has written following blogs :");
        this.blogs.forEach((blog) => {
            console.log(blog)
        });
    }
}
user.logBlogs();

/*
NOTE :
While creating method on an object , we shouldn't use arrow function.
But arrow function can be used inside the main function. 
*/ 