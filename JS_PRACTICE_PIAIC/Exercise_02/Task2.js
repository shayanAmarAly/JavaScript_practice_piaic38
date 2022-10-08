// Task: 03 -> Name Cases:

var personName = "M. sHayan";

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' '); //   Then we use join function to make arrays of string into 1 String.
  }

console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(titleCase(personName));
  



