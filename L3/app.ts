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
// function combine(num1: number | string, num2: number | string): number | string {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2; // returns number
//   } else {
//     return num1.toString() + num2.toString(); // returns string
//   }
// }

// const sum = combine(20, 30);             // number
// const combineName = combine("Sayed", "MERN"); // string

// console.log(sum, combineName);

//LITERAL TYPES->
// function combine(num1: number | string, num2: number | string, conversionType:"as-number" | "as-string") {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2; // returns number
//   } else {
//     return num1.toString() + num2.toString(); // returns string
//   }
// }

// const sum1 = combine(20, 30,"as-number");  
// const sum2=combine(10,50,"as-number")           // number
// const combinedName = combine("Sayed", "MERN"); // string

// console.log(sum1, combineName);

//TYPES ALIAS/CUSTOM TYPES
type Combiable=number | string;
type conversionType="as-number" | "as-string"

function combine(num1:  num2: number | string, conversionType:"as-number" | "as-string") {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2; // returns number
  } else {
    return num1.toString() + num2.toString(); // returns string
  }
}

const sum1 = combine(20, 30,"as-number");  
const sum2=combine(10,50,"as-number")           // number
const combinedName = combine("Sayed", "MERN"); // string

console.log(sum1, combineName);
type User={
    name:string;
    age:number;
    skills:string[]

}


const user:User={
  name:"Ahmad",
  age:24,
  skills:["React","Node"]
}

function greet(user:User){
  console.log(`Han,I am ${user.name}`)
}
greet(user);