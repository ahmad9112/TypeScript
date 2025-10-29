//Type Guards
function add(a, b) {
    // add type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(30, 30));
console.log(add("30", 30));
var emp1 = {
    name: "Sayed Ahmad",
    privilages: ['createe-server'],
    startDate: new Date(),
};
//3
function printEmployeeInformation(emp) {
    console.log("Name:", emp.name);
    // console.log("Privilages:",emp.privilages);
    //start adding typerguard
    // if(typeof emp==="object"){
    // console.log(emp.privilages);//wrong code
    // console.log(emp.privilages);
    // }
    //use in keyword that build in JS
    if ('privilages' in emp) {
        console.log(emp.privilages);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInformation(emp1);
printEmployeeInformation({ name: "Ahmad", startDate: new Date() });
//Type Guards in class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving a car ....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo...", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehile) {
    useVehicle.drive();
    // useVehicle.loadCargo(500)
    if ('loadCargo' in vehicle) {
        useVehicle.loadCargo(500);
    }
    if (vehicle instanceof Truck) {
        vehile.loadCargo(500);
    }
    useVehicle(v1);
    useVehicle(v2);
}
