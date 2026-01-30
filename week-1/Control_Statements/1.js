function status(l,p){
    if(!l)
    {
        console.log("Please login")
    }
    else if(l && !p)
    {
        console.log("Complete your profile")
    }
    else if(l && p)
    {
        console.log("Welcome back!!")
    }
}

let loggedIn = true
let isProfileComplete = false
status(loggedIn,isProfileComplete)