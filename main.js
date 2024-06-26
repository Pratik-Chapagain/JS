function loginusermessage(username){
    if(username=== undefined){
        console.log("please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginusermessage("Pratik"))
console.log(loginusermessage())