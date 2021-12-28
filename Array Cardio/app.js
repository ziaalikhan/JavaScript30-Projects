// const arr = [
//     {
//         name: "stefen" , country: "US", birth: 1987
//     },
//     {
//         name: "John" , country: "UK", birth: 1976
//     },
//     {
//         name: "Ronald" , country: "US", birth: 1967
//     },
//     {
//         name: "Messi" , country: "US", birth: 1985
//     },
//     {
//         name: "Salau" , country: "US", birth: 2001
//     },
//     {
//         name: "Fam" , country: "US", birth: 2002
//     },
//     {
//         name: "sonny" , country: "US", birth: 1987
//     },
// ]
// const result1 = arr.map((val) => {
//     return val
// })
// console.log(result1);

// const result = arr.filter((val) => {
//     return val.country === "US";
// })
// console.table(result);

// const arr = [0,10,30,8,6,5,76,2,100,65,289,65,29,34,76,300];
// const result = arr.filter((val) => {
//     return val > 10 && val < 200;
// })
// console.log(result);

// const arr = [0,10,30,8,6,5,76,2,100,65,289,65,29,34,76,300];
// const result = arr.map((val) => {
//     return val;
// })
// console.log(result.splice(0,5));

// const arr = [
//     {
//         name: "stefen", country: "US", birth: 1987
//     },
//     {
//         name: "John", country: "UK", birth: 1976
//     },
//     {
//         name: "Ronald", country: "US", birth: 1967
//     },
//     {
//         name: "Messi", country: "US", birth: 1985
//     },
//     {
//         name: "Salau", country: "US", birth: 2001
//     },
//     {
//         name: "Fam", country: "US", birth: 2002
//     },
//     {
//         name: "sonny", country: "US", birth: 1987
//     },
// ];

// const result = arr.sort((a, b) => {
//     return a.birth > b.birth ? 1 : -1
// })
// console.log(result);

// const arr = [3, 3, 7];
// const result = (a , b) => a + b;
// const active_Result = arr.reduce(result);
// const Inc_Result = arr.reduce(result , 10);

// console.log(active_Result);
// console.log(Inc_Result);

// let myFirst = (a) => {
//     let b = 5
//     // console.log(name)
//     let secondFunc = ()=> {
//         let sum = a+b;
//         console.log(`the Sum is ${sum}`);
//     }
//     secondFunc();
// }
// myFirst(10);

// let obj = [
//   { name: "zia", age: 19 },
//   { name: "zia", age: 19 },
//   { name: "zia", age: 29 },
//   { name: "zia", age: 39 },
//   { name: "zia", age: 17 },
//   { name: "zia", age: 16 },
//   { name: "zia", age: 14 },
//   { name: "zia", age: 9 },
//   { name: "zia", age: 8 },
// ];
// let res = obj.filter((val) => {
//     if(obj.age > 20) {
//         return console.log(obj);
//     }
// })

// let obj = [
//   { name: "zia", age: 19 },
//   { name: "hamza", age: 19 },
//   { name: "faris", age: 29 },
//   { name: "zia", age: 39 },
//   { name: "hamza", age: 17 },
//   { name: "zia", age: 16 },
//   { name: "hamza", age: 14 },
//   { name: "zia", age: 9 },
//   { name: "faris", age: 8 },
// ];

// Filter Method //

// const result = obj.filter((val) => val.age > 20);
// console.log(result);

// Map Method //

// const result = obj.slice(1,4).map((val) => {
//     return (
//         val
//     )
// })
// console.table(result);

// Sort Method //

// const result = obj.sort((a,b) => a.age > b.age ?  1 : -1);
// console.log(result);

// const arr = [89,4,6,9,76,54,23];
// const res = arr.sort();
// console.log(res);

// Reduce Method //

// let obj = [
//     {year: 1967 , passed: 2010},
//     {year: 1878 , passed: 2015},
//     {year: 1977 , passed: 2013},
//     {year: 2012 , passed: 2012},
//     {year: 1989 , passed: 2011},
//     {year: 1996 , passed: 2006},
//   ];

// const result = obj.reduce((total, val) => {
//     return total + (val.year - val.passed);
// })
// console.log(result);

// let sum = ["zia", "faris", "hamza", "rehman", "rizwan", "sami", "zulfi"];
// let result = sum.reduce((obj, val) => {
//   return console.log(val);
// });
// console.log(result);

// let obj = {
//     name : "zia",
//     age: 20,
//     // sum : function(){
//     //     let sum = 2 + 2;
//     //     console.log(`The Sum is ${sum}`);
//     //     console.log(this.name);
//     //     console.log(this);
//     // }
// };
// console.log(obj);

// // console.log(this);


// What is RegExp ? (RegExp is a Regular expresssion which we commaonly used for Matching and Seraching the Data..)

let reg = /zia Khan/;
let para = "Thsi is  an zia Khand his fr zia Khan iends  .";
let result = reg.exec(para);
console.log(result);