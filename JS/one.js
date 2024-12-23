// var n;
// console.log(n);
// console.log(undefined == null);
// console.log(undefined === null);

// console.log(0 == false);
// console.log(0 === false);

// console.log(1 == "1");
// console.log(1 === "1");

// console.log('0' == false);
// console.log('0' === false);

// console.log('0' == 0);
// console.log('0' === 0);

// console.log('' == 0);
// console.log('' === 0);

// console.log(typeof NaN)
// console.log(Math.sqrt(-1))
// console.log(30 / "Sumant")
// console.log("Sumant"-"Sumant")
// // console.log("Sumant"*"Sumant")
// console.log(Number("Sumant"))
// console.log(String(12))


// var a = 2
// if(a=2){
//     console.log("Sumant");
// }
// var a;
// if(a=2){
//     console.log("Sumant");
// }else{
//     console.log("Kumar")
// }
// let userInput = prompt("Enter your name:");
// console.log("User Input:", userInput);
// switch(userInput){
//     case 1:
//         console.log("Sumant");
//     break;
//     case 2:
//         console.log("Kumar");
//     break;
//     default:
//         console.log("Sumant Kumar")
// }

// const prompt = require('prompt-sync')();

// let Salary = prompt("Enter your name: ");
// console.log("Hello, " + name);
// switch(name){
//     case 'Sumant':
//         console.log("Kumar");
//     break;
//     case 'Kumar':
//         console.log("Sumant");
//     break;
//     default:
//         console.log("Sumant Kumar")
// }

// const prompt = require('prompt-sync')();

// let Salary = prompt("Enter your Salary: ");

// let message = 75000 < Salary ? "Eligible for Marrige" : "No";
// console.log(message);
// for(i=0;i<=Salary; i++){
//     console.log("for i:"+i)
// }
// i=0
// while(i<=Salary){
//     console.log("for i:"+i);
//     i++;
// }
// do{
//     console.log("for i:"+i)
//     i++;
// }while(i>=Salary);
// function add(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// add(10,"Sumant",true)

// function add(a,b,c){
//     return a + b + c + 50
// }
// console.log(add(10, 30,40))

// function add(){
//     console.log("Addtion");
// }
// add();
// function add(a,b){
//     console.log("Addtion",a+b);
// }
// add(10,20);

// function add(a,b){
//     return a + b;
// }
// // add(10,20);
// console.log(add(10,20))

// let fun = ()=>{
//     console.log("Addition");
// }
// fun();

// let fun = (a,b)=>{
//     console.log("Addition",a+b);
// }
// fun(10,20);

// let fun = (a,b)=>{
//     return a+b;
// }
// console.log(fun(10,20));
// let add = (a,b) => a+b;
// console.log(add(3,4));

// console.log("JS Array Beyond the Basics")

// var arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[0]);

// console.log(arr[arr.length - 1])

// for(var i = 0; i < arr.length; i++ ){
//     console.log(arr[i])
// }

// console.log(arr[10])

// var Product = [
//     {name:"Sumant",srname:"Kumar"},
//     {name:"Rahul",srname:"Kumar"}
// ]
// console.log(Product)
// var Product = [
//     {name:"Sumant",srname:"Kumar"},
//    1,2,3,"ABC"
// ]

// console.log(Product)

// var Product = {name:"Sumant", price:[1,2,3,4]}
// console.log(Product)

// var arr2d = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(arr2d)


// console.log(arr2d[1][2])

// arr2d[0][2] = 30
// console.log(arr2d)

// var arrdata = [4,5,6]
// arrdata.push(1)
// arrdata.push(8)
// console.log(arrdata)
// arrdata.pop();
// arrdata.pop();
// arrdata.pop();
// arrdata.pop();
// console.log(arrdata)

// var arrdata = [4,5,6]
// console.log(arrdata.slice(0,2))
// arrdata.unshift(1)
// arrdata.unshift(8)
// console.log(arrdata.slice(1,2))
// console.log(arrdata)
// arrdata.shift();
// arrdata.shift();
// arrdata.shift();
// arrdata.shift();
// console.log(arrdata)
// console.log(arrdata.indexOf(6))

// var arrdata = [4,5,6]
// for(arr of arrdata){
//     console.log(arr)
// }

// var cities = [
//     "Hyderbad",
//     "Bangalore",
//     "Chennai",
//     "Noida",
//     "New Delhi",
//     "Mangalore"
// ];
// cities.splice(3,2)
// console.log(cities)

// function rev_Order(arr){
//     var max = arr[0];
//     console.log("*Elements in Reverse Order*");
//     for(var i = 0; i <= arr.length - 1; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(rev_Order([1,2,3,4,5,6,7,8,9]));
// function rev_Order(arr){
//     var max = arr[0];
//     console.log("*Elements in Reverse Order*");
    // for(var i = 0; i <= arr.length - 1; i++){
    //     if(arr[i] < max){
    //         max = arr[i];
    //     }
    // }
//     return max;
// }
// console.log(rev_Order([1,2,3,4,5,6,7,8,9]));

// function rev_Order(arr){
//     var sum = 0;
//     console.log("*Elements in Sum Order*");
//     for(num of arr){
//         sum += num;
//     }
//     return sum;
// }
// console.log(rev_Order([1,2,3,4,5,6,7,8,9]));

// function identical(arr) {
//     var first = arr[0];
//     for (var i = 1; i <= arr.length - 1; i++) {
//         if (arr[i] != first) {
//             return false;
//         }
//     }
//     return true;
// }

// let result = identical([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result);

// function identical(arr) {
//     let first = arr[0];
//     return arr.every(element => element === first);
// }

