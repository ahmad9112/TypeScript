//BASIC CLASS
// class Department{
//     name="string"
//     constructor(n:string){
//        this.name=n;  
//     }
//     describe(){
//         console.log("Department",this.name);
//     }
// }
// const accounting =new Department("Accounting");
// accounting.describe();
// const accountingCopy={
//     name:"Dummy",
//     describe:accounting.describe
// }
// accountingCopy.describe();
//private,public access modig=fier
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department", this.name);
    };
    Department.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log('Number of emp:', this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee("Ahmad");
accounting.addEmployee("Hamid");
accounting.printEmployeeInformation();
accounting.employees = ["xyz"];
accounting.printEmployeeInformation();
