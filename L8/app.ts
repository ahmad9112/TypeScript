//Generics intro

type Person={
    name:string;
    age:number
}

const Boy:Person={
    name:"Hamid",
    age:16
}
const fruits:Array<Person>=[{name:"Ahmad",age:12}];
// fruits.push("Mango");
// fruits.push("Banana");
// fruits.push("Apple");
console.log(fruits);

//EX-2
function merge<T,U,S>(objA:T,objB:U,objC:S){
    return {...objA,...objB,...objC}
}
const res=merge({name:"Ahmad"},{role:"software engineering"},{id:"d1"})
console.log(res)

//Ex-3 Generic constriants
function createObject<T extends string,U extends number,V  extends boolean>(
    key:T,
    value:U,
    isActive:V
    ):{key:T,value:U,isActive:V}{
        return {key,value,isActive}
}
