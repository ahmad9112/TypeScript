// //Interface
// // interface Person{
// //     name:string;
// //     age:number;
// //     greet(text:string):void
// // }

// // let user:Person;

// // user={
// //     name:"Ahmad",
// //     age:21,
// //     greet(text):void{
// //         console.log(`${text} ${this.name}`);
// //     }

// // }
// // console.log(user);
// // user.greet("Han ther ,I am  SAYED AHMAD")


// // interface Greetable{
// //     name:string;
// //     greet(text:string):void;
// //     };

    
// // interface Greetable{
// //     name:string;
// //     greet(text:string):void;
// //     };


// // class Person implements Greetable{
// // name:string;
// // constructor(n:string){
// //     this.name=n;
// // }
// // greet(text:string):void{
// //     console.log(`${text},${this.name}`);
     
// // }

// interface Greetable{
//     readonly name:string;
//     greet(text:string):void;
//     };

// //Readonly


// class Person implements Greetable{
// name:string;
// constructor(n:string){
//     this.name=n;
// }
// greet(text:string):void{
//     console.log(`${text},${this.name}`);
     
// }
// }
// const user1:Gtable;
// user1=new Person("Ahmad");
// // user1.name="Sayed Ahmad"

// //Extending Interface
// interface Named{
//     readonly name:string;
// }
// interface Greetable extends Named{
//     Gtable(text:string):void;
// }
// class Person implements Gtable{
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }
//     Gtable(text:string):void{
//         console.log(`${text},${this.name}`);
//     }
// }
// let user1:Greetable;
// user1=new Person ("Ahmad");
// console.log(user1);

// // type addFun=(a:number,b:number)=>number;
// interface addFun{
//     (a:number,b:number):number
// }

// let add:addFun;
// add=(n1:number,n2:number)=>{
//     return n1+n2;
// }
// console.log(add(10,20))

// //optionl(?)
// interface Named{
//     readonly name:string;
//     outputName?:string{
//         name:string;
//         constructor(n:string){
//             this.name=n;
//         }  
//     }
// }