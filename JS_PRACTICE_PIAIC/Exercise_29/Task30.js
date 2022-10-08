
// Task 30: 
// Hello Admin.

let usernames = ["Admin", "shayan", "ali", "wasif", "rafay", "dawood", "hira hassan"];

usernames.map((username)=>{
    if (username == "Admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);  
    }else{
        console.log(`Hello ${username}, thank you for Logging in again`);
    }
})



