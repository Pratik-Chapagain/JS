let gamenum=25;

let usernum=prompt("guess the game number:");
console.log(usernum);
while(usernum != gamenum){
    usernum=prompt("you entered the wrong number. guess again:");
}

console.log("congratulations you entered the right number");