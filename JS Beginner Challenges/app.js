
function isLoggedInAndSubscribed(log, sub) {
    return log === `loggedIn` || sub === `subscribed` ? true : false
    
    // if (log === "loggedIn")  {
    //     if (sub === `subscribed`) {
    //         return true
    //     }
    // }
    // return false
    
}

console.log(isLoggedInAndSubscribed(`loggedIn`, `subscribed`))

