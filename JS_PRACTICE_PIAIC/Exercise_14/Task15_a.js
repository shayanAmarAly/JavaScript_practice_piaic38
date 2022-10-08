// Task 15(a): Print guest name who can't make dinner.

let fav_person = ["haseeb", "wasif", "hamza"];

for (let index = 0; index < fav_person.length; index++) {
    const element = fav_person[index];
    if (element == "hamza") {
        console.log(element + " can't make dinner");
        break;
    }
    console.log("I would like to invite " + element + " for dinner."); 
}