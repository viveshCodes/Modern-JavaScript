let user = {
    name :"viveshCodes",
    email :"viveshofficial@gmail.com",
    location : "Bangalore",
    blogs :["JavaScript From Novice To Ninja" , "MS Dhoni : The Untold Story"],
    login (){
        console.log("You're logged in .")
    },
    logout(){
        console.log("You'll be logged out .")
    },
    logBlogs(){
        console.log("The user has written following blogs :");
        this.blogs.forEach((blog) => {
            console.log(blog)
        });
    }
}
user.logBlogs();