// let result = identical([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result); // Output: false
// function areAllIdentical(arr) {
//     return arr.every(element => element === arr[0]);
// }

// // Test
// console.log(areAllIdentical([1, 1, 1, 1])); // Output: true
// console.log(areAllIdentical([1, 2, 1, 1])); // Output: false
// let name = "";
// let len = name.length;
// console.log(len);
// let message = "Welcome to Pro Stack Academy";
// let len = message.length;
// console.log(len);
// let employee = {
//     name:"Sumant Kumar",
//     salary : 450000,
//     location : ["Bangalore","Noida","USA"],
//     greet : function(){
//         console.log("Hello ! I'm a Software developer")
//     },
// };

// let employee = new Object({
//     name:"Sumant Kumar",
//     salary : 450000,
//     location : ["Bangalore","Noida","USA"],
//     greet : function(){
//         console.log("Hello ! I'm a Software developer")
//     },
// });

// console.log(typeof employee);
// console.log(employee.name);
// console.log(employee.location[0]);
// employee.greet();

// function Employee(){
//     this.name = "Sumant Kumar",
//     this.salary = 45000
// }
// let emp = new Employee();
// console.log(typeof emp);
// console.log(emp);
// console.log(emp.name);
// console.log(emp.salary);

// let employee = {
//     name:"Sumant Kumar",
//     salary : 450000,
//     // location : ["Bangalore","Noida","USA"],
//     greet : function(){
//         console.log("Hello ! I'm a Software developer")
//     },
// };

// // console.log(typeof employee);
// console.log(employee.name);
// employee.greet();
// console.log(employee.location);
// employee.wish();

// let product = {
//     product_id:101,
//     product_Name:"Iphone 12",
//     price:45000,
//     color:"grey"
// };
// delete product.product_id;
// delete product.product_Name
// console.log(product);

// let product = {
//     product_id:101,
//     product_Name:"Iphone 12",
//     price:45000
// };

// let no_Of_Props = 0;
// for (props in product){
//     ++no_Of_Props;
// }
// console.log(no_Of_Props);

// const employee = {
//     name:"Sumant",
//     salary:54000
// };

// // const new_Employee =  Object.assign({}, employee);
// const new_Employee =  {...employee};
// console.log(new_Employee);
// console.log(employee);

// new_Employee.name = "Dhreeran";
// console.log(new_Employee.name);
// console.log(employee.name);

// const person = {
//     id:1,
//     name:"Sumant",
//     age:23
// };

// const hasKey = 'name' in person;
// if(hasKey){
//     console.log('The key exists.');
// }
// else{
//     console.log("The key does not exist.")
// }
// const person = {
//     id:1,
//     name:"Sumant",
//     age:23
// };
// const hasKey = person.hasOwnProperty("name");
// if(hasKey){
//     console.log('The key exists.');
// }
// else{
//     console.log("The key does not exist.")
// }
// class Product{
//     product_Name = "Iphone 5s"
// }
// console.log(new Product());
// console.log(new Product());

// class Employee{
//     name = "Sumant Kumar";
//     sal = 450000;
//     loc = "Bangalore";
// }
// let e1 = new Employee();
// console.log(e1);
// let e2 = new Employee();
// console.log(e2);
// class Employee {}
// let e1 = new Employee("Chandan",45000,"Bangalore");
// console.log(e1);
// class Employee {
//     constructor(name, sal, loc){
//         this.emp_Name = name;
//         this.emp_Salary = sal;
//         this.emp_loc = loc;
//         console.log("Constructor executing Automatically");
//     }
// }
// let e1 = new Employee("Sumant Kumar",54000,"Bangalore");
// console.log(e1);

// class Central {
//     constructor(){
//         console.log("Parent Class contructor methods");
//     }
// }
// class KA_Govt extends Central {
//     constructor(){
//         super();
//         console.log("Child class constructor methods");
//     }
// }
// new KA_Govt();

// class Central{
//     tax = 18;
//     applyTax() {
//         console.log("Applying Tax - Central Govt");
//     }
// }
// class KA_Govt extends Central{
//     tax = 28;
// }
// let kal = new KA_Govt();
// kal.applyTax();

// class GOA_Govt extends Central {
//     applyTax(){
//         console.log("Applying Tax - GOA Govt");
//     }
// }
// let gal = new GOA_Govt();
// gal.applyTax();

// let calculate = (a, b, operation) =>{
//     let result = "";
//     if(operation == "sum"){
//         result = a + b;
//     }
//     if(operation == "mul") {
//         result = a * b;
//     }
//     return result;
// };
// let output = calculate(10, 20, "sum");
// console.log(output);

// output = calculate(10, 20, "mul");
// console.log(output);
// const prompt = require('prompt-sync')();
// let name = prompt("What's your name? ");
// function greeting(salary){
//     alert('Hello' + salary);
// }
// function processUserInput(callback) {
//     var salary = prompt('Please enter your salary:');
//     callback(salary);
// }
// processUserInput(greeting);

// let a = [1,2,3];
// let b = a;
// b.push(4);
// console.log(a);
// console.log(b);

// let c = [1,2,3];
// let d = [...c];
// d.push(4);
// console.log(c);
// console.log(d);
// let size = [38, 40, 42, 44];
// let new_Size = [...size, 46, 48];
// console.log(new_Size);
// console.log(Math.max(5,8,9))
// console.log(Math.max(...[5,8,9]))

// const personalDetails = {
//     name:"Sumant Kumar",
//     email: "skr@gmail.com",
//     age:30,
// };
// const loginDetails = {
//     userName:"Sumant",
//     passsword:123456,
//     email:"test@gmail.com",
// };
// const userDetails = {
//     ...personalDetails,
//     ...loginDetails
// };
// console.log(userDetails);

