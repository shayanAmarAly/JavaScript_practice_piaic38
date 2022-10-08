
// Task 24: 
// More Conditional Tests.

// Tests for equality and inequality with strings

let str = "shayan";
console.log("I think this string is equal\n", str == "shaayan"); 

// Tests using the lower case function

let lowerCaseStr = "shayan";
console.log("I think string is in lowerCase\n", lowerCaseStr.toLowerCase() == str ? true : false); 

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let strg = "shayan";
if (strg == "shayan") { console.log("Equality matched"); }
else{ console.log("Inequality matched"); }

if (strg.length < 5) {
    console.log(`Length of string: ${strg} is greater than 5 ` );
}else if (strg.length > 7 ) {
    console.log(`Length of string: ${strg} is less than 7 ` );
}

if (a = 79/2 >= 40){
    console.log(true);
} 

(a = 79/2 >= 40) ? console.log("Condition matched ") : console.log("Condition not matched");
(a = 100/2 >= 50) ? console.log("Condition matched") : console.log("Condition not matched");

// Tests using "and" and "or" operators

totalP = 10;
totalF = 0;
Grade = 90;
(Grade == 90 && totalP == 10 || totalF == 1) ? console.log("Win a trophy")  : console.log("Satisfactory! best of luck for next time");

// Test whether an item is in a array

let items = ["ali", "rafay", "jawad"];

items.forEach(item => {
    (item === "shayan") ? console.log(`${item} is in array`) : console.log(`${item} isn't in array`)

});

// Test whether an item is not in a array
items.forEach(item => {
    (item === "rafay") ? console.log(`${item} is in array`) : console.log(`${item} isn't in array`)

});


