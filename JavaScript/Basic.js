// //comments
// // console.log('hlw world boss');
// //if we declear a variable through "let" keyword
// let name='manish';
// console.log(name);
// let score=89.83;
// console.log(score);
// //For constant variables use "const"
// const interestRate=0.5;
// console.log(interestRate);


// //------------// operators \\

// console.log("\nBesic Arithmetic Operators : ");
// let a=5;
// let b=6;
// console.log("a = ",a," & b = ",b);
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a ** b = ",a**b);
// console.log("a % b = ",a%b);

// console.log("\nBesic Unary Operators : ");
// a++;
// console.log("a++ = ",a);
// a--; //before the a's value = 6
// console.log("a-- = ",a);

// console.log("\nBesic Ternary Operators : ");
// let ter=1;
// let ter2=2;
// let match = ter==ter2 ? "true":"false";
// console.log(match);

// //Conditional statements
// console.log("\nConditional statements : ");
// let age=9;
// if (age==5) {
//     console.log("Statement is correct.");
// }
// else{
//     console.log("Ststement is not correct.")
// }
// //haveing fun with bellow code
// console.log("\nColor changing using conditional statements : ");
// let mode='blue';
// let color;
// if(mode=='dark'){
//     color='white';
// }
// else if(mode == 'blue'){
//     color='dark';
// }
// else{
//     color = 'blue';
// }
// console.log("Now the color is : ",color);




// //Question1 : Get user to inout a number using prompt("enter a number ").Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number : ");
// if (num % 5==0) {
//     console.log("Its divisible by 5");
// }
// else{
//     console.log("Not div.")
// }

// //Question2 : Write a code which can give grades to students according to their scores.
// // 90-100 --> O
// // 80-90 --> A+
// // 70-80 --> A
// // 50-70 --> B
// // <50 --> P
// let score = prompt("Eneter the marks : ");
// let gread;
// if (score>=90) {
//     gread='O';
// }
// else if (score>=80 && score<90) {
//     gread='A+';
// }
// else if (score>=70 && score<80) {
//     gread='A';
// }
// else if (score>=50 && score<70) {
//     gread='B';
// }
// else{
//     gread='P';
// }
// console.log("Your gread is : ",gread);




// // ---------------------\\Loops//------------

// console.log("\nChapter --> LOOPS");
// let num = 5;
// for(let i=0;i<=num;i++){
//     console.log(i);
// }
// console.log("\nUsing while loops : ");
// let j=1;
// while (j<=num) {
//     console.log(j);
//     j++;
// }
// console.log("\nUsing do-while loops : ");
// let k=1;
// do {
//     console.log(k);
//     k++;
// } while (k<=num);

// console.log("\nUsing for-of loops : ");
// let name = "manish giri";
// for(let i of name){
//     console.log("The value of i : ",i);
// }

// console.log("\nUsing for-in loop : ");
// console.log("It mainly use in the objects.... ");

// let student={
//     name:'manish',
//     age:21,
//     sgpa:9
// }
// for(let i in student){
//     console.log("The perameater is : ",i);
// }
// console.log("\nUsing for-in loop find a specific key's value : ");
// let student_info={
//     name:'manish',
//     age:21,
//     sgpa:9
// }
// for(let i in student_info){
//     console.log("key is : ",i,"and value : ",student_info[i]);
// }
// //Question 1: Print all even numbers from 0 to 100.
// let num=100;
// for(let i=1;i<=num;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// //Question 2: Create a game where you start wiht any random game number.Ask the user to keep guessing the game number until the user entrs correct value.
// let guess=prompt("Enter the guessing number : ");
// let orginal_num=5;
// while(orginal_num != guess){
//     let newNumber = prompt("You guessing number is worng.\nPlese enter a new number : ");
//     guess=newNumber;
// }
// console.log("Hurray..!! \nYour guess is right....")




// //-------------------//STRINGS\\-----------------
// let name = "manish giri";
// let len= name.length;
// console.log("The length of the value 'Manish' is: ",len);
// let name2="hii";

// //##VVI : Template literals(String interpolation) :
// console.log("Using Template literals : ");
// let value = `hi their im manish giri can you know my knowladge.`;
// console.log(value);

// //Suppose :
// let student={
//     name:"Manish",
//     age:21,
//     sgpa:9
// }
// let output=`My name is : ${student.name}, age : ${student.age} and current sgpa : ${student.sgpa}`;
// console.log(output);
// // Question 1 : Prompt the user to enter their full name. Generate a username for them based on the input Star username with @,followed by their full name and ending with the owner birthday.
// // eg : user name ="manishgiri",username should be "@manishgiri26"
// let fullName = prompt("Enter your full name without white space : ");
// let birthDay = prompt("Enter your birth Day eg: 01 : ");
// let username = "@"+fullName.toLowerCase().concat(birthDay);
// console.log(username);






// //-------------------//ARRAYS\\-----------------
// console.log("||........ ARRAYS.......||");
// let arr=[2,3,4,5,6,7];
// console.log(arr[2]);
// arr[2]=5;// Changing the element of 2nd index.
// console.log(arr);
// for(let i of arr){
//     console.log(i);
// }

// // // Question : For given array with marks of students --> [85,97,44,37,76,60],Lets find the average marks of the entire class.
// let marks = [85,97,44,37,76,60];
// let sum =0,avg=0;
// for(let i of marks){
//     sum+=i;
// }
// let output=`The sum of array = ${sum} and avg = ${sum/arr.length}`;
// // console.log(output);

