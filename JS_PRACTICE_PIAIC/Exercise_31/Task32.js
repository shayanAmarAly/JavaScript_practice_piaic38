
// Task 32: 
// Checking usernames.

let current_users = ["shayan", "ali", "sir zeeshan"];
let new_users = ["Rafay", "sir Zia Khan", "shayan"];

new_users.map((user)=>{
    if (current_users.includes(user) === true) {
        console.log(`${user} you will need to enter a new username.`);
    }else{
        console.log(`${user} as a username is available.`);
    }

})





