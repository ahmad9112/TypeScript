// //Type Guards

// type Combinable=string |number ;
// type Numeric=number | boolean;

// type Univeral=Combinable & Numeric;
// function add(a:Combinable,b:Combinable){
//     // add type guard
//     if(typeof a==="string" || typeof b ==="string"){
//         return a.toString()+b.toString();
//     }
//     return a+b;
// }
// console.log(add(30,30))
// console.log(add("30",30))

// //2
// type Admin={
//     name:string;
//     privilages:string[]
// }
// type Employee={
//     name:string;
//     startDate:Date
// }

// type ElevatedEmployee=Admin & Employee;
// type UnknownEmployee=Employee | Admin 
// const emp1:ElevatedEmployee={
//     name:"Sayed Ahmad",
//     privilages:['createe-server'],
//     startDate:new Date(),
// }

// //3
// function printEmployeeInformation(emp:UnknownEmployee){
//     console.log("Name:",emp.name);
//     // console.log("Privilages:",emp.privilages);
//     //start adding typerguard

//     // if(typeof emp==="object"){
//         // console.log(emp.privilages);//wrong code
//         // console.log(emp.privilages);
//     // }
// //use in keyword that build in JS
// if('privilages' in emp){
//     console.log(emp.privilages);
// }
// if('startDate' in emp){
//     console.log(emp.startDate)
// }
// }
// printEmployeeInformation(emp1);
// printEmployeeInformation({name:"Ahmad",startDate:new Date()})

// //Type Guards in class
// class Car{
//     drive(){
//         console.log("driving a car ....")
//     }

// }

// class Truck{
//     drive(){
//         console.log("Driving a truck...")
//     }
//     loadCargo(amount :number){
//         console.log("Loading cargo...",amount)

//     }
// }
// type Vehicle =Car | Truck;
// const v1=new Car();
// const v2=new Truck();
// function useVehicle(vehile:Vehicle){
//     useVehicle.drive();
//     // useVehicle.loadCargo(500)
//     if('loadCargo' in vehicle){
//         useVehicle.loadCargo(500)
//     }
//     if(vehicle instanceof Truck){
//         vehile.loadCargo(500)
//     }
//     useVehicle(v1);
//     useVehicle(v2)
// }


//type casting /type assertion
// const userInput=<HTMLInputElement>document.getElementById("user-input")!;
const userInput=document.getElementById("user-input")!as HTMLInputElement;
userInput.value="Han ji"



