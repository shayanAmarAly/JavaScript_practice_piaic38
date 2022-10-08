// Task 15(b): Replace guest name with new person.

let fav_person = ["haseeb", "wasif", "hamza"];

for (let index = 0; index < fav_person.length; index++) {
    if (fav_person[index] === "hamza") {
        let newGuest = "muzamil"
        console.log("Instead of " + fav_person[index] + " New guest is " + newGuest); 
        fav_person[index] = newGuest; // Old guest replace by new guest.
        break;
    }
    console.log("I would like to invite " + fav_person[index] + " for dinner."); 
}