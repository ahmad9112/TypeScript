//Object,Array,Tuple,Enum

// console.log("Lets learn object....")
//Object
// const person : {
//   firstName: string;
//   age: number;
//     xyz:{
//     address:"Mumbai"
//   }
// } = {
//   firstName: "Ahmad",
//   age: 22,
//     xyz:{
//     address:"Mumbai"
//   }


//Array
//   const person : {
//   firstName: string;
//   age: number;
//  skills:string[];
// } = {
//   firstName: "Ahmad",
//   age: 22,
//   skills:["ReactJs","NodeJS"]
  
// };

// let favouriteLanguage1:string;
// favouriteLanguage1="ReactJs"

// let favouriteLanguage2:any[];//loose its powerful
// favouriteLanguage2=["ReactJs","English",22,true]
// // console.log(person);

// //TUPLE
// const person3:{
//   name:String;
//   age:number;
//   skills:string[];
//   product:[number,string]
// }={
//   name:"Patel",
//   age:21,
//   skills:["ReactJs","Node"],
//   product:[10,"MacBook12"]
// }

//ENUM
enum Role {ADMIN,AUTHOR,READ_USER_ONLY}
const person={
name:"Ahmad",
age:24,
skills:["React","Node"],
product:[25,"Macbook Aur MN2"],
role:Role.ADMIN
}

if(person.role===Role.AUTHOR){
  console.log("Author");
}else if(person.role===Role.ADMIN){
  console.log("Admin");

}else if(person.role===Role.READ_USER_ONLY){
  console.log("read user only")
}
