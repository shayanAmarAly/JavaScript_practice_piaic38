
// Task 17: Invite only 2 guest.
// Task 17 starts from where task 16 end.

// ------   TASK 16 -------
let fav_person = ["haseeb", "wasif", "hamza"];

fav_person.forEach(myFunction);
function myFunction(item, index)
{
    if (item === "hamza") {
        let replace_person = "muzamil";
        fav_person.splice(index, 1, replace_person);
    }
    console.log(item);
}
console.log("Confirmed guests " + fav_person);
console.log("After inviting 3 more guests ");
let totalGuest =  fav_person.push('rafay','talha','raheem');
console.log("All guests " + fav_person);

// ------  Task 17 ------

console.log("Because new table won't arrive at time therefore we invite only 2 guest");

const middleIndex = Math.ceil(fav_person.length/1.5);

// Send invitation for guest who aren't invited.
for (let index = 0; index < middleIndex; index++) {
    console.log("Sorry " + fav_person.shift() + " we aren't inviting you for dinner");
}
   console.log("\nInvited guests " + fav_person + "\n");

// Send invitation for last 2 guest 
fav_person.map((guest) => { console.log( guest.toUpperCase() + " we are inviting you for dinner")})

// Removing the last 2 guest from array.
let aL = fav_person.length;
for (let index = 0; index < aL; index++) { console.log(fav_person.shift() + " remove"); }
console.log(fav_person);
