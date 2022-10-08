
// Task 43: 
// Unchanged Magicians.

let Magicians = ['Nawaz', "Zardari", "Imraan K"];
let copy = [...Magicians];
// Magician Names.
function show_magicians(Magicians) {
    return (Magicians);
}

// Magicians with compliment.
function make_great(a) {
    console.log(a);
    a.map((value, index) => {
        a.splice(index, 1, `The great magician ${value}`)
    })
}

make_great(show_magicians(copy));

console.log("Great added: \n\t" , show_magicians(copy));
console.log("Original: \n\t" , Magicians);