// // //Question 2: For given array with prices of 5 items -->[250,645,300,900,50] All items have an offer of 10% off on them.Change the array to store final price after applying offer.
// let arr=[250,645,300,900,50];
// let index=0; // for return the indexvalue
// for(let val of arr){
//     let offer = val/10;
//     val=val-offer;
//     arr[index]=arr[index]-offer;
//     index++;
// }
// console.log(arr);

// console.log("Process 2 \nUsing for loop : ");
// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

// console.log("Lets study the methods in array {Push(), Pop(), toString():");
// let array = [1, 2, 3, 4, 6, 7];
// let name = ["manish", "ayan", "suman", "kuntal"];
// array.push(50); // add an element into n'th index.
// console.log(array);
// array.pop(); // Delete the n'th element.
// console.log(array);
// console.log(array.toString()); // Return into string
// console.log(array.concat(name));
// array.unshift("Details"); //add somthing in 0th index
// console.log(array);
// array.shift(); // delete the 0th index element.
// console.log(array);
// array.slice(1, 2, 100,111); // Return a piece of the array.

// // Question 3 : Create an array to store companies --> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// // a) Remove the first company form the array
// // b) Remove Uber & Add Ola its place
// // c) Add Amazone at the end
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// //Question 1's ans:
// companies.shift(); // remove first elemnet
// console.log(companies);
// // Question 2's ans :
// companies.splice(1,1,"Ola"); // remove uber and add ola
// console.log(companies);
// //Question 3's ans:
// companies.push("Amazone"); // add amazone
// console.log(companies);




// //-------------------//Functions\\-----------------
// console.log("||........ FUNCTIONS.......||");
// function student(name,roll) {
//     console.log(`My name ${name} and roll : ${roll}`);
// }
// student("manish",6);

// function factorial(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//         fact*=i;
//     }
//     console.log(`The factorial of ${num} is : `,fact);
// }
// factorial(5);





// //-------------------//arrow Functions\\-----------------

// console.log("||........ARROW FUNCTIONS.......||");
// const arrowFunction=(a,b)=>{
//     console.log(`the sum of ${a} and ${b} = ${a+b}`);
// }
// arrowFunction(5,6);
// console.log("||........Factorial using ARROW FUNCTIONS.......||");
// const arrowFactorial=(num)=>{
//     let fact =1;
//     for(let i=1;i<=num;i++){
//         fact*=i;
//     }
//     console.log(`The factorial of ${num} is = ${fact}`);
// }
// arrowFactorial(5);



// //Question : Create a function using the "Fuction" keyword that takes a String as an argument & returns the number of vowels in the string.
// function vowelsCheck(name){
//     let charecter=["a","e","i","o","u"];
//     let count=0;
//     for(const i of name){
//         for(const char of charecter){
//             if(char==i){
//                 count++;
//             }
//             else{
//                 continue;
//             }
//         }
//     }
//     console.log(`Input value is = ${name} and total Vowel is =${count}`);
// }
// let value = prompt("Enter the string which you want to check vowels : ")
// vowelsCheck(value.toLowerCase());




// //-------------------//Foreach Functions\\-----------------

// console.log("||........FOREACH FUNCTIONS.......||");
// let array=[1,2,3,4];
// array.forEach((value)=>{
//     console.log(value*value);
// })
// console.log("ForEach function :");
// function match(value) {
//     console.log(value);
// }
// let arr=[1,2,3,4,5];
// arr.forEach(match);

// //Uising for each function we find multiple number's factorial.

// let factorial=(number)=>{
//     let fact=1;
//     for(let i=1;i<=number;i++){
//         fact*=i;
//     }
//     console.log(fact);
// }
// let arr=[1,2,3,4,5];
// arr.forEach(factorial);

// // sum of an array [1,2,3,4,5]
// let sum=(number)=>{
//     let sum=0;
//     for(let i=1;i<=number;i++){
//         sum+=i;
//     }
//     console.log("The sum is : ",sum);
// }
// let arr=[1,2,3,4,5];
// arr.forEach(sum);




// //-------------------//Map Functions\\-----------------

// console.log("||........MAP FUNCTIONS.......||");
// let arr=[1,2,3,4,5];
// arr.map((val)=>{
//     console.log(val);
// });

// let newArray=arr.map((val)=>{
//     return val;
// })
// console.log("The new array is : ",newArray);




// console.log("||........FILTER FUNCTIONS.......||");
// let arr=[1,2,3,4,5];
// let newArray=arr.filter((val)=>{
//     return val%2==0;
// });
// console.log(newArray);




// console.log("||........REDUCE FUNCTIONS.......||");
// let arr=[1,2,3,4,5];
// const output=arr.reduce((result,curentValue)=>{
//     return result+curentValue;
// });
// console.log(output);

// //find lergest nummber
// let arr=[1,2,3,5,4];
// const output=arr.reduce((prev,curent)=>{
//     return prev>curent ? prev:curent;
// });
// console.log(output);




//Question 1: We are giving array of marks of students.Filter out of the marks of students that scored 90+
let arr = [89, 90, 97, 96, 12, 32, 456, 23];
let newArray = arr.filter((value) => {
  return value >= 90;
});
console.log("The 90+ scored are : ", newArray);



//Question 2: Take a number n as input from user.Create an array of numbers from 1 to n.Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers in the array.
let n = prompt("Enter the number of elements : ");
let array = [];
for (let i = 0; i < n; i++) {
  array[i] = parseFloat(prompt("Enter the number : "));
}
// console.log(`The array is = ${array}`);
// for sum------------
let sum = array.reduce((prev, current) => {
  return prev + current;
});
console.log(`The sum of ${array} is = ${sum}`);
// for product------------
let product = array.reduce((prev, current) => {
  return prev * current;
});
console.log(`The product of ${array} is = ${product}`);
