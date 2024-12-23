// const num = prompt("Enter the Number:");
// if(num%7==0 || num==0){
//     console.log(num);
// }else{
//     console.log("Not")
// }
// import readline from 'readline';

// const prompt = require('prompt-sync')();

// const num = parseInt(prompt("Enter the Number: "));
// if(num%7==0 || num==0){
//     console.log(num);
// }else{
//     console.log("Not")
// }
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the Number: ", (input) => {
//     const num = parseInt(input); // Convert input to a number
//     if (isNaN(num)) {
//         console.log("Invalid input. Please enter a number.");
//     } else if (num % 7 === 0 || num === 0) {
//         console.log(num);
//     } else {
//         console.log("Not");
//     }
//     rl.close(); // Close the interface after input
// });


// const prompt = require('prompt-sync')();

// const num = parseInt(prompt("Enter the Number: "));
// if(num%3==0 || num==0){
//     console.log(num);
// }else{
//     console.log("Not")
// }
// const prompt = require('prompt-sync')();

// const num = parseInt(prompt("Enter the Number: "));
// if(num>0){
//     console.log(num);
// }else{
//     console.log("Not")
// }
// const prompt = require('prompt-sync')();

// const num = parseInt(prompt("Enter the Number: "));
// if(num%10==4){
//     console.log(num);
// }else{
//     console.log("Not")
// }
// const num = prompt("Enter a number:");
// if (num % 10 === 4) {
//     console.log(`${num} has 4 at the unit's place.`);
// } else {
//     console.log(`${num} does not have 4 at the unit's place.`);
// }
// const prompt = require('prompt-sync')();

// const num = parseInt(prompt("Enter the Number: "));
// if(num > 99 || num <1000){
//     console.log(num);
// }else{
//     console.log("Not")
// }
// const prompt = require('prompt-sync')();

// const num = parseInt(prompt("Enter the Number: "));
// if(num%2==0){
//     console.log("Even");
// }else{
//     console.log("Odd")
// }

// const prompt = require('prompt-sync')();
// const num1 = parseInt(prompt("Enter the Number1: "));
// const num2 = parseInt(prompt("Enter the Number2: "));
// num1 = 5
// num2 = 7
// if(num1 >= num2){
//     console.log(num1);
// }else{
//     console.log(num2)
// }
// const prompt = require('prompt-sync')();
// const num1 = parseInt(prompt("Enter the Number1: "));
// const num2 = parseInt(prompt("Enter the Number2: "));
// const num3 = parseInt(prompt("Enter the Number2: "));
// if(num1 >= num2 && num1 >= num3){
//     console.log(num1);
// }else if(num2 >= num1 && num2 >= num3){
//     console.log(num2)
// }else if(num3 >= num1 && num3 >= num2){
//     console.log(num3)
// }
// else{
//     console.log("Not Possible")
// }

// const prompt = require('prompt-sync')();
// const num1 = parseInt(prompt("Enter the Number1: "));
// const num2 = parseInt(prompt("Enter the Number2: "));
// const num3 = parseInt(prompt("Enter the Number2: "));
// if(num1 <= num2 && num1 <= num3){
//     console.log(num1);
// }else if(num2 <= num1 && num2 <= num3){
//     console.log(num2)
// }else if(num3 <= num1 && num3 <= num2){
//     console.log(num3)
// }
// else{
//     console.log("Not Possible")
// }


// const prompt = require('prompt-sync')();
// const num = parseInt(prompt("Enter the Number: "));
// var arr = [9,10,11]
// for(let i = 0; i <= arr.length-1; i++){
//     console.log(arr[i])
// }

// var arr = [9,10,11]
// for(let i = arr.length-1; i >= 0; i--){
//     console.log(arr[i])
// }

// const prompt = require('prompt-sync')();

// const num = parseInt(prompt("Enter the Number: "));
// if(num > 99 || num <1000){
//     console.log(num);
// }else{
//     console.log("Not")
// }
// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// for(let i=10;i>=1;i--){
//     console.log(i)
// }

