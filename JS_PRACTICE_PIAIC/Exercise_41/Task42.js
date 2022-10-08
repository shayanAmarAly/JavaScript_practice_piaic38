
// Task 42: 
// Great Magicians.

let Magicians = ['Nawaz', "Zardari", "Imraan K"]

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

make_great(show_magicians(Magicians));

console.log(show_magicians(Magicians));
