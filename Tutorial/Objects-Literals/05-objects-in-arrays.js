// Array Of Objects
let user = {
    name :"viveshCodes",
    email :"viveshofficial@gmail.com",
    location : "Bangalore",
    blogs :[
        {title :"JavaScript From Novice To Ninja" , likes : 77},
        {title :"MS Dhoni : The Untold Story" ,likes : 7781} 
    ],
    login (){
        console.log("You're logged in .")
    },
    logout(){
        console.log("You'll be logged out .")
    },
    logBlogs(){
        console.log("The user has written following blogs :");
        this.blogs.forEach((blog) => {
            console.log(`${blog.title} has ${blog.likes}` )
        });
    }
}
user.logBlogs();