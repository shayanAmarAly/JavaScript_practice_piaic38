
// Task 14: Guest List

let fav_person = ["haseeb", "wasif", "hamza"];

for (let index = 0; index < fav_person.length; index++) {
    const element = fav_person[index];
    if (element == "hamza") {
        console.log(element + " can't make dinner");
        let replace_person = "muzamil";
        fav_person.push(replace_person);
        console.log("In place of hamza, I would like to invite muzamil"); 
        break;
    }
    console.log("I would like to invite " + element + " for dinner."); 
}

// part #01

// Exercise 14 



