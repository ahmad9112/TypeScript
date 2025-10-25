// let firstname:string;
// let age:number;
// firstname:"Sayed";
// age=24;
// const person:{
//     firstName:"Ahmad",
//     age:24,
// }={
//     firstName:"Sayed",
//     age:22,
// }
// {},{}
// console.log(person.firstName);
//UNION | ->pipe in Ts
function combine(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2; // returns number
    }
    else {
        return num1.toString() + num2.toString(); // returns string
    }
}
var sum = combine(20, 30); // number
var combineName = combine("Sayed", "MERN"); // string
console.log(sum, combineName);
//LITERAL TYPES
//TYPES ALIAS/SURTOM TYPES
