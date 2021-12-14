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

const arr = [3, 3, 7];
const result = (a , b) => a + b;
const active_Result = arr.reduce(result);
const Inc_Result = arr.reduce(result , 10);

console.log(active_Result);
console.log(Inc_Result);