// for(let i=5;i<=15;i++){
//     console.log(i)
// }

// for(let i=15;i>=10;i--){
//     console.log(i)
// }

// let i = 0
// while(i<=10){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }

// for(let i=0;i<=10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// for(let i=1;i<=10;i++){
//     console.log(4*i)
// }

// for(let i=1;i<=10;i++){
//     console.log(32*i)
// }

// for(let i=1;i<=10;i++){
//     console.log(6*i)
// }

// for(let i=1;i<=5;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// const prompt = require('prompt-sync')();
// const n = parseInt(prompt("Enter the Number: "));

// a = 0
// b = 1
// for(let i= 0;i <= n;i++){
//     c=a+b
//     console.log(a);
//     console.log(b);
//     console.log(c)

//     a=b
//     b=c
// }
// const prompt = require('prompt-sync')();
// const n = parseInt(prompt("Enter the Number: "));

// let a = 0, b = 1;
// console.log(a); 
// console.log(b); 
// for (let i = 2; i < n; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// }

// const prompt = require('prompt-sync')();
// const n = parseInt(prompt("Enter the Number: "));

// if (isNaN(n) || n <= 0) {
//     console.log("Please enter a positive integer.");
// } else {
//     let a = 0, b = 1;
//     console.log(a);
//     if (n > 1) console.log(b); // Print the second number only if n > 1
//     for (let i = 2; i < n; i++) {
//         let next = a + b;
//         console.log(next);
//         a = b;
//         b = next;
//     }
// }

// let n1 = 0, n2 = 1, nextTerm;

// console.log(n1); // Print the first term
// console.log(n2); // Print the second term

// while (true) {
//     nextTerm = n1 + n2; // Calculate the next term
//     if (nextTerm > 17) break; // Stop if the next term exceeds 17
//     console.log(nextTerm); // Print the next term
//     n1 = n2; // Update n1
//     n2 = nextTerm; // Update n2
// }

// const prompt = require('prompt-sync')();
// const num = parseInt(prompt("Enter the Number: "));

// for (let i = 1; i <= num; i++) {
//     let sum = 0;
//     let temp = i;
//     const digits = i.toString().length; 
//     while (temp > 0) {
//         let digit = temp % 10; 
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }

//     if (sum === i) {
//         console.log(i);
//     }
// }
// Arrays
// let Fruits = ["Apple","Orange","Mango","Watermealon"]
// // console.log(Fruits)
// for(let i = 0; i < Fruits.length -1; i++){
//     console.log(Fruits[i])
// }

// let ArrObj = [
//     {Id:101,name:"Sumant",Emial:"skr@gmail.com"},
//     {Id:102,name:"Rahul",Emial:"rkr@gmail.com"}
// ]
// console.log(ArrObj);

// let ArrObj = [
//     {Id:101,name:"Sumant",Emial:"skr@gmail.com"},
//     {Id:102,name:"Rahul",Emial:"rkr@gmail.com"}
// ]
// console.log(ArrObj[1].name);

// var arr2D = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// let sum = 0;
// for(let i=0;i<=arr2D.length-1;i++){
//     for(let j=0;j<=arr2D.length-1;j++){
//     sum += arr2D[i][j]
//     }
// }
// console.log(sum);
// arr2D[3]= [2,9,4]
// arr2D[0][1]=30
// arr2D[1].push(91)
// console.log(arr2D)
// arr2D.pop()
// arr2D.unshift(3)
// // console.log(arr2D)
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.splice(1,2));
// console.log(arr.slice(1,4));
// let arr1 = arr
// console.log(arr1)
// console.log(indexOf(4))
// let fruits = ["apple", "banana", "cherry", "apple"];
// let index = fruits.indexOf("apple");
// let fruits = [{"apple", "banana", "cherry", "apple"},
//     {}
// ];
// console.log(index); // Output: 0

