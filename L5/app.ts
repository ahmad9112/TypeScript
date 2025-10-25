// let userInput:unknown;
let userInput:any;
let userName:string;

userInput=10;
userName="Ahmad"  

// userName=userInput;
if(typeof userInput==="string"){
    userName=userInput;
}

// never return type
function generateError(message:string,code:number){
    throw{message:message,statusCode:code}
}

 const res=generateError("Internal server error",50);
 console.log(res);