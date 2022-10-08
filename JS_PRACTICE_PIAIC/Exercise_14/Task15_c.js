// Task 15(a): Print guest name who can't make dinner.

let fav_person = ["haseeb", "wasif", "hamza"];

for (let index = 0; index < fav_person.length; index++) {
    const element = fav_person[index];
    if (element == "hamza") {
        let newGuest = "muzamil"
        console.log("Instead of " + fav_person[index] + " New guest is " + newGuest); 
        fav_person[index] = newGuest; // Old guest replace by new guest.
        break;        break;
    }
    console.log("I would like to invite " + element + " for dinner."); 
}

console.log("\nSecond list of confirm guest's");
fav_person.forEach(myFunction);
function myFunction(item, index)
{
    console.log(item);
}