// let users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];
// console.log(users)
// let users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];
// // let user = users.find(user => user.id === 2)
// // let user = users.findIndex(user => user.id === 2)
// let user = users.lastIndexOf(user => user.id === 2)
// console.log(user)
// let array = [[50,30,29,22],
//     [34,53,53,21]]
// array.map(element => {
//     console.log(element)
// });
// let array = [
//     {Id:102, name:"Sumant",srname:"Kumar"},
//     {Id:101, name:"Sumant",srname:"Kumar"}
// ]
// let arr1 = array.sort()
// console.log(arr1)

// let people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 22 },
//     { name: "Adam", age: 30 }
// ];

// people.sort((a, b) => a.age - b.age);
// console.log(people);

// let array = [13,21,3,0,5,11,17,8,9];
// // for(let i= array.length - 1; i >= 0; i--){
// //     console.log(array[i])
// // }
// let arr = array.reverse();
// let arr1 = arr.sort((a,b)=>a-b);
// console.log(arr1)


// Sample array of food items
// let foodItems = [
//     { name: "Pizza", price: 10, category: "Fast Food" },
//     { name: "Burger", price: 5, category: "Fast Food" },
//     { name: "Pasta", price: 8, category: "Italian" },
//     { name: "Sushi", price: 12, category: "Japanese" },
//     { name: "Salad", price: 7, category: "Vegetarian" },
//     { name: "Ice Cream", price: 4, category: "Dessert" },
//     { name: "Steak", price: 15, category: "Steakhouse" }
// ];

// Function to sort food items by price (ascending)
// function sortByPriceAscending(foodArray) {
//     return foodArray.sort((a, b) => a.price - b.price);
// }

// Function to filter food items by category (e.g., "Fast Food")
// function filterByCategory(foodArray, category) {
//     return foodArray.filter(item => item.category === category);
// }

// Sort food items by price in ascending order
// let sortedByPrice = sortByPriceAscending([...foodItems]); // Creating a copy to avoid mutating original
// console.log("Sorted by Price (Ascending):");
// console.log(sortedByPrice);

// Filter food items by "Fast Food" category
// let fastFoodItems = filterByCategory(foodItems, "Fast Food");
// console.log("\nFiltered by 'Fast Food' Category:");
// console.log(fastFoodItems);

// const sentence = "My name is a Sumant Kumar"
// console.log(sentence.includes("Sumant"))

// const numbers = [1,2,3,4,5,6,7]

// const evenNumbers = numbers.filter(numbers => numbers %2 ===0);
// console.log(evenNumbers);

// function capitalizeFirstLetter(str){
//     if (!str) return '';
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }


// const input = "hello world";
// const capitalized = capitalizeFirstLetter(input);
// console.log(capitalized);
// console.log(capitalizeFirstLetter("javaScript"));


// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = "";

//     words.forEach(word => {
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     });
//     return longestWord;
// }

// const input = "The quick brown fox jumps over the lazy dog";
// const longestWord = findLongestWord(input);
// console.log(longestWord);

// function removeDuplicates(names){
//     return [...new Set(names)]
// }
// const names = ["Alice","Bob","Alice","Charlie","Bob"];
// const uniqueNames = removeDuplicates(names);
// console.log(uniqueNames);

// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = "";

//     words.forEach(word => {
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     });
//     return longestWord;
// }

// const input = "The quick brown fox jumps over the lazy dog";
// const longestWord = findLongestWord(input);
// console.log(longestWord);
// function findSecondLongestWord(sentence){
//     if(!sentence) return '';

//     const words = sentence.split(' ');

//     if(words.length < 2) return '';

//     const sortedWords = words.sort((a,b) => b.length - a.length);

//     return sortedWords[1];
// }
// const sentence = "The quick brown fox jumps over the lazy dog";
// const secondLongestWord = findSecondLongestWord(sentence);
// console.log(secondLongestWord)

function removeDuplicates(array) {
    return [...new Set(array)]
}
const numbers = [1,2,3,4,2,1,5,3];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
