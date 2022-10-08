
// Task 45: 
// Cars.

function Cars(...info) {
    this.manufacturer = info[0],
    this.model_name = info[1]
    this.color = info[2]
}

let car1 = new Cars("Ford Motor", "U.S", "race red")
let car2 = new Cars("Toyota", "Japan", "red")

console.log(car1);
console.log(car2);