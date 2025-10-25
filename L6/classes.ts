// // //BASIC CLASS
// // // class Department{
// // //     name="string"
// // //     constructor(n:string){
// // //        this.name=n;  
// // //     }
// // //     describe(){
// // //         console.log("Department",this.name);
// // //     }
// // // }

// // // const accounting =new Department("Accounting");
// // // accounting.describe();
// // // const accountingCopy={
// // //     name:"Dummy",
// // //     describe:accounting.describe
// // // }
// // // accountingCopy.describe();



// // //private,public access modig=fier
// // class Department{
// //     // name:string;
// //     // private employees:string[]=[];
// //     constructor( public name:string,private employees:string[]){
// //     //    this.name=n;  
// //     //    this.employees=[];
// //     }
// //     describe(){
// //         console.log("Department",this.name);
// //     }
// //     addEmployee(emp:string){
// //         this.employees.push(emp);
// //     }
// //     printEmployeeInformation(){
// //         console.log('Number of emp:',this.employees.length);
// //         console.log(this.employees)
// //     }
// // }

// // const accounting =new Department("Accounting",[]);
// // accounting.describe();

// // accounting.addEmployee("Ahmad");
// // accounting.addEmployee("Hamid");
// // accounting.printEmployeeInformation();

// // // accounting.employees=["xyz"]; 
// // accounting.printEmployeeInformation();


// //READONLY

// // class Department{
// //     public name:string;
// //     private employees:string[]; 
// //     private readonly id:string;
// //     constructor(n:string){
// //         this.name=n;
// //         this.id="d1";
// //         this.employees=[];
// //     }
// //     describe(){
// //         console.log("Department",this.name);
// //     }
// //     addEmployee(emp:string){
// //         this.employees.push(emp);
// //     }
// //     printEmployeeInformation(){
// //         console.log('Number of emp:',this.employees.length);
// //         console.log(this.employees)
// //     }
// // }

// // const accounting =new Department("Accounting",[]);
// // accounting.describe();

// // accounting.addEmployee("Ahmad");
// // accounting.addEmployee("Hamid");
// // accounting.printEmployeeInformation();

// // // accounting.employees=["xyz"]; 
// // accounting.printEmployeeInformation();



// //Inheritance
// //override properties and protected modifier
// //setter and getter
// class Department{
//     public name:string;
//     protected employees:string[]; 
//     private readonly id:string;
//     constructor(id:string,n:string){
//         this.name=n;
//         this.id=id;
//         this.employees=[];
//     }
//     describe(){
//         console.log(`Department (${this.id}),${this.name}`);
//     }
//     addEmployee(emp:string){
//         this.employees.push(emp);
//     }
//     printEmployeeInformation(){
//         console.log('Number of emp:',this.employees.length);
//         console.log(this.employees)
//     }
// }

// class AccountingDepartment extends Department{
//     // reports:string[]=[];
//     constructor(id:string,  private reports:string[]){
//         super(id,"Accounting");

//     }
//     addReports(text:string){
//         this.reports.push(text)
//     }
//     printReports(){
//         console.log(this.reports)

//     }
//     addEmployee(emp: string): void {
//         if(emp==="Ahmad"){
//             return ;
//         }
//         this.employees.push(emp)
//     }
//     get getReports(){
//         if(this.reports.length>0){
//             return this.reports;
//         }
//         throw new Error("Report not found.")
//     }
//     set setReports(value:string){
//         if(!value){
//             throw new Error("Please pass valid value")
//         }
//         this.reports.push(value);
//     }

// }
// const accDep=new AccountingDepartment("d1",[]);
// accDep.addReports("Bugs");
// accDep.printReports();
// accDep.describe()

// accDep.addEmployee("Ahmad");
// accDep.addEmployee("Hamid");
// accDep.printEmployeeInformation()
// //setter and getter
// console.log("getter->",accDep.getReports);
// accDep.setReports="Code review error";
// console.log("getter->",accDep.getReports);

// //static 
// class Department2{
//     public name:string;
//     protected employees:string[]; 
//     private readonly id:string;
//     constructor(id:string,n:string){
//         this.name=n;
//         this.id=id;
//         this.employees=[];
//     }
//     describe(){
//         console.log(`Department2 (${this.id}),${this.name}`);
//     }
//     addEmployee(emp:string){
//         this.employees.push(emp);
//     }
//     printEmployeeInformation(){
//         console.log('Number of emp:',this.employees.length);
//         console.log(this.employees)
//     }
//     static getSalary(){
//         return {salary:500000}

//     }
// }
// const salary=Department2.getSalary();//withput creating object we can access
// console.log(salary);



// //Anstract classes;
// class Department3{
//     name:string;
//     protected employees:string[]=[];
//     protected readonly id:string;

//     constructor (id:string,n:string){
//         this.id=id;
//         this.name=n;
//     }
//   abstract  describe(this:Department3):void
// }
// class Subclass extends Department3{
//     constructor(id:string,private reports:string[]){
//         super(id,"Accounting");
//     }
//     describe(): void {
    
//             console.log("Department",this.id)
//         }
//         displayName():void{
//             console.log(this.name);
//         }
//     }
//     const subClass=new Subclass("D1",[])
//     subClass.describe()
