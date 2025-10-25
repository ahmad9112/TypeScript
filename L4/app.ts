//Function return type

function add(num1:number,num2:number):number{
    return num1+num2;//return 30
}
console.log(add(10,20)); 

function greet(name:string):void{
    console.log(`Haan,${name}`);
}


// let combineFunction:Function;
// // combineFunction=10;//invalid
// //combineFunction=function(){};valid
// combineFunction=add;//valid
// combineFunction=greet;
// console.log(combineFunction(1,2))


//Good Practice
let  combineFunction:(a:number,b:number)=>number;
combineFunction=add;
console.log(combineFunction(100,200))

//Function type && callbacks

function addHandle(num1:number,num2:number,cb:(n:number)=>void){
    const result=num1+num2;
    cb(result);
}
addHandle(10,20,(result:number)=>{
    console.log(result);
})