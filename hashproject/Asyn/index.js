// let employees = [
//     {Id: 101, name: "Sumant", Salary: 450000},
//     {Id: 102, name: "Bablu", Salary: 3000}
// ];

// let createEmployee = (employee) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             employees.push(employee);
//             resolve(); // Resolve the promise after adding the employee
//         }, 2000);
//     });
// };

// let getEmployee = () => {
//     setTimeout(() => {
//         let employeeRow = "";
//         employees.forEach((employee) => {
//             employeeRow += `<tr><td>${employee.Id}</td><td>${employee.name}</td><td>${employee.Salary}</td></tr>`;
//         });
//         document.querySelector("#table-body").innerHTML = employeeRow;
//     }, 1000);
// };

// // Call the functions
// createEmployee({Id: 103, name: "Raj", Salary: 40000}).then(() => {
//     getEmployee();
// });

// let employees = [
//     {Id: 101, name: "Sumant", Salary: 500000},
//     {Id: 102, name: "Bablu", Salary: 45000}
// ];

// let createEmployee = (employee, callback) => {
//         console.log(employee);
//         return new Promise((resolve) => {
//         setTimeout(() => {
//             employees.push(employee);
//             resolve(); // Resolve the promise after adding the employee
//         }, 2000);
//     });
// };

// let getEmployee = () => {
//     setTimeout(() => {
//         let employeeRow = "";
//         employees.forEach((employee) => {
//             employeeRow += `<tr><td>${employee.Id}</td><td>${employee.name}</td><td>${employee.Salary}</td></tr>`;
//         });
//         document.querySelector("#table-body").innerHTML = employeeRow;
//     }, 1000);
// };

// // Call the functions
// createEmployee({Id: 103, name: "Raj", Salary: 40000}).then(() => {
//     getEmployee();
// });
// function oneSecond(){
//     setTimeout(function(){
//         console.log("Sup!");
//     }, 2000);
// }
// function stopWatch(){
//     setInterval(function(){
//         console.log("Oooo Yeaaa!");
//     },2000)
// }
// oneSecond();
// stopWatch();
