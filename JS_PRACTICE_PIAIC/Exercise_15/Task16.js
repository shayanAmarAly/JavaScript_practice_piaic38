
// Task 16: Guest List

let fav_person = ["haseeb", "wasif", "hamza"];

fav_person.forEach(myFunction);
function myFunction(item, index)
{
    if (item === "hamza") {
        let replace_person = "muzamil";
        fav_person.splice(index, 1, replace_person);
        console.log("Guest who wouldn't come is ");
    }
    console.log(item);
}
console.log("Confirmed guests " + fav_person);
console.log("After inviting 3 more guests ");
let totalGuest =  fav_person.push('rafay','talha','raheem');
console.log("All guests " + fav_person);

// Task 16 part (a)
// Bigger dinner

console.log(`We found a bigger table with all confirmed guest ${fav_person}`);

// Task 16 part (b)
// Add new guest.

let anotherGuest = "Hira"
fav_person.unshift(anotherGuest);
console.log(fav_person);

// Task 16 part (c)
// Add new guest in middle of array.

let a = fav_person.length;
console.log("Old array " + fav_person);
let newGuest = "zubair"
fav_person.splice(2,1,newGuest);
console.log("New guest add in the middle of array :"+fav_person);

// Task 16 part (d)
// Print new invitation to all guest.
fav_person.map(invitation);

function invitation(item, index) {
    console.log(`${index} I would like to invite ${item} for dinner`);
}