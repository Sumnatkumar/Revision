// const bcrypt = require("bcryptjs");
// let user = {
//     name:"Sumant Kumar",
//     email:"skr@gmail.com",
//     password:"123456",
//     credit_card : "12345678123455566678",
// };
// let salt = bcrypt.genSaltSync(10);
// let newPassword = bcrypt.hashSync(user.password, salt);
// let newCC = bcrypt.hashSync(user.credit_card, salt);

// let new_User = {...user, password: newPassword, credit_card: newCC};
// console.log(new_User);

// let result = bcrypt.compareSync("123456", new_User.password);
// if(result){
//     console.log("Login Successfully");
// }else{
//     console.log("Login failed");
// }

// const Emp = {
//     name:"Sumant",
//     email:"skr@gmail.com",
//     age:37,
// }
// const {name, email, age} = Emp;
// console.log(name, email, age);
// const marks = [10,20,30];
// const[a,b,c] = marks;
// console.log(c,b,a);
// let size = [37, 39, 41, 43];

// function size_Plus(size){
//     return size + 1;
// }
// let new_Size = size.map(size_Plus);
// console.log(new_Size);
// let size_array = [37,39,41,43];
// let new_Size= size_array.map((size)=>{
//     return size + 1;
// });
// console.log(size_array);
// console.log(new_Size);
// let size_array = [37, 39, 41, 43];

// let new_Size = size_array.forEach((size)=>{
//     return size + 1;
// });
// console.log(size_array);
// console.log(new_Size);

